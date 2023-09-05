<script>
import { Card } from '@components/Card';
import ButtonDropDown from '@shell/components/ButtonDropdown';
import { isMaybeSecure } from '@shell/utils/url';

export default {
  components: {
    Card,
    ButtonDropDown,
  },
  computed: {
    endpoints() {
      return (
        this.service?.spec.ports?.map((port) => {
          const endpoint = `${
            isMaybeSecure(port.port, port.protocol) ? 'https' : 'http'
          }:${this.service.metadata.name}:${port.port}`;

          return {
            label: `${endpoint}${port.protocol === 'UDP' ? ' (UDP)' : ''}`,
            value: `/k8s/clusters/${this.clusterId}/api/v1/namespaces/${this.service.metadata.namespace}/services/${endpoint}/proxy`,
          };
        }) ?? []
      );
    },
    computedServiceName() {
      return (
        this.service?.metadata.labels?.['app.kubernetes.io/component'] ??
        this.service?.metadata.name
      );
    },
    helmChart() {
      return this.service?.metadata.labels?.['helm.sh/chart'];
    },
    kubernetesVersion() {
      return this.service?.metadata.labels?.['app.kubernetes.io/version'];
    },
    name() {
      return this.service?.metadata.name;
    },
    namespace() {
      return this.service?.metadata.namespace;
    },
  },
  props: {
    clusterId: {
      type: String,
      required: true,
    },
    service: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        metadata: {
          labels: {
            /**
             * Helm chart name that created this app (if relevant).
             */
            'helm.sh/chart': '',
            /**
             * The component of the app.
             *
             * See `app.kubernetes.io/component` from:
             * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
             */
            'app.kubernetes.io/component': '',
            /**
             * The version of the app.
             *
             * See `app.kubernetes.io/version` from:
             * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
             */
            'app.kubernetes.io/version': '',
          },
          /**
           * The name of the app.
           *
           * See `app.kubernetes.io/name` from:
           * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
           */
          name: '',
          /**
           * The namespace of the app.
           */
          namespace: '',
        },
        spec: {
          ports: [],
        },
      }),
    },
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
  },
  name: 'AppLauncherCard',
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
