<template>
  <div class="pageContent">
    <Description />
    <FrontpageArticle />
    <Columns>
      <Column>
        <SubstanceSummaries />
        <FeaturedEffects />
        <FeaturedArticles />
      </Column>
      <Column>
        <client-only>
          <FeaturedReplications />
        </client-only>
        <FeaturedReports
          :number-of-reports="8"
        />
      </Column>
    </Columns>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import FeaturedReplications from '@/components/home/FeaturedReplications';
import FeaturedEffects from '@/components/home/FeaturedEffects';
import FeaturedReports from '@/components/home/FeaturedReports';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FrontpageArticle from "@/components/home/FrontpageArticle";
import SubstanceSummaries from '@/components/home/SubstanceSummaries';
import Column from '@/components/home/Column';
import Columns from '@/components/home/Columns';

export default {
  name: 'Home',
  scrollToTop: true,
  components: {
    FrontpageArticle,
    Description,
    Column,
    Columns,
    SubstanceSummaries,
    FeaturedEffects,
    FeaturedReports,
    FeaturedReplications,
    FeaturedArticles
  },

  computed: {
    imageReplications() {
      return this.$store.state.replications.list.filter((replication) => replication.type === 'image');
    }
  },

  async fetch({ store }) {
    await Promise.all([
      store.dispatch("effects/get"),
      store.dispatch("replications/featured"),
      store.dispatch("reports/get"),
      store.dispatch("articles/get")
    ]);
  }
};
</script>

<style scoped>

.column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.column:not(:last-child) {
  margin-right: 1em;
}

.columns {
  display: flex;
  flex-direction: row;
}

@media(max-width: 800px) {
  .columns {
    flex-direction: column;
  }

  .column:not(:last-child) {
    margin-right: 0em;
  }

  .column {
    margin-bottom: 1em;
  }
}
</style>
