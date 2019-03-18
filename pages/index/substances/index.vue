<template>
  <div class="pageContent">
    <fa
      :icon="['far', 'sitemap']"
      class="fa categoryIcon" />
    <h1> Subjective Effect Index </h1>
    <description />
    substance list go here
  </div>
</template>

<script>
import Tabs from "@/components/substances/index/Tabs";
import Tab from "@/components/substances/index/Tab";
import Category from "@/components/substances/index/Category";
import Column from "@/components/substances/index/Column";
import Actions from "@/components/substances/index/Actions";
import Description from "@/components/substances/index/Description";
import Blob from "@/components/substances/index/Blob";

export default {
  components: {
    Tabs,
    Tab,
    Category,
    Actions,
    Column,
    Description,
    Blob
  },
  head() {
    return {
      title: "Subjective Effect Index"
    };
  },
  data() {
    return {
      activeTab: this.$route.query.type
    };
  },
  computed: {
    substances() {
      return this.$store.state.substances;
    },
  },
  watchQuery: ['type'],
  methods: {
    filterSubstancesByTag(...tags) {
      return this.substances.filter(substance =>
        tags.every(tag => substance.tags.indexOf(tag) > -1)
      );
    },
    selectTab(name) {
      this.activeTab = name;
    }
  },
  async fetch ({ store }) {
    await store.dispatch("getSubstances");
  },
};
</script>
