<template>
  <li> 
    <h4>
      <nuxt-link :to="'/effects/' + effect.url">
        {{ effect.name }}
      </nuxt-link>
    </h4>
    <p>
      {{ effect.summary_raw }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    effect: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
  h4 {
    margin-bottom: 0.5em;
  }
</style>
