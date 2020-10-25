<template>
  <ul>
    <li
      v-for="effect in effects"
      :key="effect._id"
    >
      <nuxt-link :to="`/effects/${effect.url}`">
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
    }
  }
};
</script>