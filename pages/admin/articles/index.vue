<template>
  <div class="pageContent articleManagement">
    <h1> Article Management </h1>
    <nuxt-link 
      class="articleManagement__link"
      to="/admin/articles/list"
    >
      Articles
    </nuxt-link>
    <nuxt-link 
      class="articleManagement__link"
      to="/admin/articles/new"
    >
      New Article
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    head() {
      return {
        title: "Article Management"
      };
    }
  };
</script>

<style scoped>
  .articleManagement__link {
    display: inline-block;
    margin-right: 2em;
  }
</style>