<script>
import { Card } from '@components/Card';
import ButtonDropDown from '@shell/components/ButtonDropdown';

export default {
  name: 'AppLauncherCard',
  props: {
    /**
     * Data used to construct endpoints for the app.
     */
    endpointsSource: {
      type: Array,
      default: () => [],
    },
    /**
     * Helm chart name.
     */
    helmChart: {
      type: String,
      default: undefined,
    },
    /**
     * The component of the app.
     *
     * See `app.kubernetes.io/component` from:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
     */
    kubernetesComponent: {
      type: String,
      default: undefined,
    },
    /**
     * The name of the app.
     *
     * See `app.kubernetes.io/name` from:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
     */
    kubernetesName: {
      type: String,
      default: undefined,
    },
    /**
     * The version of the app.
     *
     * See `app.kubernetes.io/version` from:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/#labels
     */
    kubernetesVersion: {
      type: String,
      default: undefined,
    },
    /**
     * The name of the app.
     */
    name: {
      type: String,
      default: undefined,
    },
    /**
     * The namespace of the app.
     */
    namespace: {
      type: String,
      default: undefined,
    },
  },
  components: { ButtonDropDown, Card },
  computed: {
    endpoints() {
      return this.endpointsSource.map((_, i) => ({
        label: `http://localhost:8005/some-long-text-that-might-be-unpleasant${i}`,
        value: `http://localhost:8005/some-long-text-that-might-be-unpleasant${i}`,
      }));
    },
    computedServiceName() {
      if (this.kubernetesComponent) {
        return this.kubernetesComponent;
      }

      return this.name;
    },
  },
  methods: {
    openLink(link) {
      location.href = link;
    },
  },
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
