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
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user._id"
        >
          <td>
            <nuxt-link :to="'/profiles/' + user.username">
              {{ user.username }}
            </nuxt-link>
          </td>
          <td> {{ listRoles(user) }} </td>
          <td style="display: flex; justify-content: space-evenly;"> 
            <nuxt-link :to="'/admin/users/' + user._id">
              <Icon
                filename="edit.svg"
                style="cursor: pointer; height: 1em; width: 1em;"
              />
            </nuxt-link>
            <a 
              @click="deleteUser(user._id)"
            > 
              <Icon
                filename="times.svg"
                style="cursor: pointer; height: 1em; width: 1em;"
                color="red"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  computed: {
    users() {
      return this.$store.state.admin.userlist;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getAllUsers");
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

        this.$toasted.show(
          'The user has been successfully deleted.',
          {
            duration: 2000,
            type: 'success'
          }
        );


    }
  }
};
</script>
