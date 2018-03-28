<template>
  <section class="container">
    <header-nav />
    <div class="page">
        <nuxt-child />
    </div>
  </section>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';

export default {
  components: {
    HeaderNav
  }
}
</script>

<style>

@font-face {
  font-family: 'proxima-nova';
  src: url('../static/fonts/proxima-nova.woff')
}

.container {
  min-height: 100vh;
  font-family: 'Titillium Web';
}

.page {
  max-width: 1020px;
  margin: 0 auto;
  padding: 96px 32px;
}

</style>
