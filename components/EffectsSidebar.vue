<template>
  <nav className="sidebar">
      <h1 class="sidebar__title"> Effects </h1>
        <ul class="sidebar__list">
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
    methods: {
        isActive: function(route) {
            return (this.$route.path === route) ? 'active' : ''
        }
    }
}
</script>

<style>
    .sidebar {
        font-family: 'proxima-nova';
    }

    .sidebar__title {
        color: rgb(0, 116, 107);
        font-size: 22px;
        font-weight: 400;
        padding-bottom: 10.5px;
    }

    .sidebar__list {
        padding: 0;
        list-style: none;
    }

    .sidebar__listItem {
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 17.5px;
        font-size: 14px;
        padding-bottom: 10.5px;
        font-weight: bold;
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