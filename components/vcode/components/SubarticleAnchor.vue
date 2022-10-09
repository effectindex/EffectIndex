<template>
  <span
    :id="id"
    class="subarticle-anchor"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
  }
};
</script>
