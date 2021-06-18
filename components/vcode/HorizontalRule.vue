<template>
  <hr
    :style="`opacity: ${hrOpacity}`"
  >
</template>

<script>

export default {
    props: {
        hrOpacity: {
            type: String
            default: "1.0"
        }
    }
}

</script>

<style scoped>

hr {
  margin: 50px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

</style>
