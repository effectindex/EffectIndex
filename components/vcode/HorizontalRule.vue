<template>
  <hr
    :style="`opacity: ${opacity}`"
  >
</template>

<script>

export default {
    props: {
        opacity: {
            type: String,
            default: "1.0"
        }
    }
};

</script>

<style scoped>

hr {
  margin: 50px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

</style>
