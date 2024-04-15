<script>
import { MANAGEMENT } from '@shell/config/types';
import Loading from '@shell/components/Loading';
import SortableTable from '@shell/components/SortableTable';
import ButtonDropDown from '@shell/components/ButtonDropdown';
import { isMaybeSecure } from '@shell/utils/url';

import AppLauncherCard from '../components/AppLauncherCard.vue';
import ClusterActions from '../components/ClusterActions.vue';

export default {
  components: {
    Loading,
    AppLauncherCard,
    ClusterActions,
    SortableTable,
    ButtonDropDown
  },
  data() {
    return {
      servicesByCluster: [],
      ingressesByCluster: [],
      clusterLoading: {},
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
    };
  },
  methods: {
    async getClusters() {
      return await this.$store.dispatch(`management/findAll`, {
        type: MANAGEMENT.CLUSTER,
      });
    },
    getClusterName(clusterId) {
      const cluster = this.servicesByCluster.find(c => c.id === clusterId);
      return cluster ? cluster.name : '';
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
    getEndpoints(app) {
      return (
        app?.spec.ports?.map((port) => {
          const endpoint = `${
            isMaybeSecure(port.port, port.protocol) ? 'https' : 'http'
          }:${app.metadata.name}:${port.port}`;

          return {
            label: `${endpoint}${port.protocol === 'UDP' ? ' (UDP)' : ''}`,
            value: `/k8s/clusters/${this.selectedCluster}/api/v1/namespaces/${app.metadata.namespace}/services/${endpoint}/proxy`,
          };
        }) ?? []
      );
    },
    openLink(link) {
      window.open(link, '_blank');
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
    isFavorited(app, favoritedApps) {
      return favoritedApps.some(
        (favoritedService) =>
          favoritedService.id === app.id
      );
    },
    updateSearchQuery(value) {
      this.searchQuery = value;
    },
    updateSelectedCluster(value) {
      this.selectedCluster = value;
    },
    updateSelectedView(value) {
      this.selectedView = value;
    },
  },
  computed: {
    selectedClusterData() {
      const cluster = this.getCluster(this.selectedCluster);
      if (cluster) {
        let ingresses = this.ingressesByCluster.find(
          (ingressCluster) => ingressCluster.id === cluster.id
        )?.ingresses || [];
        ingresses = ingresses.map((ingress) => ({
          ...ingress,
          clusterId: cluster.id,
          clusterName: cluster.name,
        }));

        const services = cluster.services.map((service) => {
          const relatedIngress = ingresses.find((ingress) =>
            ingress.spec.rules.some((rule) =>
              rule.http.paths.some((path) =>
                path.backend.service?.name === service.metadata.name
              )
            )
          );
          return {
            ...service,
            clusterId: cluster.id,
            clusterName: cluster.name,
            relatedIngress,
          };
        });
        
        const filteredApps = this.filteredApps(services, ingresses);

        return {
          ...cluster,
          services,
          ingresses,
          filteredApps,
        };
      } else {
        console.error('Cluster not found:', this.selectedCluster);
      }
      return null;
    },
    displayedClusterData() {
      if (this.selectedCluster === 'ALL_CLUSTERS') {
        
        const allClustersData = this.servicesByCluster.map(cluster => ({
          ...cluster,
          ingresses: this.ingressesByCluster.find(ingressCluster => ingressCluster.id === cluster.id)?.ingresses || [],
          filteredApps: this.filteredApps(cluster.services, this.ingressesByCluster.find(ingressCluster => ingressCluster.id === cluster.id)?.ingresses || []),
        }));
        return allClustersData;
      } else {
        return [this.selectedClusterData]; // This just remakes use of selectedClusterData for single cluster view
      }
    },
    sortedApps() {
      if (this.selectedClusterData) {
        const services = this.selectedClusterData.services.map((service) => ({
          ...service,
          clusterId: this.selectedClusterData.id,
          clusterName: this.selectedClusterData.name,
          uniqueId: `service-${service.id}`,
        }));

        const ingresses = this.selectedClusterData.ingresses.map((ingress) => ({
          ...ingress,
          clusterId: this.selectedClusterData.id,
          clusterName: this.selectedClusterData.name,
          uniqueId: `ingress-${ingress.id}`,
        }));

        return [...services, ...ingresses].sort((a, b) => {
          const nameA = a.metadata.name.toLowerCase();
          const nameB = b.metadata.name.toLowerCase();
          if (this.tableHeaders[0].sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
          } else {
            return nameB.localeCompare(nameA);
          }
        });
      }
      return [];
    },
    filteredApps() {
      return (services, ingresses) => {
        const sortedApps = [...(services || []), ...(ingresses || {})].sort((a, b) => {
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
          <div class="cluster-header">
            <h1>
              {{ clusterData.name }}
            </h1>
          </div>
          <div class="services-by-cluster-grid">
            <AppLauncherCard
              v-for="app in clusterData.filteredApps"
              :key="`${app.clusterId}-${app.id}-${app.kind}`"
              :app="app"
              :isInGlobalView="false"
              :favorited-apps="favoritedApps"
              @toggle-favorite="toggleFavorite"
            />
          </div>
        </div>
      </div>
      <div v-else-if="selectedView === 'list'">
        <div v-for="clusterData in displayedClusterData" :key="clusterData.id">
          <div class="cluster-header">
            <h1>
              {{ clusterData.name }}
            </h1>
          </div>
          <SortableTable
            :rows="clusterData.filteredApps"
            :headers="tableHeaders"
            :row-key="'uniqueId'"
            :search="false"
            :table-actions="false"
            :row-actions="false"
            :no-rows-text="$store.getters['i18n/t']('appLauncher.noAppsFound')"
          >
            <template #cell:name="{row}">
              {{ row.metadata.name }}
            </template>
            <template #cell:namespace="{row}">
              {{ row.metadata.namespace }}
            </template>
            <template #cell:version="{row}">
              {{ row.metadata.labels?.['app.kubernetes.io/version'] }}
            </template>
            <template #cell:helmChart="{row}">
              {{ row.metadata.labels?.['helm.sh/chart'] }}
            </template>
            <template #cell:actions="{row}">
              <div style="display: flex; justify-content: flex-end;">
                <button class="icon-button favorite-icon" @click="toggleFavorite(row)">
                  <i :class="['icon', isFavorited(row, favoritedApps) ? 'icon-star' : 'icon-star-open']" />
                </button>
                <a v-if="getEndpoints(row)?.length <= 1" :href="getEndpoints(row)[0]?.value" target="_blank"
                  rel="noopener noreferrer nofollow" class="btn role-primary">
                  {{ t('appLauncher.launch') }}
                </a>
                <ButtonDropDown v-else :button-label="t('appLauncher.launch')" :dropdown-options="getEndpoints(row)"
                  :title="t('appLauncher.launchAnEndpointFromSelection')" @click-action="(o) => openLink(o.value)" />
              </div>
            </template>
          </SortableTable>
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

.favorite-icon {
  margin-right: 1rem;
}
</style>
