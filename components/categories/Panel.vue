<template>
  <div
    class="categoryContainer"
  >
    <h3 class="categoryTitle">
      {{ title }}
      <fa
        v-if="icon"
        :icon="icon"
        class="icon"
      />
      <img
        v-show="image" 
        :src="image"
        class="image"
      >
    </h3>
    <div class="actionContainer">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Array],
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
};
</script>


<style scoped>
.actionContainer {
  padding: 0.5em;
}

.categoryContainer {
  flex: 1;
  margin-top: 1em;
  min-width: 250px;
  max-width: 290px;
  flex-wrap: wrap;
  margin-right: 1em;
  border: 1px solid #DDD;
  background-color: rgb(253, 253, 253);
}

.categoryContainer:last-child {
  margin-right: 0;
}

.icon {
  margin: 0 5px;
  height: 1.1em;
}

.image {
  height: 1.1em;
  opacity: 0.75;
}

.categoryTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14pt;
  margin: 0;
  text-align: left;
  padding: 0.5em;
  background-color: rgb(240, 240, 240);
  border-bottom: 1px solid #DDD;
  letter-spacing: 1px;
}

@media(max-width: 500px) {
  .categoryContainer {
    border: 1px solid #DDD;
    min-width: auto;
    max-width: auto;
  }

  .categoryContainer:last-child {
    border: 1px solid #DDD;
  }

}


</style>