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
  },
  head() {
    return {
      title: 'Effect Index'
    }
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
    max-width: 1000px;
  }

  @media (max-width: 800px) {
    .pageContentContainer {
      flex-direction: column;
    }
  }

  .pageContent {
    padding-bottom: 50px;
    font-size: 18px;
    flex: 3;
  }

  .pageContent .categoryIcon {
    float: right;
    font-size: 35px;
    opacity: 0.6;
    margin: 5px 0px 0px 15px;
  }

  .pageContent p {
    font-family: Titillium Web;
    color: rgba(26, 26, 26, 0.7);
    font-weight: 400;
    line-height: 28.8px;
    margin: 0 0 1em 0;
  }

  .pageContent .bold {
    font-weight: bold;
  }

  .pageContent .underline {
    text-decoration: underline;
  }

  .pageContent a {
    color: #3d9991;
    text-decoration: none;
  }

  .pageContent a:hover {
    color: #27635d
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

  .pageContent h3, .pageContent h4 {
      text-transform: uppercase;
      font-family: proxima-nova;
      font-size: 22px;
      letter-spacing: 2px;
      font-weight: 400;
      color: rgb(74, 74, 74);
      margin: 1em 0;
  }

  .pageContent ul {
    padding: 0;
    padding-left: 2em;
    margin-bottom: 1em;
    color: #666;
  }

  .pageContent h4 {
    font-size: 18px;
  }

  .pageContent hr {
    margin: 50px 0;
    border: 0;
    border-top: 1px solid #CCC;
  }
  



</style>
