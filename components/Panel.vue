<template>
  <div class="panel">
    <h4 class="title"> <nuxt-link :to="link"> {{ title }} </nuxt-link> </h4>
    <div class="contentContainer">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
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
    min-height: 45px;
  }



  hr {
    margin: 0.5em 0;
  }

  .panel {
    flex: 1;
    min-width: 250px;
  }

</style>