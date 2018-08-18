<template>
  <div class="panel">
    <h4> Full Article: <br> <nuxt-link :to="link"> {{ title }} </nuxt-link> </h4>
    <hr >
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
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
  h4 {
    margin-bottom: 0;
    text-transform: none;
    font-family: 'Proxima Nova';
    font-size: 16pt;
    letter-spacing: 0;
  }

  hr {
    margin: 0.5em 0;
  }

  .panel {
    flex: 1;
    min-width: 250px;
  }

  .panel:not(:last-child) {
    margin-right: 1em;
  }

</style>