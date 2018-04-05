<template>
  <nav class="sidebar">
      <h1 class="sidebar__title sidebar__title--screen"> Effects </h1>
      <a class="sidebar__title--mobile" @click="toggleCollapse()"> 
          <h1 class="sidebar__title">
              <span v-if="collapsed"> + </span>
              <span v-else> - </span> Effect Categories
          </h1>
       </a>
        <ul :class="'sidebar__list ' + (this.collapsed ? 'collapsed' : '')">
          <li class="sidebar__listItem" v-bind:class="isActive('/')">
              <nuxt-link to="/"> All </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/sensory/')"> 
              <nuxt-link to="/sensory/"> Sensory </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/cognitive/')">
              <nuxt-link to="/cognitive/"> Cognitive  </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/physical/')">
              <nuxt-link to="/physical/"> Physical </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/psychedelics/')">
              <nuxt-link to="/psychedelics/"> Psychedelic  </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/dissociatives/')">
              <nuxt-link to="/dissociatives/"> Dissociative  </nuxt-link>
          </li>
          <li class="sidebar__listItem" v-bind:class="isActive('/deliriants/')">
              <nuxt-link to="/deliriants/"> Deliriant  </nuxt-link>
          </li>
        </ul>
  </nav>
</template>

<script>
export default {
    data () {
        return {
            collapsed: true
        }
    },
    methods: {
        isActive: function(route) {
            return (this.$route.path === route) ? 'active' : ''
        },
        toggleCollapse() {
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style>
    .sidebar__title--mobile {
        display: none;
        cursor: pointer;
    }

    .sidebar__list {
        padding: 0;
        max-height: 250px;
        list-style: none;
        transition: 0.5s ease-out;;
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
        }
    }

    .sidebar {
        font-family: 'proxima-nova';
        flex: 1;
    }

    .sidebar__title {
        color: rgb(0, 116, 107);
        font-size: 22px;
        font-weight: 300;
        padding-bottom: 10.5px;
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