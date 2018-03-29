<template>
<div>
  <section class="container">
    <header-nav />
    <div class="page">
        <nuxt-child />
    </div>
  </section>
  <custom-footer />
</div>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';
import CustomFooter from '@/components/footer/Footer.vue';

export default {
  components: {
    HeaderNav,
    CustomFooter
  }
}
</script>

<style>

@font-face {
  font-family: 'proxima-nova';
  src: url('../static/fonts/proxima-nova.woff')
}

.container {
  font-family: 'Titillium Web';
  min-height: 100vh;
  background-color: white;
}

.page {
  max-width: 1020px;
  margin: 0 auto;
  padding: 96px 32px;

}

body {
  background-color: #1f1f1f;
}

</style>
