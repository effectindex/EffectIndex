<template>
  <div
    class="pageContent"
  >
    <h2> Invitations </h2>
    <table>
      <thead>
        <tr>
          <td> ID </td>
          <td> Created on </td>
          <td> Created by </td>
          <td> Used by </td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="invitation in invitations"
          :key="invitation._id"
        >
          <td>
            {{ invitation._id }} <a
              class="copy"
              @click="copyCode(invitation._id)"
            > (copy) </a>
          </td>
          <td> {{ parseDate(invitation.created) }} </td>
          <td> {{ invitation.createdBy ? invitation.createdBy.username : '' }} </td>
          <td
            :class="invitation.usedBy ? 'usedInvitation' : invitation.used ? 'expiredInvitation' : 'unusedInvitation'"
          >
            {{ invitation.usedBy ? invitation.usedBy.username : invitation.used ? '[EXPIRED]' : '' }}
          </td>
          <td>
            <a
              class="delete"
              @click="deleteInvitation(invitation._id)"
            > Delete </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fecha from 'fecha';

export default {
  data() {
    return {
      invitations: []
    };
  },
  async fetch() {
    try {
      const { invitations } = await this.$axios.$get('/api/invitations');
      this.invitations = invitations;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    parseDate(date) {
      try {
      const formatted = fecha.format(new Date(date), 'DD/MM/YYYY hh:mm:ss');
      return formatted;
      } catch (error) {
        console.log(error);
      }
    },
    copyCode(code) {
      const { protocol, hostname, port } = window.location;
      const url = `${protocol}//${hostname}${port ? ':' + port : ''}/user/register/${code}`;
       this.$toasted.show('Registration URL copied to clipboard', { type: 'success', duration: 2000 });
      navigator.clipboard.writeText(url);
    },
    async deleteInvitation(id) {
      try {
        await this.$axios.$delete(`/api/invitations/${id}`);
        this.$toasted.show('The invitation was successfully deleted.', { type: 'success', duration: 2000 });
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

table thead {
  font-weight: bold;
}

a {
  cursor: pointer;
}

.delete {
  color: red;
}

a.copy {
  color: green;
}

.page-controls {
  margin: 1em 0;
}

.expiredInvitation {
  color: red;
}
</style>
