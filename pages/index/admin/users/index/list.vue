<template>
  <div>
    <hr>
    <h3> EffectIndex User List </h3>
    <table class="admin__userListTable">
      <thead>
        <tr>
          <td> Username </td>
          <td> Roles </td>
          <td />
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user._id">
          <td> <nuxt-link :to="'/profiles/' + user.username"> {{ user.username }} </nuxt-link> </td>
          <td> {{ listRoles(user) }} </td>
          <td> <nuxt-link :to="'/admin/users/' + user._id"> <i class="fa fa-edit" /> </nuxt-link> </td>
          <td> 
            <a @click="deleteUser(user._id)"> 
              <i 
                style="color: red; cursor: pointer;"
                class="fa fa-times" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.admin.userlist;
    }
  },
  methods: {
    listRoles(user) {
      let roles = [];

      for (let role in user.scope) {
        if (user.scope[role] === true) roles.push(role);
      }

      return roles.join(", ");
    },
    async deleteUser(id) {
      await this.$store.dispatch("deleteUser", id);
    }
  },
  async fetch({ store }) {
    await store.dispatch("getAllUsers");
  }
};
</script>
