<template>
  <div class="layoutContainer">
    <div 
      :class="{ mainContainerPulledout: navbarPullout }"
      class="mainContainer"
    >
      <header-nav />
      <main class="page">
        <nuxt />
      </main>
      <custom-footer />
    </div>
    <pullout-menu />
    <modal
      v-if="modalActive"
      :active="modalActive"
      :type="modalData.type"
      :src="(modalData.type === 'image') ? modalData.resource : modalData.resource"
      @toggleModal="toggleModal" 
    />
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav.vue";
import CustomFooter from "@/components/footer/Footer.vue";
import PulloutMenu from "@/components/PulloutMenu/PulloutMenu.vue";
import Modal from "@/components/Modal";

export default {
  name: 'EffectIndex',
  components: {
    HeaderNav,
    CustomFooter,
    PulloutMenu,
    Modal
  },
  computed: {
    navbarPullout() {
      return this.$store.state.pullout_menu.active;
    },
    modalActive() {
      return this.$store.state.modal.active;
    },
    modalData() {
      return {
        type: this.$store.state.modal.type,
        resource: this.$store.state.modal.resource
      };
    }
  },
  methods: {
    toggleModal() {
      this.$store.commit("modal/toggle");
    }
  },
  head() {
    return {
      titleTemplate: "%s - Effect Index",
      title: "Home",
      meta: [
        { name: 'description', hid: 'description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'apple-mobile-web-app-title', hid: 'apple-mobile-web-app-title', content: "Effect Index" },
        // Open Graph
        { name: 'og:title', hid: 'og:title', content: "Effect Index" },
        { name: 'og:description', hid: 'og:description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'og:type', hid: 'og:type', content: 'website' },
        { name: 'og:url', hid: 'og:url', content: 'https://effectindex.com' },
        { name: 'og:image', hid: 'og:image', content: 'https://effectindex.com/logo-letter.png' },
        // Twitter Card
        { name: 'twitter:card', hid: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', hid: 'twitter:title', content: "Effect Index" },
        { name: 'twitter:description', hid: 'twitter:description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'twitter:image', hid: 'twitter:image', content: 'https://effectindex.com/logo-letter.png' },
        { name: 'twitter:image:alt', hid: 'twitter:image:alt', content: 'Effect Index Logo' }
      ]
    };
  }
};
</script>

<style>
@font-face {
  font-family: 'Proxima Nova';
  font-display: swap;
  src: url('/fonts/proxima-nova-medium.woff2');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #1f1f1f;
}

.body--noscroll {
  overflow: hidden;
}

/* Container Styling */

.layoutContainer {
  display: flex;
  position: relative;
  flex-direction: row;
}

.modal-active {
  overflow: hidden;
}

.mainContainer {
  transition: margin-left 0.25s ease-out;
  z-index: 3;
  min-height: 100vh;
  width: 100%;
  background-color: white;
}

main {
  margin: 0 auto;
  padding: 96px 32px;
  max-width: 1000px;
  min-height: 100vh;
}

@media (max-width: 1100px) {
  .mainContainerPulledout {
    margin-left: -220px;
  }

  main {
    padding: 32px 16px;
  }
}

.fa {
  height: 1em;
}

@media (max-width: 400px) {
  main {
    padding: 8px;
  }
}

/* Generic Components */
.panelIcon {
  opacity: 0.65;
  height: 1.2em;
  width: 1.35em;
}

@media (max-width: 650px) {
  .columns {
    flex-direction: column;
  }

  .column:not(:last-child) {
    margin-right: 0em;
    margin-bottom: 1em;
  }
}

/* Page Content Styling */

.pageContent {
  padding-bottom: 50px;
  font-size: 18px;
  flex: 3;
  color: #333;
}

.pageContent .categoryIcon {
    float: right;
    height: 35px;
    width: 35px;
    opacity: 0.5;
    margin-top: 10px;
}

.pageContent p {
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
  color: #27635d;
}

.pageContent .blackButton {
  display: block;
  border: 0;
  cursor: pointer;
  font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 125px;
  margin: 1em 0;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #272727;
  opacity: 1;
  padding: 13px 15px;
  transition: opacity 100ms linear;
}

.pageContent .whiteButton {
  display: block;
  position: relative;
  width: auto;
  z-index: 5;
  border: 1px solid #ddd;
  background-color: #fbfbfb;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5em;
  opacity: 0.5;
  color: #000;
  cursor: pointer;
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12pt;
}

.pageContent .whiteButton:hover {
  opacity: 0.8;
}

.pageContent h1, .pageContent h2, .pageContent h3, .pageContent h4 {
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.pageContent h1 {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 15px;
}

.pageContent h3,
.pageContent h4 {
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 400;
  color: rgb(74, 74, 74);
  margin: 1em 0;
}

.pageContent ul {
  padding: 0;
  padding-left: 2em;
  margin: 1em 0;
}

.pageContent h4 {
  font-size: 18px;
}

.pageContent hr {
  margin: 50px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

/* Effect Categories */

.effectCategories .actionDescription {
  padding: 1em;
  border: 1px solid #eee;
  background-color: #f4f4f4;
}

.effectCategories .effectsContainer {
  margin-bottom: 3em;
}

.effectCategories .titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.effectCategories .actionIcon {
  margin-left: 1em;
  height: 1.25em;
  width: 1.25em;
  opacity: 0.75;
}

.effectCategories hr {
  clear: both;
}

.effectCategories h3 {
  font-size: 18pt;
}

.effectCategories .effectsContainer:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

/* Search */

.searchResult {
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  background-color: rgba(252, 252, 252);
}

.searchResult h3 {
  margin: 0;
  margin-bottom: 12px;
}

.searchResult .topContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.searchResult .titleAuthor h3 {
  margin: 0;
  flex: 1;
}

.searchResult .author {
  font-size: 12pt;
}

.searchResult .substanceDose {
  text-align: right;
  flex: 1;
  max-width: 300px;
}

@media (max-width: 650px) {
  .searchResult .topContainer {
    flex-direction: column;
  }

  .searchResult .substanceDose {
    margin: 1em 0;
    text-align: left;
  }
}

.searchResult .substance {
  font-size: 18pt;
  line-height: 1;
}

.searchResult .dose {
  font-size: 12pt;
  color: #888;
}
</style>
