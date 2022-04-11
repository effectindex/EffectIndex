<template>
  <header class="navbar">
    <nuxt-link to="/"> 
      <img 
        class="navbar__logo"
        src="/logo2.svg"
        alt="An eye, the EffectIndex logo."
      >
    </nuxt-link>
    <main-navigation />
    <hamburger :active="navbarPullout" />
  </header>
</template>

<script>
import MainNavigation from "./headerNav__mainNavigation";
import Hamburger from "./headerNav__hamburgerButton";

export default {
  components: {
    MainNavigation,
    Hamburger
  },
  computed: {
    navbarPullout() {
      return this.$store.state.pullout_menu.active;
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  background-color: #2e2e2e;
  height: 87px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.navbar__logo {
  align-self: center;
  height: 47px;
}
</style>