<template>
  <a
    :id="id" />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    }
  }
};
</script>
