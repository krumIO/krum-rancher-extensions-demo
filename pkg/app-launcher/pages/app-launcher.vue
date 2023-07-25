<script>
import Loading from '@shell/components/Loading';
import BackLink from '@shell/components/BackLink';
import BackRoute from '@shell/mixins/back-link';
import { MANAGEMENT } from '@shell/config/types';

export default {
  layout: 'plain',
  components: { BackLink, Loading },
  mixins: [BackRoute],
  async fetch() {
    this.settings = await this.$store.dispatch(`management/findAll`, {
      type: MANAGEMENT.SETTING,
    });
  },
  data() {
    return { settings: null };
  },
};
</script>

<template>
  <Loading v-if="!settings" />
  <div v-else>
    <BackLink :link="backLink" />
    <p>{{ JSON.stringify(settings, null, 2) }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
