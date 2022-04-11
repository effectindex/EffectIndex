<template>
  <div class="blob">
    <slot />
  </div>
</template>

<style scoped>
  .blob {
    position: relative;
    z-index: 5;
    margin: 0;
    padding: 0.5em;
    padding-bottom: 0;
  }

  .blob p:not(:first-child) {
    margin: 0;
    margin-top: 1em;
  }

@media (max-width: 500px) {
  .blob {
    margin: 1em 0;
    border: 1px solid #ddd;
  }
}

</style>