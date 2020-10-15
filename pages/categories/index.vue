<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "Categories"
      };
    },
    async fetch ({ store }) {
      await store.dispatch("getEffects");
    },
  };
</script>