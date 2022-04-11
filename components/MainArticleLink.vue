<template>
  <div class="mainArticleLink">
    Main article:
    <nuxt-link :to="to">
      <slot />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default : ""
    }
  }
};
</script>

<style>
.mainArticleLink {
  margin: 1em 0;
  font-style: italic;
}
</style>