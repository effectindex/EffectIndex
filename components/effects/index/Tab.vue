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
  padding: 1em 0 0.25em 0;
  z-index: 2;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 500px) {
  .tab {
    padding: 0;
    border: 0;
  }
}

</style>
