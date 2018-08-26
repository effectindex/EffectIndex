<template>
  <div class="pageContent">
    <description />
    <columns>
      <column>

        <div class="featuredContainer">
          <panel
            title="Featured Articles">
            <featured-articles />
          </panel>
          <panel
            title="Featured Reports">
            <featured-reports />
          </panel>
          <panel
            title="Substance Summaries">
            <substance-summaries />
          </panel>
        </div>
      </column>
      <column>
        <panel
          title="Featured Replications">
          <no-ssr>
            <featured-replication />
          </no-ssr>
        </panel>
      </column>
    </columns>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import Panel from '@/components/home/Panel';
import FeaturedReplication from '@/components/home/FeaturedReplication';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedReports from '@/components/home/FeaturedReports';
import SubstanceSummaries from '@/components/home/SubstanceSummaries';
import Column from '@/components/home/Column';
import Columns from '@/components/home/Columns';


export default {
  name: 'Home',
  scrollToTop: true,
  components: {
    Description,
    FeaturedReplication,
    FeaturedArticles,
    FeaturedReports,
    SubstanceSummaries,
    Panel,
    Column,
    Columns
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

  .frontpagePanel:not(:last-child) {
    margin-bottom: 1em;
  }

  .frontpagePanel >>> .frontpagePanelTitle {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1em;
    font-size: 18pt;
    padding: 0.25em 12px;
    border-bottom: 1px solid #DDD;
    background-color: #F0F0F0;
  }

</style>