<template>
  <div class="pageContentContainer">
    <div class="pageContent">
      <h1> Welcome to Effect Index </h1>
      <description />
    </div>
  </div>
</template>

<script>
import Description from '@/components/home/Description';

export default {
  scrollToTop: true,
  components: {
    Description
  },
  
  async fetch({ store }) {
    await store.dispatch("getEffects");
    await store.dispatch("getReplications");
    await store.dispatch("getReports");
  }
};
</script>