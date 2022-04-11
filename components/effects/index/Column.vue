<template>
  <div class="column">
    <slot />
  </div>
</template>

<style scoped> 
  .column {
    flex: 1;
    position: relative;
    z-index: 5;
    margin: 0em 0.25em 0.5em 0.25em;
  }

@media (max-width: 500px) {
  .column {
    margin: 0;
  }
}
</style>

