<template>
  <ul class="categories__effectList">
    <h4 
      v-if="title"
      class="effectTitle"
    >
      {{ title }}
    </h4>
    <li 
      v-for="effect in filteredEffects"
      :key="effect.id" 
    >
      <nuxt-link
        :to="`/effects/${effect.url}`"
      >
        {{ effect.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    effects: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: undefined
    }
  },
  computed: {
    filteredEffects() {
      return this.effects.filter(
        (effect) => this.tags.every(
          (tag) => effect.tags.includes(tag)));
    }
  }
};

</script>

<style scoped>

  .effectTitle {
    margin: 0;
    padding: 0;
    
    
    font-family: 'Titillium Web',-apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica Neue, Arial, sans-serif;
    margin: 0;
    margin-bottom: 0.5em;
  }

  .categories__effectList {
    padding-left: 0;
    color: #AAA;
  }

  .categories__effectList li {
    margin-left: 1em;
    font-size: 13pt;
    line-height: 1.75em;
  }

</style>