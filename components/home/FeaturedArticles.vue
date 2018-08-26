<template>
  <div class="featuredArticles">
    <div class="featuredArticleListContainer">

      <h4> Visual Effects </h4>
      <nuxt-link 
        v-for="(effect, index) in visualEffects"
        :to="`/effects/${effect.url}`"
        :key="effect._id">
        {{ effect.name }}{{ (index &lt; (visualEffects.length - 1)) ? ',' : '' }}
      </nuxt-link>

      <h4> Cognitive Effects </h4>
      <nuxt-link 
        v-for="(effect, index) in cognitiveEffects"
        :to="`/effects/${effect.url}`"
        :key="effect._id">
        {{ effect.name }}{{ (index &lt; (visualEffects.length - 1)) ? ',' : '' }}
      </nuxt-link>

      <h4> Miscellaneous Effects </h4>
      <nuxt-link 
        v-for="(effect, index) in miscellaneousEffects"
        :to="`/effects/${effect.url}`"
        :key="effect._id">
        {{ effect.name }}{{ (index &lt; (visualEffects.length - 1)) ? ',' : '' }}
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    effects() { return this.$store.state.effects; },

    featuredEffects() {
      return this.effects.filter((effect) => effect.featured);
    },

    visualEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('visual'));
    },

    cognitiveEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('cognitive'));
    },

    miscellaneousEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('miscellaneous'));
    }



  }
};
</script>

<style scoped>

  .featuredArticleListContainer {
    margin-top: 1em;
    min-width: 400px;
  }

  .featuredArticles h4 {
    text-transform: none;
    letter-spacing: 1px;
    line-height: 1em;
    text-transform: uppercase;
    margin-bottom: 0.25em;
  }

  .featuredArticles {
    flex: 1;
  }
</style>
