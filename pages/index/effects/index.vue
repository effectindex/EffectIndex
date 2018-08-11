<template>
  <div class="pageContentContainer">
    <nuxt-child class="pageContent" />
  </div>
</template>

<script>
import EffectsSidebar from "@/components/EffectsSidebar.vue";

export default {
  scrollToTop: true,
  components: {
    EffectsSidebar
  },
  head() {
    return {
      title: "Effects"
    };
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>