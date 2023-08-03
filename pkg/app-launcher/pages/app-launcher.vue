<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import Loading from '@shell/components/Loading';
import { MANAGEMENT } from '@shell/config/types';
import AppLauncherCard from '../components/AppLauncherCard.vue';

const store = getCurrentInstance()?.proxy.$store;

const servicesByCluster = ref<
  { clusterText: string; services: { id: string }[] }[]
>([]);

const fetchServicesByCluster = async () => {
  const allClusters = await store.dispatch(`management/findAll`, {
    type: MANAGEMENT.CLUSTER,
  });

  servicesByCluster.value = (
    await Promise.all(
      allClusters
        .filter((c) => c.isReady)
        .map(async (c) => [
          c.spec.displayName,
          (
            await store.dispatch('cluster/request', {
              url: `/k8s/clusters/${c.id}/v1/services`,
            })
          ).data,
        ])
    )
  ).map(([cluster, services]) => ({
    clusterText: `${store.getters['i18n/t']('nav.group.cluster')} ${cluster}`,
    services,
  }));
};

onMounted(() => {
  fetchServicesByCluster();
});
</script>

<script lang="ts">
export default {
  layout: 'plain',
};
</script>

<template>
  <Loading v-if="Boolean(false)" />
  <div v-else>
    <div
      v-for="cluster in servicesByCluster"
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
          :service="service"
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
