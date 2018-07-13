<template>
  <div>
    <hr>
    <h1> Invitations </h1>

    <table>
      <thead>
        <td> Created </td> <td> Used </td> <td> Used By </td> <td> URL </td> <td />
      </thead>
      <tr 
        v-for="invitation in invitations"
        :key="invitation._id">
        <td> {{ formatDate(invitation.created) }} </td>
        <td> {{ Boolean(invitation.used) ? 'Yes' : 'No' }} </td>
        <td> {{ Boolean(invitation.used) ? invitation.usedBy : '' }} </td>
        <td> {{ hostname + (hostname.charAt(hostname.length -1) === '/' ? '' :'/')
        + 'user/register/' + invitation._id }} </td>
        <td>
          <a 
            class="delete"
            @click="deleteInvitation(invitation._id)"> Delete </a> </td>
      </tr>

    </table>
  </div>
</template>

<script>
import fecha from "fecha";

export default {
  computed: {
    invitations() {
      return this.$store.state.admin.invitations;
    },
    hostname() {
      return this.$axios.defaults.baseURL;
    }
  },
  methods: {
    async deleteInvitation(id) {
      let deletedInvitation = await this.$axios.delete(
        "/api/invitations/" + id
      );
      this.$store.dispatch("getInvitations");
    },
    formatDate(date) {
      return fecha.format(new Date(date), "MMMM D, YYYY");
    }
  },
  async asyncData({ store }) {
    await store.dispatch("getInvitations");
  }
};
</script>

<style scoped>
.delete {
  cursor: pointer;
}
</style>