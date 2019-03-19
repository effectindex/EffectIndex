<template>
  <div class="categoryContainer">
    <h3 class="categoryTitle"> <nuxt-link :to="link"> {{ title }} </nuxt-link>
      <fa
        v-if="icon"
        :icon="icon"
        class="icon" />
      <img
        v-show="image"
        :src="image" 
        class="image"> 
    </h3>
    <div class="categoryContent">
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
    image: {
      type: String,
      default: undefined
    },
    icon: {
      type: Array,
      default: undefined
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
  h3 {
    margin: 0;
    margin-bottom: 0em;
    border-bottom: 1px solid #CCC;
  }

  .categoryContainer {
    flex: 1;
    border: 1px solid #DDD;
    background-color: rgb(252, 252, 252);
    margin-bottom: 1em;
    min-width: 250px;
    box-shadow: 2px 2px 2px #EEE;
  }

  .categoryContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5em;
  }

  .image {
    height: 1.1em;
    opacity: 0.75;
  }

  .icon {
    height: 1.1em;
  }

  .categoryTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    font-size: 14pt;
    margin: 0;
    text-align: left;
    padding: 0.5em;
    background-color: rgb(240, 240, 240);
    letter-spacing: 1px;
}
</style>