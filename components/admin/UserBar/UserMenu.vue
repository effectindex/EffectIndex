<template>
  <ul class="user-menu">
    <li v-if="$auth.hasScope('admin')">
      <nuxt-link to="/admin">
        Misc
      </nuxt-link>
    </li>   
    <li v-if="$auth.hasScope('admin')">
      <nuxt-link to="/admin/users">
        Users
      </nuxt-link>
    </li>
    <li v-if="$auth.hasScope('all-replications') || $auth.hasScope('own-replications')">
      <nuxt-link to="/admin/replications">
        Replications 
      </nuxt-link>
    </li>
    <li v-if="$auth.hasScope('all-reports') || $auth.hasScope('own-reports')">
      <nuxt-link to="/admin/reports">
        Reports
      </nuxt-link>
    </li>
    <li v-if="$auth.hasScope('all-articles') || $auth.hasScope('own-articles')">
      <nuxt-link to="/admin/articles">
        Articles
      </nuxt-link>
    </li>
    <li v-if="$auth.hasScope('all-effects') || $auth.hasScope('own-effects')">
      <nuxt-link to="/admin/effects">
        Effects
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
  .user-menu {
    list-style: none;
    padding: 0;
  }

  .user-menu li {
    display: inline-block;
    margin-right: 0.5em;
  }

  .user-menu a {
    color: white;
    text-decoration: none;
  }

  .user-menu a:hover {
    color: #EEE;
  }
</style>