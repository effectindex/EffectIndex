<template>
  <div class="categories__panelContainer">
    <slot />
  </div>
</template>

<style>

  .categories__panelContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media(max-width: 500px) {
    .categories__panelContainer {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }
  }
</style>
