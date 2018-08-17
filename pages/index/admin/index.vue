<template>
  <div class="pageContent admin">
    <fa
      :icon="['far', 'trash']"
      class="fa categoryIcon" />
    <h1> Administration </h1>
    <p> The place to do secret things when nobody's looking. </p>
    <div v-show="$auth.loggedIn">
      <ul> 
        <li> <nuxt-link to="/admin/effects/list"> Manage Effects </nuxt-link> </li>
        <li> <nuxt-link to="/admin/replications/list"> Manage Replications </nuxt-link> </li>
        <li> <nuxt-link to="/admin/blog/list"> Manage Blog </nuxt-link> </li>
        <li> <nuxt-link to="/admin/users/list"> Manage Users </nuxt-link> </li>
        <li> <nuxt-link to="/admin/users/profiles"> Manage Profiles </nuxt-link> </li>
        <li> <nuxt-link to="/admin/reports/list"> Manage Reports </nuxt-link> </li>
        <li> <nuxt-link to="/admin/cheatsheet"> Viscidcode Cheat Sheet </nuxt-link> </li>
        <li> <ext-link href="https://trello.com/b/TAqyU405/effect-index"> Trello </ext-link> </li>
        <div class="serverOptionsContainer">
          <h3> Danger Zone </h3>
          <li>
            <a 
              style="cursor: pointer; color: red;"
              @click="restartServer"> Restart Server </a>
          </li>
        </div>

      </ul>      
    </div>
    <nuxt-link 
      v-show="!$auth.loggedIn"
      to="/user/login"> Log in </nuxt-link>
    <nuxt-link 
      v-show="$auth.loggedIn"
      to="/user/logout"> Log out </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
  methods: {
    async restartServer() {
      this.$store.dispatch("restartServer");
      this.$notify({
        type: 'error',
        title: 'Server Restarting',
        text: 'Please wait ~2 minutes as the server restarts.'
      });
    }
  },
  head() {
    return {
      title: "Admin"
    };
  },
  scrollToTop: true
};
</script>

<style scoped>
.serverOptionsContainer {
  background-color: #FFCCCC;
  padding: 0.5em;
  border: 2px solid #666;
  margin: 1em 0;
  width: 300px;
}

.serverOptionsContainer h3 {
  margin: 0.25em 0 1em 0;
}

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