<template>
  <div class="pageContent substanceManagement">
    <h1> Substance Management </h1>
    <nuxt-link
      class="substanceManagement__link"
      to="/admin/substances/list"> Substance List </nuxt-link>
    <nuxt-link
      class="substanceManagement__link"
      to="/admin/substances/add"> Add New Substance </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
      middleware: ['auth'],
      head() {
        return {
          title: "Modify Substances"
        };
      }
  };
</script>

<style scoped>
  .substanceManagement__link {
      display: inline-block;
      margin-right: 2em;
  }
</style>
