<script>
import { Card } from '@components/Card';
import ButtonDropDown from '@shell/components/ButtonDropdown';
import { isMaybeSecure } from '@shell/utils/url';
import { ingressFullPath } from '@shell/models/networking.k8s.io.ingress';

export default {
  components: {
    Card,
    ButtonDropDown,
  },
  props: {
    clusterId: {
      type: String,
      required: true,
    },
    favoritedServices: {
      type: Array,
      required: true,
    },
    service: {
      type: Object,
      default: null,
    },
    ingress: {
      type: Object,
      default: null,
    },
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.service);
    },
  },
  computed: {
    app() {
      return this.service || this.ingress;
    },
    endpoints() {
      return (
        this.service?.spec?.ports?.map((port) => {
          const endpoint = `${
            isMaybeSecure(port.port, port.protocol) ? 'https' : 'http'
          }:${this.service?.metadata?.name}:${port.port}`;

          return {
            label: `${endpoint}${port.protocol === 'UDP' ? ' (UDP)' : ''}`,
            value: `/k8s/clusters/${this.clusterId}/api/v1/namespaces/${this.service.metadata.namespace}/services/${endpoint}/proxy`,
          };
        }) ?? []
      );
    },
    computedServiceName() {
      return (
        this.service?.metadata?.labels?.['app.kubernetes.io/component'] ??
        this.service?.metadata?.name
      );
    },
    helmChart() {
      return this.service?.metadata?.labels?.['helm.sh/chart'];
    },
    kubernetesVersion() {
      return this.service?.metadata?.labels?.['app.kubernetes.io/version'];
    },
    name() {
      return this.service?.metadata?.name;
    },
    namespace() {
      return this.service?.metadata?.namespace;
    },
    isFavorited() {
      return this.favoritedServices.some(
        (favoritedService) =>
          favoritedService?.clusterId === this.clusterId &&
          favoritedService?.service?.id === this.service?.id
      );
    },
    isGlobalApp() {
      return this.service?.metadata?.annotations?.['extensions.applauncher/global-app'] === 'true';
    },
    ingressPath() {
      return ingressFullPath(this.ingress, this.ingress?.spec?.rules?.[0]);
    }
  },
  name: 'AppLauncherCard',
  layout: 'plain',
};
</script>

<template>
  <Card class="app-launcher-card" :show-highlight-border="false" :sticky="true">
    <template #title>
      <div style="width: 100%">
        <p style="font-size: 1.2rem">
          {{ service ? service?.metadata?.name : ingress?.metadata?.name }}
        </p>
        <div style="color: var(--input-label); display: flex; justify-content: space-between; margin-top: 4px;">
          <p v-if="app.type === 'service' && app.metadata?.labels?.['app.kubernetes.io/version'] !== undefined">
            {{ kubernetesVersion }}
          </p>
          <p v-if="app.type === 'service' && app.metadata?.labels?.['helm.sh/chart'] !== undefined">
            {{ helmChart }}
          </p>
          <p v-if="app.type === 'ingress'">
            Ingress
          </p>
        </div>
      </div>
    </template>
    <template #body>
      <p v-if="app.type === 'service'">{{ namespace }}/{{ name }}</p>
      <p v-if="app.type === 'ingress'">{{ ingressPath }}</p>
    </template>
    <template #actions>
      <button v-if="!isGlobalApp" class="icon-button" @click="toggleFavorite">
        <i :class="['icon', isFavorited ? 'icon-star' : 'icon-star-open']" />
      </button>
      <i v-else class="icon icon-globe icon-only" />
      <a
        v-if="(endpoints?.length ?? 0) <= 1 && app.type === 'service'"
        :disabled="!endpoints?.length"
        :href="endpoints[0]?.value"
        target="_blank"
        rel="noopener noreferrer nofollow"
        :title="endpoints?.length === 0 ? t('appLauncher.noEndpointFoundForApp') : t('appLauncher.launchEndpoint', {
          endpoint: endpoints[0].label,
        })"
        class="btn role-primary"
      >
        {{ t('appLauncher.launch') }}
      </a>
      <a
        v-else-if="app.type === 'ingress'"
        :href="ingressPath"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="btn role-primary"
      >
        {{ t('appLauncher.launch') }}
      </a>
      <ButtonDropDown
        v-else
        :button-label="t('appLauncher.launch')"
        :dropdown-options="endpoints"
        :title="t('appLauncher.launchAnEndpointFromSelection')"
        @click-action="(o) => openLink(o.value)"
      />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
@import "@shell/assets/styles/fonts/_icons.scss";

.app-launcher-card {
  ::v-deep .card-body {
    overflow: hidden !important;
  }
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--primary);
  font-size: 1.8rem;
  margin-right: 1rem;
}

.icon-only {
  background: none;
  border: none;
  padding: 0;
  color: var(--primary);
  font-size: 1.8rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
}
</style>
