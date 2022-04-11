<template>
  <ul class="categories__panelEffectList">
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
      <ul
        v-if="effect.subarticles.length"
        class="effectSubarticleList"
      >
        <li 
          v-for="(subarticle, index) in effect.subarticles"
          :key="index"
        >
          <nuxt-link
            :to="`/effects/${effect.url}/?s=${subarticle.id}`"
          > 
            {{ subarticle.title }}
          </nuxt-link>
        </li>
      </ul>
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

  .effectSubarticleList {
    padding-left: 0;
    margin-bottom: 0;
  }

  .categories__panelEffectList {
    padding-left: 0;
    color: #AAA;
    margin: 0;
  }

 .categories__panelEffectList ul {
   margin: 0;
 }

  .categories__panelEffectList li {
    margin-left: 1em;
    font-size: 13pt;
    line-height: 1.75em;
  }

</style>