<template>
  <div class="categories__columns">
    <slot />
  </div>
</template>

<style>

  .categories__columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .categories__columns .categories__columnContainer {
    margin-right: 1em;
  }

  .categories__columnContainer:last-child {
    margin-right: 0;
  }

  @media(max-width: 650px) {
    .categories__columns .categories__columnContainer {
      margin-right: 0em;
    }
  }


</style>