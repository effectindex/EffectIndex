<template>
  <div class="indexCategory">
    <h3>
      <nuxt-link :to="`/categories/${page}`">
        {{ name }}
      </nuxt-link>
    </h3>
    <p> {{ description }} </p>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>