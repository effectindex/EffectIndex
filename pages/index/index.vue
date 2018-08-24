<template>
  <div class="pageContentContainer">
    <div class="pageContent">
      <description />
      <no-ssr>
        <featured-replication
          :images="imageReplications" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import FeaturedReplication from '@/components/home/FeaturedReplication';

export default {
  scrollToTop: true,
  components: {
    Description,
    FeaturedReplication
  },

  computed: {
    imageReplications() {
      return this.$store.state.replications.filter((replication) => replication.type === 'image');
    }
  },

  async fetch({ store }) {
    await store.dispatch("getEffects");
    await store.dispatch("getReplications");
    await store.dispatch("getReports");
  }
};
</script>