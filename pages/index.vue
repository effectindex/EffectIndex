<template>
  <div class="content">
    <section :class="'sectionContainer ' + (navbarPullout ? 'sectionContainer--pulledout' : '')">
      <header-nav />
      <div class="page">
        <nuxt-child />
      </div>
      <custom-footer />
    </section>
    <pullout-menu />
    <notifications />
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav.vue";
import CustomFooter from "@/components/footer/Footer.vue";
import PulloutMenu from "@/components/PulloutMenu/PulloutMenu.vue";

export default {
  components: {
    HeaderNav,
    CustomFooter,
    PulloutMenu
  },
  computed: {
    navbarPullout() {
      return this.$store.state.navbar_pullout;
    }
  },
  head() {
    return {
      titleTemplate: "Effect Index - %s",
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
/* Container Styling */

.content {
  display: flex;
  position: relative;
  flex-direction: row;
}

.sectionContainer {
  transition: margin-left 0.25s ease-out;
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
  font-family: "Titillium Web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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

.pageContent .nuxt-link-exact-active {
  text-decoration: underline;
}

.pageContent a:hover {
  color: #27635d;
}

.pageContent .blackButton {
  display: block;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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

.pageContent h3,
.pageContent h4 {
  text-transform: uppercase;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
  border-top: 1px solid #ccc;
}
</style>
