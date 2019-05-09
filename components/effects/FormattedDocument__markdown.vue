<template>
  <!-- eslint-disable-next-line -->
  <span v-html="$md.render(body)" />
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      default: ""
    }
  }
};
</script>