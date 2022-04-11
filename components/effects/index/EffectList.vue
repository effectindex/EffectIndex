<template>
  <ul>
    <li 
      v-for="effect in filteredEffects"
      :key="effect._id"
    >
      <nuxt-link
        :to="'/effects/' + effect.url"
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