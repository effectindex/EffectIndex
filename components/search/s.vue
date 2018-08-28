<template>
  <div class="searchResult">
    {{ type }}
    {{ name }}
    search result
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
