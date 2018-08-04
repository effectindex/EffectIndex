<template>
  <div class="headerNav__mainNavigation">
    <menu-item
      v-for="(navItem, name) in navigation"
      :location="navItem.location"
      :name="name"
      :sub-menu-items="navItem.children"
      :scope="navItem.scope"
      :key="navItem.name" />
    <donate-button style="margin-left: 20px" />
  </div>
</template>

<script>
import MenuItem from "@/components/header/headerNav__menuItem";
import DonateButton from "@/components/header/headerNav__donateButton";

export default {
  components: {
    MenuItem,
    DonateButton
  },
  data() {
    return {
      subMenuItems: {}
    };
  },
  computed: {
    navigation() { return this.$store.state.navigation; }
  },

};
</script>

<style>
.headerNav__mainNavigation {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  font-family: "proxima-nova";
  font-size: 13px;
}

@media (max-width: 1000px) {
  .headerNav__mainNavigation {
    display: none;
  }
}
</style>