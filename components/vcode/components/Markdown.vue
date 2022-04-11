<template>
  <!-- eslint-disable-next-line -->
  <span v-html="$md.render(text)" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>