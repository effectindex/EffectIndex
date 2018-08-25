<template>
  <div class="featuredArticles">
    <h1> Featured Articles </h1>
    <div class="featuredArticleListContainer">
      <h4> Visual Effects: </h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    effects() {
      return this.$store.state.effects;
    },

    visualEffects() {
      return 'asdf';
    }
  }
};
</script>

<style scoped>

  .featuredArticleListContainer {
    margin-top: 1em;
    min-width: 400px;
  }

  .featuredArticles h1 {
    margin-top: 0;
    line-height: 1em;
    font-size: 23pt;
  }

  .featuredArticles h4 {
    text-transform: none;
    letter-spacing: 0;
  }

  .featuredArticles {
    flex: 1;
  }
</style>
