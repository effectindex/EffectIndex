<template>
  <div class="pageContent admin">
    <fa
      :icon="['far', 'trash']"
      class="fa categoryIcon"
    />
    <h1> Administration </h1>
    <p> The place to do secret things when nobody's looking. </p>
    <client-only>
      <div v-if="$auth.loggedIn">
        <nuxt-link to="/user/logout">
          Log out
        </nuxt-link>
        <div class="tasksContainer">
          <div 
            class="taskContainer"
          >
            <h3> Admin </h3>
            <ul>
              <li v-show="role.editor || role.admin">
                <nuxt-link to="/admin/effects/list">
                  Effects
                </nuxt-link>
              </li>
              <li v-show="role.editor || role.admin">
                <nuxt-link to="/admin/replications/list">
                  Replications
                </nuxt-link>
              </li>
              <li v-show="role.admin">
                <nuxt-link to="/admin/blog/list">
                  Blog
                </nuxt-link>
              </li>
              <li v-show="role.admin">
                <nuxt-link to="/admin/users/list">
                  Users
                </nuxt-link>
              </li>
              <li v-show="role.admin">
                <nuxt-link to="/admin/users/profiles">
                  Profiles
                </nuxt-link>
              </li>
              <li v-show="role.admin">
                <nuxt-link to="/admin/reports/list">
                  Reports
                </nuxt-link>
              </li>
            </ul>

            <div 
              v-show="role.admin"
              class="serverOptionsContainer"
            >
              <h3> Danger Zone </h3>
              <a 
                class="dangerZone"
                @click="restartServer"
              > Restart Server </a>
            </div>
          </div>

          <div 
            class="taskContainer"
          >
            <h3> Documentation </h3>
            <ul>
              <li>
                <nuxt-link to="/admin/cheatsheet">
                  Viscidcode Cheat Sheet
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/missing">
                  Missing Data
                </nuxt-link>
              </li>
              <li>
                <ext-link href="https://trello.com/b/TAqyU405/effect-index">
                  Trello
                </ext-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
    <nuxt-link 
      v-show="!$auth.loggedIn" 
      to="/user/login"
    >
      Log in
    </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
  computed: {
    role() {
      const auth = this.$store.state.auth;
      const user = auth.user;
      if (user) return user.scope;
      else return {};
    }
  },
  methods: {
    async restartServer() {
      this.$store.dispatch("restartServer");
        this.$toasted.show(
          'Please wait while the server restarts.',
          {
            duration: 2000,
            type: 'error'
          }
        );

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

.tasksContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.taskContainer:first-child {
  margin-left: 0;
}

.taskContainer:last-child {
  margin-right: 0;
}

.dangerZone {
  display: block;
  cursor: pointer;
  color: white;
  border: 3px solid yellow;
  margin: 1em;
  font-weight: bold;
  background-color: red;
  padding: 0.5em;
}

.dangerZone:hover {
  color: orange;
}

.taskContainer {
  border: 1px solid #eee;
  padding: 1em;
  margin: 0.5em;
  flex: 1;
  min-width: 400px;
  background-color: rgb(252, 252, 252);
}

.taskContainer h3 {
  margin: 0;
  margin-bottom: 1em;
}

.serverOptionsContainer {
  padding: 0.5em;
  border: 2px solid #666;
  margin: 1em 0;
  text-align: center;
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