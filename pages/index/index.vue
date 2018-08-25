<template>
  <div class="pageContentContainer">
    <div class="pageContent">
      <description />
      <div class="featuredContainer">
        <featured-articles />
        <featured-reports />
      </div>
      <no-ssr>
        <featured-replication />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import FeaturedReplication from '@/components/home/FeaturedReplication';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedReports from '@/components/home/FeaturedReports';

export default {
  scrollToTop: true,
  components: {
    Description,
    FeaturedReplication,
    FeaturedArticles,
    FeaturedReports
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

<style scoped>
  .featuredContainer {
    margin: 2em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

</style>