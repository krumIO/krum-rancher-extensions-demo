<script>
import { MANAGEMENT } from '@shell/config/types';
import Loading from '@shell/components/Loading';

import AppLauncherCard from '../components/AppLauncherCard.vue';

import { mockServicesByCluster } from '../mock/mockData';

export default {
  components: {
    Loading,
    AppLauncherCard,
  },
  data() {
    return {
      servicesByCluster: [],
      mockServicesByCluster: [],
      clusterLoading: {},
      loading: true,
      selectedCluster: null,
      clusterOptions: [],
    };
  },
  async mounted() {
    console.log('mounted');
    try {
      const allClusters = await this.getClusters();
      this.servicesByCluster = await this.getServicesByCluster(allClusters);
      this.mockServicesByCluster = await this.getMockServicesByCluster();
      this.servicesByCluster.push(...this.mockServicesByCluster);
      console.log('servicesByCluster', this.servicesByCluster);

      // Set the first cluster as the selected cluster
      if (this.servicesByCluster.length > 0) {
        this.selectedCluster = this.servicesByCluster[0].id;
      }
      this.generateClusterOptions();
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
    async getMockServicesByCluster() {
      return await Promise.resolve(mockServicesByCluster);
    },
    getClusterName(clusterId) {
      const cluster = this.servicesByCluster.find(c => c.id === clusterId);
      return cluster ? cluster.name : '';
    },
    getCluster(clusterId) {
      return this.servicesByCluster.find(c => c.id === clusterId);
    },
    async getServicesByCluster(allClusters) {
      return await Promise.all(
        allClusters
          .filter((cluster) => cluster.isReady)
          .map(async (cluster) => {
            const clusterData = {
              name: `${this.$store.getters['i18n/t']('nav.group.cluster')} ${cluster.spec.displayName}`,
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
              clusterData.services = services;
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
    generateClusterOptions() {
      this.clusterOptions = this.servicesByCluster.map((cluster) => ({
        label: cluster.name,
        value: cluster.id,
      }));
      console.log('clusterOptions', this.clusterOptions);
    },
  },
  layout: 'plain',
};
</script>

<template>
  <Loading v-if="loading" :label="$store.getters['i18n/t']('appLauncher.loading')" />
  <div v-else>
    <div class="cluster-header">
      <h1>{{ selectedCluster ? getClusterName(selectedCluster) : $store.getters['i18n/t']('appLauncher.selectCluster') }}</h1>
      <div class="cluster-actions">
        <button class="icon-button">
          <i class="icon icon-sort" />
        </button>
        <div class="select-wrapper">
          <select v-model="selectedCluster" class="cluster-select">
            <option v-for="option in clusterOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
        <button class="icon-button">
          <i class="icon icon-apps" />
        </button>
        <button class="icon-button">
          <i class="icon icon-list-flat" />
        </button>
      </div>
    </div>
    <div v-if="selectedCluster">
      <p v-if="getCluster(selectedCluster).loading">{{ $store.getters['i18n/t']('appLauncher.loading') }}</p>
      <div v-else class="services-by-cluster-grid">
        <template v-if="getCluster(selectedCluster).services.length === 0">
          <p>{{ $store.getters['i18n/t']('appLauncher.noServicesFound') }}</p>
        </template>
        <AppLauncherCard
          v-else
          v-for="service in getCluster(selectedCluster).services"
          :key="service.id"
          :cluster-id="selectedCluster"
          :service="service"
        />
      </div>
    </div>
    <div v-else>
      <p>{{ $store.getters['i18n/t']('appLauncher.noClusterSelected') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@shell/assets/styles/fonts/_icons.scss";

.services-by-cluster-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.cluster-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  background: var(--header-bg);
  border-bottom: var(--header-border-size) solid var(--header-border);
  height: var(--header-height);
  position: sticky;
  top: 0;
}

.cluster-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--primary);
  font-size: 1.25rem;
}

.icon-button:hover {
  color: var(--primary-hover);
}
</style>
