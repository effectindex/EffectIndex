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
  padding-top: 0.25em;
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
