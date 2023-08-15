<script lang="ts" setup>
import { MANAGEMENT } from '@shell/config/types';
import { ref, onMounted, getCurrentInstance } from 'vue';
import Loading from '@shell/components/Loading';
import AppLauncherCard from '../components/AppLauncherCard';
import type { AppLauncherService } from '../components/AppLauncherCard';

const store = getCurrentInstance()?.proxy.$store;

const servicesByCluster = ref<
  { id: string; name: string; services: AppLauncherService[] }[]
>([]);

const fetchServicesByCluster = async () => {
  const allClusters = await store.dispatch(`management/findAll`, {
    type: MANAGEMENT.CLUSTER,
  });

  servicesByCluster.value = await Promise.all(
    allClusters
      .filter((cluster) => cluster.isReady)
      .map(async (cluster) => ({
        name: `${store.getters['i18n/t']('nav.group.cluster')} ${
          cluster.spec.displayName
        }`,
        id: cluster.id,
        services: (
          await store.dispatch('cluster/request', {
            url: `/k8s/clusters/${cluster.id}/v1/services`,
          })
        ).data,
      }))
  ).then((data) => {
      console.log(data);
      return data;
    }
  );
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
      :key="cluster.id"
      style="margin-bottom: 2rem"
    >
      <h1
        class="cluster-header hack-to-keep-header-above-app-launcher-card-dropdown-button"
      >
        {{ cluster.name }}
      </h1>
      <div class="services-by-cluster-grid">
        <AppLauncherCard
          v-for="service in cluster.services"
          :key="service.id"
          :cluster-id="cluster.id"
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
}

// HACK(cjshearer): this shouldn't be necessary, since the position:sticky in
// the app-launcher page's header should make the header appear above its
// siblings, but the AppLauncherCard's ButtonDropDown element seems to have the
// wrong z-index by default, so we just force it to be below the header. See the
// following slack conversation for previous discussion on this:
// https://krumware.slack.com/archives/C053W936JAZ/p1691418985551309?thread_ts=1691099848.592889&cid=C053W936JAZ
.hack-to-keep-header-above-app-launcher-card-dropdown-button {
  z-index: 1;
}
</style>
