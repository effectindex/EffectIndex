<template>
  <li class="pulloutMenu__itemContainer">
    <a
      v-if="!children && external"
      :href="location"
      target="_blank"
    > {{ name }} </a>
    <nuxt-link
      v-else-if="!children"
      :to="location"
    >
      {{ name }}
    </nuxt-link>
    <a
      v-else
      @click="toggleExpanded()"
    >
      <span v-if="!expanded"> + </span>
      <span v-else> - </span>
      {{ name }}
    </a>
    <ol v-if="expanded && children">
      <li
        v-for="child in children"
        v-show="checkItemAccess(child.scope)"
        :key="child.name"
      >
        <nuxt-link
          v-if="!child.external"
          :to="child.location"
        >
          {{ child.name }}
        </nuxt-link>
        <a
          v-else
          :href="child.location"
          target="_blank"
        > {{ child.name }} </a>
      </li>
    </ol>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    external: {
      type: Boolean,
      default: false
    },
    children: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return {
      expanded: false
    };
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
    checkItemAccess(scope) {
      if (Array.isArray(scope)) {
        for (let i = 0; i < scope.length; i++) {
          if (this.$auth.hasScope(scope[i])) return true;
        }
        return false;
      } else return true;
    }
  },

};
</script>

<style>
.pulloutMenu__itemContainer > ol {
  list-style: none;
  padding-left: 20px;
  margin-bottom: 30px;
}

.pulloutMenu__itemContainer > ol > li {
  margin-top: 0.75em;
}

.pulloutMenu__itemContainer a {
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: 0.25s;
  text-decoration: none;
  color: #ccc;
  user-select: none;
}

.pulloutMenu__itemContainer a:hover {
  color: white;
  text-shadow: 0px 0px 2px rgb(150, 219, 252);
}
</style>
