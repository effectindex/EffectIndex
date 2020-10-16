<template>
  <div class="pageContent">
    <description />
    <Columns>
      <Column>
        <SubstanceSummaries />
        <FeaturedEffects />
      </Column>
      <Column>
        <FeaturedReplications />
        <FeaturedReports />
      </Column>
    </Columns>
  </div>
</template>

<script>
import Description from '@/components/home/Description';
import FeaturedReplications from '@/components/home/FeaturedReplications';
import FeaturedEffects from '@/components/home/FeaturedEffects';
import FeaturedReports from '@/components/home/FeaturedReports';
import SubstanceSummaries from '@/components/home/SubstanceSummaries';
import Column from '@/components/home/Column';
import Columns from '@/components/home/Columns';



export default {
  name: 'Home',
  scrollToTop: true,
  components: {
    Description,
    Column,
    Columns,
    SubstanceSummaries,
    FeaturedEffects,
    FeaturedReports,
    FeaturedReplications
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