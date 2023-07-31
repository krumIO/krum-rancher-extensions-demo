<script>
import Loading from '@shell/components/Loading';
import { MANAGEMENT } from '@shell/config/types';
import AppLauncherCard from '../components/AppLauncherCard.vue';

export default {
  layout: 'plain',
  components: { AppLauncherCard, Loading },
  async fetch() {
    const allClusters = await this.$store.dispatch(`management/findAll`, {
      type: MANAGEMENT.CLUSTER,
    });

    this.servicesByCluster = await Promise.all(
      allClusters
        .filter((c) => c.isReady)
        .map(async (c) => [
          c.spec.displayName,
          (
            await this.$store.dispatch('cluster/request', {
              url: `/k8s/clusters/${c.id}/v1/services`,
            })
          ).data,
        ])
    );
  },
  computed: {
    appCardData() {
      const clusterTranslation =
        this.$store.getters['i18n/t']('nav.group.cluster');

      return this.servicesByCluster.map(([cluster, services]) => ({
        clusterText: `${clusterTranslation} ${cluster}`,
        services: services.map((service) => ({
          helmChart: service.metadata.labels?.['helm.sh/chart'],
          kubernetesComponent:
            service.metadata.labels?.['app.kubernetes.io/component'],
          kubernetesName: service.metadata.labels?.['app.kubernetes.io/name'],
          kubernetesVersion:
            service.metadata.labels?.['app.kubernetes.io/version'],
          name: service.metadata.name,
          namespace: service.metadata.namespace,
        })),
      }));
    },
  },
  data() {
    return {
      servicesByCluster: [],
    };
  },
};
</script>

<template>
  <Loading v-if="$fetchState.pending" />
  <div v-else>
    <div
      v-for="cluster in appCardData"
      :key="cluster.clusterText"
      style="margin-bottom: 2rem"
    >
      <h1 class="cluster-header">
        {{ cluster.clusterText }}
      </h1>
      <div class="services-by-cluster-grid">
        <AppLauncherCard
          v-for="service in cluster.services"
          :key="service.id"
          :endpoints-source="Array.from(Array(Math.floor(Math.random() * 4)))"
          :helm-chart="service.helmChart"
          :kubernetes-component="service.kubernetesComponent"
          :kubernetes-instance="service.kubernetesInstance"
          :kubernetes-name="service.kubernetesName"
          :kubernetes-version="service.kubernetesVersion"
          :name="service.name"
          :namespace="service.namespace"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-by-cluster-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.cluster-header {
  align-items: center;
  background: var(--header-bg);
  border-bottom: var(--header-border-size) solid var(--header-border);
  display: flex;
  height: var(--header-height);
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
