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
        :key="invitation._id"
      >
        <td> {{ formatDate(invitation.created) }} </td>
        <td> {{ Boolean(invitation.used) ? 'Yes' : 'No' }} </td>
        <td> {{ Boolean(invitation.used) ? invitation.usedBy : '' }} </td>
        <td> {{ hostname + '/user/register/' + invitation._id }} </td>
        <td>
          <a
            class="delete"
            style="color: red; cursor: pointer;"
            @click="deleteInvitation(invitation._id)"
          >
            <Icon
              filename="times.svg"
              color="red"
              style="cursor: pointer; height: 1em; width: 1em;"
            />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import fecha from "fecha";
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  async fetch({ store }) {
    await store.dispatch("admin/getInvitations");
  },
  computed: {
    invitations() {
      return this.$store.state.admin.invitations;
    },
    hostname() {
      return process.env.BASE_URL;
    }
  },
  methods: {
    async deleteInvitation(id) {
      await this.$store.dispatch("admin/deleteInvitation", id);
    },
    formatDate(date) {
      return fecha.format(new Date(date), "MMMM D, YYYY");
    }
  }
};
</script>

<style scoped>
.delete {
  cursor: pointer;
}
</style>
