<template>
  <div class="categoryContainer">
    <h3 class="categoryTitle"> {{ title }} 
      <fa
        v-show="icon"
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
    }
  }
};
</script>

<style scoped>
  h3 {
    margin: 0;
    margin-bottom: 0em;
    font-size: 18pt;
  }

  .categoryContainer {
    flex: 1;
    border: 1px solid #EEE;
    margin-bottom: 1em;
    min-width: 300px;
  }

  .categoryContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5em;
  }

  .image {
    height: 50px;
    opacity: 0.75;
  }

  .icon {
    height: 1em;
    opacity: 0.75;
  }

  .categoryTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 18pt;
    margin: 0;
    height: 50px;
    text-align: left;
    padding: 0 0.5em;
    background-color: rgb(240, 240, 240);
    letter-spacing: 1px;
}
</style>