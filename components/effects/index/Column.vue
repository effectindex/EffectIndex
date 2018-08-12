<template>
  <div class="column">
    <slot />
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped> 
  .column {
    flex: 1;
    margin: 0em 0.25em 0.5em 0.25em;
  }

@media (max-width: 500px) {
  .column {
    margin: 0;
  }
}
</style>

