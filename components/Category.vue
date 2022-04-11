<template>
  <div class="categoryContainer">
    <h3 class="categoryTitle">
      <nuxt-link :to="page">
        {{ title }}
      </nuxt-link>
      <Icon
        v-show="icon"
        :filename="icon"
        class="category"
      />
    </h3>
    <div class="categoryContent">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: undefined
    },
    page: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
  .icon {
    height: 1.2em;
    width: 1.3em;
    opacity: 0.7;
  }

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