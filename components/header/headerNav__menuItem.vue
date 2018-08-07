<template>
  <div 
    v-if="access"
    class="headerNav__menuItem">
    <nuxt-link 
      :to="location"
      class="headerNav__menuItemLink" > {{ name }} </nuxt-link>
    <ul 
      v-if="subMenuItems"
      class="headerNav__dropdown">
      <li
        v-for="(item, index) in subMenuItems"
        v-if="itemAccess(item.scope)"
        :key="index">
        <a 
          v-if="item.external"
          :href="item.location"
          target="_blank"> {{ item.name }} </a>
        <nuxt-link
          v-else
          :to="item.location"> {{ item.name }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    subMenuItems: {
      type: Array,
      default: () => []
    },
    scope: {
      type: Array,
      default: null
    }
  },
  computed: {
    access() {
      if (Array.isArray(this.scope)) {
        for (let i = 0; i < this.scope.length; i++) {
          if (this.$auth.hasScope(this.scope[i])) return true;
        }
        return false;
      } else return true;
    }
  },
  methods: {
    itemAccess(scope) {
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
.headerNav__menuItem {
  position: relative;
  line-height: 32.5px;
  align-self: center;
  transition: color 0.5s ease;
  margin: 0 1em;
}

.headerNav__menuItem a {
  color: #ccc;
  font-weight: 300;
  padding: 10px 0;
  letter-spacing: 2px;
  text-decoration: none;
  transition: color ease-in-out 0.15s;
  text-decoration: none;
  text-transform: uppercase;
}

.headerNav__menuItem:hover > a {
  color: #fff;
  text-shadow: 0px 0px 2px rgb(150, 219, 252);
}

.headerNav__menuItem:hover ul {
  max-height: 250px;
}

.headerNav__dropdown > li {
  display: none;
  font-size: 13px;
  text-transform: uppercase;
  line-height: normal;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;;
  padding: 5px 20px;
  margin: 0;
  font-weight: bold;
}

.headerNav__menuItem:hover ul > li {
  display: block;
  animation-name: dropdownTextOpacity;
  animation-duration: 0.75s;
  animation-iteration-count: 1;
}

.headerNav__dropdown {
  position: absolute;
  overflow: hidden;
  left: -20px;
  z-index: 3;
  list-style: none;
  padding: 1em 0 1em 0;
  max-height: 0;
  background-color: #2e2e2e;
  transition: max-height 0.2s ease-out;
}

.headerNav__dropdown > li > a:hover {
  color: #fff;
  text-shadow: 0px 0px 2px rgb(150, 219, 252);
}

@keyframes dropdownTextOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>