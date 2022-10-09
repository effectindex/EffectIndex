<template>
  <div class="columns">
    <slot />
  </div>
</template>

<style scoped>
  .columns {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1em 0;
  }

  @media (max-width: 800px) {
    .columns {
      flex-direction: column;
    }
  }
</style>