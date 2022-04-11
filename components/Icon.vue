<template>
  <div 
    class="icon"
    :style="`mask-image: ${maskUrl}; background: ${color};`"
  />
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    maskUrl () {
      return this.filename ? `url(/icons/${this.filename})` : 'none';
    }
  }
};
</script>

<style>
  .icon {
    mask-repeat: no-repeat;
    mask-size: contain;
  }
</style>