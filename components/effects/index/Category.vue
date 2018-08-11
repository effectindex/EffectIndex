<template>
  <div
    class="categoryContainer">
    <h3 class="categoryTitle">
      <i 
        :class="'fa icon fa-' + icon" /> 
      {{ title }} 
    </h3>
    <div class="actionContainer">
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
    icon: {
      type: String,
      default: ""
    }
  },
};
</script>


<style scoped>
.categoryContainer {
  flex: 1;
  min-width: 200px;
  margin: 0.5em auto;
  border: 1px solid #DDD;
  background-color: #F6F6F6;
}

.categoryTitle {
  font-size: 14pt;
  margin: 0;
  text-align: left;
  padding: 0.5em;
  background-color: #F0F0F0;
  border-bottom: 1px solid #DDD;
  letter-spacing: 1px;
}

</style>