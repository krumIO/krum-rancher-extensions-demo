<script>
import { MANAGEMENT } from '@shell/config/types';
import Loading from '@shell/components/Loading';

import AppLauncherCard from '../components/AppLauncherCard.vue';
import ClusterActions from '../components/ClusterActions.vue';
import ClusterGridView from '../components/ClusterGridView.vue';
import ClusterListView from '../components/ClusterListView.vue';

export default {
  components: {
    Loading,
    AppLauncherCard,
    ClusterActions,
    ClusterGridView,
    ClusterListView,
  },
  data() {
    return {
      servicesByCluster: [],
      ingressesByCluster: [],
      loading: true,
      selectedCluster: null,
      clusterOptions: [],
      selectedView: 'grid',
      favoritedApps: [],
      searchQuery: '',
      tableHeaders: [
        {
          name: 'name',
          label: 'Name',
          value: 'metadata.name',
          sort: 'metadata.name',
          sortOrder: 'asc',
        },
        {
          name: 'namespace',
          label: 'Namespace',
          value: 'metadata.namespace',
        },
        {
          name: 'version',
          label: 'Version',
          value: 'metadata.labels["app.kubernetes.io/version"]',
        },
        {
          name: 'helmChart',
          label: 'Helm Chart',
          value: 'metadata.labels["helm.sh/chart"]',
        },
        {
          name: 'actions',
          label: 'Actions',
          value: 'actions',
          align: 'right',
        },
      ],
    };
  },
  async mounted() {
    try {
      const allClusters = await this.getClusters();
      this.servicesByCluster = await this.getServicesByCluster(allClusters);
      this.ingressesByCluster = await this.getIngressesByCluster(allClusters);
      this.selectedCluster = "ALL_CLUSTERS";
      this.generateClusterOptions();

      // Retrieve global services based on annotations
      this.servicesByCluster.forEach((cluster) => {
        cluster.services.forEach((service) => {
          if (service.metadata?.annotations?.['extensions.applauncher/global-app'] === 'true') {
            this.favoritedApps.push({
              ...service,
              clusterId: cluster.id,
              clusterName: cluster.name,
            });
          }
        });
      });

      // Retrieve global ingresses based on annotations
      this.ingressesByCluster.forEach((cluster) => {
        cluster.ingresses.forEach((ingress) => {
          if (ingress.metadata?.annotations?.['extensions.applauncher/global-app'] === 'true') {
            this.favoritedApps.push({
              ...ingress,
              clusterId: cluster.id,
              clusterName: cluster.name,
            });
          }
        });
      });

      // Retrieve favorites from localStorage
      const storedFavorites = localStorage.getItem('favoritedApps');
      if (storedFavorites) {
        this.favoritedApps.push(...JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error fetching clusters', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async getClusters() {
      return await this.$store.dispatch(`management/findAll`, {
        type: MANAGEMENT.CLUSTER,
      });
    },
    getCluster(clusterId) {
      return this.servicesByCluster.find(c => c.id === clusterId) || null;
    },
    async getServicesByCluster(allClusters) {
      return await Promise.all(
        allClusters
          .filter((cluster) => cluster.isReady)
          .map(async (cluster) => {
            const clusterData = {
              name: cluster.spec.displayName,
              id: cluster.id,
              services: [],
              loading: true,
              error: false,
            };
            try {
              const services = (
                await this.$store.dispatch('cluster/request', {
                  url: `/k8s/clusters/${cluster.id}/v1/services`,
                })
              ).data;
              clusterData.services = services.map((service) => ({
                ...service,
                clusterId: cluster.id,
                clusterName: cluster.spec.displayName,
              }));
            } catch (error) {
              console.error(`Error fetching services for cluster ${cluster.id}:`, error);
              clusterData.error = true;
            } finally {
              clusterData.loading = false;
            }
            return clusterData;
          })
      );
    },
    async getIngressesByCluster(allClusters) {
      return Promise.all(
        allClusters
          .filter((cluster) => cluster.isReady)
          .map(async (cluster) => {
            const clusterData = {
              name: cluster.spec.displayName,
              id: cluster.id,
              ingresses: [],
              loading: true,
              error: false,
            };
            try {
              const ingresses = (
                await this.$store.dispatch('cluster/request', {
                  url: `/k8s/clusters/${cluster.id}/v1/networking.k8s.io.ingresses`,
                })
              ).data;
              clusterData.ingresses = ingresses.map((ingress) => ({
                ...ingress,
                clusterId: cluster.id,
                clusterName: cluster.spec.displayName,
              }));
            } catch (error) {
              console.error(`Error fetching ingresses for cluster ${cluster.id}:`, error);
              clusterData.error = true;
            } finally {
              clusterData.loading = false;
            }
            return clusterData;
          })
      );
    },
    generateClusterOptions() {
      this.clusterOptions = [{ label: 'All Clusters', value: 'ALL_CLUSTERS' }, ...this.servicesByCluster.map(cluster => ({
        label: cluster.name,
        value: cluster.id,
      }))];
    },
    toggleSortOrder() {
      this.tableHeaders[0].sortOrder = this.tableHeaders[0].sortOrder === 'asc' ? 'desc' : 'asc';
    },
    toggleFavorite(item) {
      const index = this.favoritedApps.findIndex(
        (favoritedApp) =>
          favoritedApp.id === item.id &&
          favoritedApp.kind === item.kind
      );
      
      if (index !== -1) {
        this.favoritedApps.splice(index, 1);
      } else {
        this.favoritedApps.push({
          ...item
        });
      }

      // Store updated favorites in localStorage
      const favsToStore = JSON.stringify(this.favoritedApps.filter((item) => (item.metadata.annotations?.['extensions.applauncher/global-app'] !== 'true')));
      localStorage.setItem('favoritedApps', favsToStore);
    },
    updateSearchQuery(value) {
      this.searchQuery = value;
    },
  },
  computed: {
    displayedClusterData() {
      if (this.selectedCluster === 'ALL_CLUSTERS') {
        const allClustersData = this.servicesByCluster.map(cluster => ({
          ...cluster,
          ingresses: this.ingressesByCluster.find(ingressCluster => ingressCluster.id === cluster.id)?.ingresses || [],
          filteredApps: this.filteredApps(cluster.services, this.ingressesByCluster.find(ingressCluster => ingressCluster.id === cluster.id)?.ingresses || []),
        }));
        return allClustersData;
      } else {
        const cluster = this.getCluster(this.selectedCluster);
        if (cluster) {
          const ingresses = this.ingressesByCluster.find(
            (ingressCluster) => ingressCluster.id === cluster.id
          )?.ingresses || [];

          const services = cluster.services;
          
          const filteredApps = this.filteredApps(services, ingresses);

          return [{
            ...cluster,
            ingresses,
            filteredApps,
          }];
        } else {
          console.error('Cluster not found:', this.selectedCluster);
        }
      }
      return [];
    },
    filteredApps() {
      return (services, ingresses) => {
        const sortedApps = [...(services || []), ...(ingresses || [])].sort((a, b) => {
          const nameA = a.metadata.name.toLowerCase();
          const nameB = b.metadata.name.toLowerCase();
          if (this.tableHeaders[0].sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
          } else {
            return nameB.localeCompare(nameA);
          }
        });

        if (this.searchQuery.trim() === '') {
          return sortedApps;
        } else {
          const searchTerm = this.searchQuery.trim().toLowerCase();
          return sortedApps.filter(app => {
            return (app.metadata.name.toLowerCase().includes(searchTerm) ||
              app.metadata.namespace.toLowerCase().includes(searchTerm) ||
              app.metadata.labels?.['app.kubernetes.io/version']?.toLowerCase().includes(searchTerm) ||
              app.metadata.labels?.['helm.sh/chart']?.toLowerCase().includes(searchTerm) ||
              app.metadata.fields.includes(searchTerm));
          });
        }
      };
    },
  },
  layout: 'plain',
};
</script>

<template>
  <Loading v-if="loading" :label="$store.getters['i18n/t']('appLauncher.loading')" />
  <div v-else class="main-container">
    <ClusterActions
      :search-query="searchQuery"
      :is-grid-view="selectedView === 'grid'"
      :selected-cluster="selectedCluster"
      :cluster-options="clusterOptions"
      @update:search-query="updateSearchQuery"
      @toggle-sort="toggleSortOrder"
      @update:selected-cluster="selectedCluster = $event"
      @set-view="selectedView = $event"
    />
    <div v-if="favoritedApps.length > 0">
      <div class="cluster-header">
        <h2>{{ t('appLauncher.globalApps') }}</h2>
      </div>
      <div class="services-by-cluster-grid">
        <AppLauncherCard v-for="favoritedApp in favoritedApps"
          :key="`${favoritedApp.clusterId}-${favoritedApp.id}-${favoritedApp.kind}-fav`"
          :app="favoritedApp"
          :isInGlobalView="true"
          :favorited-apps="favoritedApps"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>
    <div v-if="selectedCluster">
      <div v-if="selectedView === 'grid'">
        <div v-for="clusterData in displayedClusterData" :key="clusterData.id">
          <ClusterGridView
            :cluster-data="clusterData"
            :favorited-apps="favoritedApps"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </div>
      <div v-else-if="selectedView === 'list'">
        <div v-for="clusterData in displayedClusterData" :key="clusterData.id">
          <ClusterListView
            :cluster-data="clusterData"
            :favorited-apps="favoritedApps"
            :table-headers="tableHeaders"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $store.getters['i18n/t']('appLauncher.noClusterSelected') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@shell/assets/styles/fonts/_icons.scss";

.main-container {
  margin-top: -2.425rem;
}

.services-by-cluster-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.cluster-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  background: var(--header-bg);
  border-bottom: var(--header-border-size) solid var(--header-border);
  height: var(--header-height);
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
