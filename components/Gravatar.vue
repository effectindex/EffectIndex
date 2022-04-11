<template>
  <div class="gravatar">
    <img :src="`https://www.gravatar.com/avatar/${hash}?s=50`">
  </div>
</template>

<script>
export default {
  props: {
    hash: {
      type: String,
      default: undefined
    }
  },
};
</script>

<style scoped>
  .gravatar {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    overflow: hidden;
  }
</style>