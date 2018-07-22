<template>
  <div class="pageContent admin">
    <i class="categoryIcon fa fa-trash-o fa-2x" />
    <h1> Administration </h1>
    <p> The place to do secret things when nobody's looking. </p>
    <div v-if="$auth.loggedIn">
      <ul> 
        <li> <nuxt-link to="/admin/effects/"> Manage Effects </nuxt-link> </li>
        <li> <nuxt-link to="/admin/replications/"> Manage Replications </nuxt-link> </li>
        <li> <nuxt-link to="/admin/blog"> Manage Blog </nuxt-link> </li>
        <li> <nuxt-link to="/admin/users"> Manage Users </nuxt-link> </li>
        <li>
          <a 
            style="cursor: pointer; color: red;"
            @click="restartServer"> Restart Server </a>
        </li>
      </ul>      
    </div>
    <nuxt-link 
      v-if="!$auth.loggedIn"
      to="/user/login"> Log in </nuxt-link>
    <nuxt-link 
      v-else
      to="/user/logout"> Log out </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
  </div>
</template>

<script>
export default {
  methods: {
    async restartServer() {
      this.$store.dispatch("restartServer");
    }
  },
  head() {
    return {
      title: "Admin – Effect Index"
    };
  },
  scrollToTop: true
};
</script>

<style scoped>
.admin {
  background-color: white;
  height: 100vh;
  padding: 2em;
}

ul {
  list-style: none;
  padding: 0;
}

p {
  font-style: italic;
  font-size: 0.9em;
}
</style>