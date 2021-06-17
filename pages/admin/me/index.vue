<template>
  <div class="pageContent">
    <h1> {{ username }} </h1>
    <ul class="user-menu">
      <li>
        <nuxt-link to="/admin/me/contribs">
          My Contributions
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/me/password">
          Change password
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/me/profile">
          Edit profile
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/user/logout">
          Logout
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    username() {
      return this.$auth.user.username;
    }
  }
};
</script>

<style scoped>
  .user-menu {
    padding: 0;
    list-style: none;
  }
</style>