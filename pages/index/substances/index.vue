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
import Tabs from "@/components/effects/index/Tabs";
import Tab from "@/components/effects/index/Tab";
import Category from "@/components/effects/index/Category";
import Column from "@/components/effects/index/Column";
import Actions from "@/components/effects/index/Actions";
import Description from "@/components/effects/index/Description";
import Blob from "@/components/effects/index/Blob";

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
    effects() {
      return this.$store.state.effects;
    },
  },
  watchQuery: ['type'],
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    },
    selectTab(name) {
      this.activeTab = name;
    }
  },
  async fetch ({ store }) {
    await store.dispatch("getEffects");
  },
};
</script>
