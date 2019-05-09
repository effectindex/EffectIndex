<template>
  <div :class="'navbarPullout ' + (navbarPullout ? 'active' : '')">
    <div class="navbarPullout__menu">
      <ul 
        v-for="(item, name) in navigation"
        v-show="checkItemAccess(item.scope)"
        :key="name"
      >
        <pullout-item 
          v-show="checkItemAccess(item.scope)"
          :name="name"
          :location="item.location"
          :children="item.children"
        />
      </ul>
      <donate-button style="margin-top: 1.5em; margin-left: 40px;" />
    </div>
  </div>
</template>

<script>
import DonateButton from "@/components/header/headerNav__donateButton";
import PulloutItem from "./pulloutMenu__item.vue";

export default {
  components: {
    DonateButton,
    PulloutItem
  },
  computed: {
    navbarPullout() { return this.$store.state.navbar_pullout; },
    navigation() { return this.$store.state.navigation; }
  },
  methods: {
    checkItemAccess(scope) {
      if (Array.isArray(scope)) {
        for (let i = 0; i < scope.length; i++) {
          if (this.$auth.hasScope(scope[i])) return true;
        }
        return false;
      } else return true;
    }
  }
};
</script>

<style>
.navbarPullout {
  z-index: 2;
  position: absolute;
  font-size: 14px;
  letter-spacing: 1px;
  top: 0;
  right: 0;
  width: 220px;
  height: 100%;
  background-color: #2e2e2e;
}

.navbarPullout__menu {
  padding: 20px 0;
}

.navbarPullout__menu > ul {
  text-transform: uppercase;
  margin-top: 8px;
  list-style: none;
}
</style>