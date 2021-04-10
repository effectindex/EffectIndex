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

  .columns >>> .column {
    flex: 1;
  }

  .columns >>> .column:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    .columns {
      flex-direction: column;
    }

    .columns >>> .column:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 10px;
    }

  }
</style>