<template>
  <div class="tab"> 
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.tab {
  border: 1px solid #DDD;
  z-index: 2;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
