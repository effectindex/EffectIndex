<template>
  <div class="effect__longSummary">
    <h4>
      <nuxt-link
        :to="`/effects/${effect.url}`">
        {{ effect.name }}
      </nuxt-link>
    </h4>
    <div v-html="$md.render(long_summary)" />
  </div>
</template>

<script>
export default {
  props: {
    effect: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    long_summary() {
      return this.effect.long_summary ? this.effect.long_summary : "Long summary placeholder.";
    }
  }
};
</script>

<style scoped>
  .effect__longSummary {
    padding-bottom: 1.5em;
    margin-bottom: 3em;
  }
</style>