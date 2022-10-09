<template>
  <div class="column">
    <slot />
  </div>
</template>

<style scoped>
  .column {
      flex: 1;
  }

  .column:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    .column:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }


</style>