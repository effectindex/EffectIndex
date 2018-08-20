<template>
  <div class="panel">
    <div class="contentContainer">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
  .title {
    margin: 0;
    text-transform: none;
    font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16pt;
    letter-spacing: 0;
    line-height: 1em;
  }

  hr {
    margin: 0.5em 0;
  }

  .panel {
    flex: 1;
    min-width: 250px;
  }

</style>