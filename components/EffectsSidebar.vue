<template>
  <nav class="sidebar">
    <h1 class="sidebar__title sidebar__title--screen"> Effects </h1>
    <a 
      class="sidebar__title--mobile"
      @click="toggleCollapse()">
      <h1 class="sidebar__title">
        <span v-if="collapsed"> + </span>
        <span v-else> - </span> Effect Categories
      </h1>
    </a>
    <ul :class="'sidebar__list ' + (collapsed ? 'collapsed' : '')">
      <li
        :class="isActive('/effects/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/"> All </nuxt-link>
      </li>
      <li
        :class="isActive('/effects/psychedelics/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/psychedelics/"> Psychedelic </nuxt-link>
      </li>
      <li 
        :class="isActive('/effects/dissociatives/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/dissociatives/"> Dissociative </nuxt-link>
      </li>
      <li 
        :class="isActive('/effects/deliriants/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/deliriants/"> Deliriant </nuxt-link>
      </li>
      <li 
        :class="isActive('/effects/sensory/')"
        class="sidebar__listItem" 
      >
        <nuxt-link to="/effects/sensory/"> Sensory </nuxt-link>
      </li>
      <li 
        :class="isActive('/effects/cognitive/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/cognitive/"> Cognitive </nuxt-link>
      </li>
      <li 
        :class="isActive('/effects/physical/')"
        class="sidebar__listItem"
      >
        <nuxt-link to="/effects/physical/"> Physical </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    isActive: function(route) {
      return this.$route.path === route ? "active" : "";
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style scoped>
.sidebar__title--mobile {
  display: none;
  cursor: pointer;
}

.sidebar__list {
  padding: 0;
  margin: 0;
  max-height: 250px;
  list-style: none;
  transition: 0.5s ease-out;
}

@media (max-width: 800px) {
  .sidebar__title--screen {
    display: none;
  }

  .sidebar__title--mobile {
    display: block;
  }

  .collapsed {
    max-height: 0px;
  }

  .sidebar__list {
    overflow: hidden;
    margin-bottom: 1em;
  }
}

.sidebar {
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;;
  flex: 1;
}

.sidebar ul {
  padding: 0;
}

.sidebar__title {
  color: #3d9991;
  font-size: 22px;
  font-weight: 300;
  padding-bottom: 10.5px;
  user-select: none;
}

.sidebar__listItem {
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 17.5px;
  font-size: 15px;
  padding-bottom: 10.5px;
  transition: opacity ease 100ms;
  opacity: 0.4;
}

.sidebar__listItem.active {
  opacity: 0.8;
}

.sidebar__listItem a {
  text-decoration: none;
  color: rgba(26, 26, 26);
}

.sidebar__listItem:hover {
  opacity: 0.8;
}
</style>