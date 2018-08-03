<template>
  <div class="pageContentContainer">
    <effects-sidebar />
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