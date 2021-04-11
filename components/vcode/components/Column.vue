<template>
  <div class="column">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  }
};
</script>

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