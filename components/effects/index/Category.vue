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
  margin: 0 auto 1em auto; 
  border: 1px solid #DDD;
  background-color: rgb(253, 253, 253);
}

.categoryContainer:last-child {
  margin-bottom: 0;
}

.categoryTitle {
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
    margin: 0.5em auto;
    border: 1px solid #DDD;
  }

  .categoryContainer:last-child {
    border: 1px solid #DDD;
  }

}


</style>