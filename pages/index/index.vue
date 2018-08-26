<template>
  <div class="pageContent">
    <description />
    <div class="featuredContainer">
      <panel
        title="Featured Articles">
        <featured-articles />
      </panel>
      <panel
        title="Featured Reports">
        <featured-reports />
      </panel>
    </div>
    <no-ssr>
      <featured-replication />
    </no-ssr>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import Panel from '@/components/home/Panel';
import FeaturedReplication from '@/components/home/FeaturedReplication';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedReports from '@/components/home/FeaturedReports';

export default {
  name: 'Home',
  scrollToTop: true,
  components: {
    Description,
    FeaturedReplication,
    FeaturedArticles,
    FeaturedReports,
    Panel
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
    margin: 1em 0;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .frontpagePanel {
    flex: 1;
    min-width: 350px;
    border: 1px solid #DDD;
    background-color: rgb(252, 252, 252);
  }

  .frontpagePanel:first-child {
    margin-right: 1em;
  }

    @media(max-width: 765px) {
      .frontpagePanel:first-child {
        margin-right: 0;
        margin-bottom: 1em;
      }
    }

  .frontpagePanel >>> .frontpagePanelTitle {
    margin-top: 0;
    line-height: 1em;
    font-size: 20pt;
    padding: 0.25em 0.25em;
    border-bottom: 1px solid #DDD;
    background-color: #F0F0F0;
  }

  .frontpagePanel >>> .frontpagePanelContent {
    padding: 0.5em;
    padding-top: 0;
  }

</style>