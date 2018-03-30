<template>
<div class="content">
  <section :class="'sectionContainer ' + ($store.state.navbar_pullout ? 'sectionContainer--pulledout' : '')">
    <header-nav />
    <div class="page">
        <nuxt-child />
    </div>
    <custom-footer />
  </section>
  <pullout-menu />
</div>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';
import CustomFooter from '@/components/footer/Footer.vue';
import PulloutMenu from '@/components/PulloutMenu/PulloutMenu.vue';

export default {
  components: {
    HeaderNav,
    CustomFooter,
    PulloutMenu
  }
}
</script>

<style>

.content {
  display: flex;
  position: relative;
  flex-direction: row;
}

.sectionContainer {
  transition: margin-left .25s ease-out;
  z-index: 3;
  min-height: 100vh;
  width: 100%;
  background-color: white;
}

.page {
  margin: 0 auto;
  padding: 96px 32px;
  max-width: 1000px;
  min-height: 100vh;
}

@media (max-width: 1000px) {
  .sectionContainer--pulledout {
    margin-left: -260px;
  }

  .page {
    padding: 32px 16px;
  }
}

@media (max-width: 400px) {
  .page {
    padding: 8px;
  }
}
</style>
