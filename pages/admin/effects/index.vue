<template>
  <div class="pageContent effectManagement">
    <h1> Effect Management </h1>
    <nuxt-link
      class="effectManagement__link"
      to="/admin/effects/list"
    >
      Effect List
    </nuxt-link>
    <nuxt-link 
      class="effectManagement__link"
      to="/admin/effects/add"
    >
      Add New Effect
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
      middleware: ['auth'],
      head() {
        return {
          title: "Modify Effects"
        };
      }
  };
</script>

<style scoped>
  .effectManagement__link {
      display: inline-block;
      margin-right: 2em;
  }
</style>