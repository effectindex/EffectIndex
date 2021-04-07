<template>
  <ul :class="listStyle">
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    listStyle: {
      type: String,
      default: 'disc'
    }
  }
};
</script>

<style scoped>
  ul.circle {
    list-style: disc;
  }

  ul.square {
    list-style:square;
  }

  ul.dash {
    list-style: none; 
  }

  ul.dash >>> li:before {
    content: '\2013';
    position: relative;
    left: -10px;
  }
</style>