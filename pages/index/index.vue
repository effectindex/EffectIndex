<template>
  <div class="pageContent">
    <description />
    <columns>
      <column>
        <div class="featuredContainer">
          <panel
            icon="flask.svg"
            title="Substance Summaries"
          >
            <substance-summaries />
          </panel>
          <panel
            icon="sitemap.svg"
            title="Featured Effects"
          >
            <featured-articles />
          </panel>
        </div>
      </column>

      <column>
        <panel
          icon="images.svg"
          title="Featured Replications"
        >
          <client-only>
            <featured-replication />
          </client-only>
        </panel>
        <panel
          icon="file-signature.svg"
          title="Featured Reports"
        >
          <featured-reports />
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
    await Promise.all([
      store.dispatch("getEffects"),
      store.dispatch("getReplications"),
      store.dispatch("getReports")
    ]);
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
    min-width: 300px;
    border: 1px solid #DDD;
    background-color: rgb(252, 252, 252);
  }

  .frontpagePanel:not(:last-child) {
    margin-bottom: 1em;
  }

  .frontpagePanel >>> .frontpagePanelTitleContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDD;
    background-color: #F0F0F0;
    padding: 5px 12px;
  }

  .frontpagePanel >>> .frontpagePanelTitleContainer h1 {
    padding: 0;
  }

  .frontpagePanel >>> .frontpagePanelTitle {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1em;
    font-size: 16pt;
    padding: 6px 12px;
  }

</style>