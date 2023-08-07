<script lang="ts" setup>
import { Card } from '@components/Card';
import ButtonDropDown from '@shell/components/ButtonDropdown';
import { isMaybeSecure } from '@shell/utils/url';
import { computed } from 'vue';

const props = defineProps<{
  clusterId: string;
  service: AppLauncherService;
}>();

const endpoints = computed(
  () =>
    props.service.spec.ports?.map((port) => {
      const endpoint = `${
        isMaybeSecure(port.port, port.protocol) ? 'https' : 'http'
      }:${props.service.metadata.name}:${port.port}`;

      return {
        label: `${endpoint}${port.protocol === 'UDP' ? ' (UDP)' : ''}`,
        value: `k8s/clusters/${props.clusterId}/api/v1/namespaces/${props.service.metadata.namespace}/services/${endpoint}/proxy`,
      };
    }) ?? []
);

const computedServiceName = computed(() => {
  if (props.service.metadata.labels?.['app.kubernetes.io/component']) {
    return props.service.metadata.labels['app.kubernetes.io/component'];
  }

  return props.service.metadata.name;
});

const helmChart = computed(
  () => props.service.metadata.labels?.['helm.sh/chart']
);

const kubernetesVersion = computed(
  () => props.service.metadata.labels?.['app.kubernetes.io/version']
);

const name = computed(() => props.service.metadata.name);

const namespace = computed(() => props.service.metadata.namespace);

const openLink = (link: string) => {
  window.open(link);
};
</script>

<script lang="ts">
// TODO(cjshearer): see if there are existing type definitions for k8s services
// that we can use instead of manually providing the ones we need.
export type AppLauncherService = {
  id: string;
  metadata: {
    labels?: {
      /**
       * Helm chart name that created this app (if relevant).
       */
      'helm.sh/chart'?: string;
      /**
       * The component of the app.
       *
       * See `app.kubernetes.io/component` from:
       * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
       */
      'app.kubernetes.io/component'?: string;
      /**
       * The version of the app.
       *
       * See `app.kubernetes.io/version` from:
       * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
       */
      'app.kubernetes.io/version'?: string;
    };
    /**
     * The name of the app.
     *
     * See `app.kubernetes.io/name` from:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
     */
    name: string;
    /**
     * The namespace of the app.
     */
    namespace: string;
  };
  spec: {
    ports?: {
      name?: string;
      port: number;
      protocol: string;
    }[];
  };
};
export default {
  layout: 'plain',
};
</script>

<template>
  <Card :show-highlight-border="false" :sticky="true">
    <template #title>
      <div style="width: 100%">
        <p style="font-size: 1.2rem">
          {{ computedServiceName }}
        </p>
        <div
          style="
            color: var(--input-label);
            display: flex;
            justify-content: space-between;
            margin-top: 4px;
          "
        >
          <p v-if="kubernetesVersion !== undefined">
            {{ kubernetesVersion }}
          </p>
          <p v-if="helmChart !== undefined">
            {{ helmChart }}
          </p>
        </div>
      </div>
    </template>
    <template #body>
      <p>{{ namespace }}/{{ name }}</p>
    </template>
    <template #actions>
      <a
        v-if="(endpoints?.length ?? 0) <= 1"
        :disabled="!endpoints?.length"
        :href="endpoints[0]?.value"
        target="_blank"
        rel="noopener noreferrer nofollow"
        :title="
          endpoints?.length === 0
            ? t('appLauncher.noEndpointFoundForApp')
            : t('appLauncher.launchEndpoint', {
                endpoint: endpoints[0].label,
              })
        "
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
