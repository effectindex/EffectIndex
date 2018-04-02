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

/* Container Styling */

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
    margin-left: -220px;
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


/* Page Content Styling */

.pageContentContainer {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
  }

  @media (max-width: 640px) {
    .pageContentContainer {
      flex-direction: column;
    }
  }

  .pageContent .categoryIcon {
    float: right;
    font-size: 50px;
    opacity: 0.6;
    margin: 0px 0px 5px 5px;
  }

  .pageContent p {
    font-family: Titillium Web;
    color: rgba(26, 26, 26, 0.7);
    font-size: 18px;
    font-weight: 400;
    line-height: 28.8px;
    margin: 0 0 1em 0;
  }

  .pageContent .bold {
    font-weight: bold;
  }

  .pageContent a {
    color: rgb(61, 153, 145);
    text-decoration: none;
  }

  .pageContent .blackButton {
      display: block;
      font-family: proxima-nova;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      width: 125px;
      text-align: center;
      text-decoration: none;
      color: white;
      background-color: #272727;
      opacity: 1;
      padding: 13px 15px;
      transition: opacity 100ms linear;
  }

  .pageContent .blackButton:hover {
      opacity: 0.8;
  }

  .pageContent h1 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 15px;
  }

</style>
