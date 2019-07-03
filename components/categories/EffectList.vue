<template>
  <ul class="categories__effectList">
    <EffectListItem 
      v-for="effect in filteredEffects"
      :key="effect._id"
      :effect="effect"
    />
  </ul>
</template>

<script>

import EffectListItem from './EffectListItem';

export default {
  components: {
    EffectListItem
  },
  props: {
    effects: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
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

  .categories__effectList {
    list-style: none;
    padding-left: 0;
  }

  .categories__effectList li {
    padding: 0.25em 0em;
    border-bottom: 1px solid #EEE;
  }

  .categories__effectList li:last-child {
    border-bottom: none;
  }

</style>