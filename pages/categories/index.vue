<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    async fetch ({ store }) {
      await store.dispatch("effects/get");
    },
    head() {
      return {
        title: "Categories"
      };
    },
  };
</script>
