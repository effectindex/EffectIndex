<template>
  <table>
    <thead>
      <tr>
        <th> Username </th>
        <th> Roles </th>
        <th> Identity </th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user._id"
      >
        <td> {{ user.username }} </td>
        <td>
          <role-list :roles="user.roles" />
        </td>
        <td v-if="user.identity">
          <nuxt-link
            v-if="user.identity.profile_url"
            :to="`/people/${user.identity.profile_url}`"
          >
            {{ user.identity.full_name || user.identity.alias }}
          </nuxt-link>
        </td>
        <td v-else>
          {{ user.identity ? user.identity.full_name || user.identity.alias : undefined }}
        </td>
        <td>
          <div class="user-controls">
            <nuxt-link :to="`/admin/users/${user._id}`">
              <icon
                filename="edit.svg"
                color="black"
              />
            </nuxt-link>
            <a
              class="delete-user"
              @click="deleteUser(user._id)"
            > <icon
              filename="times.svg"
              color="red"
            /> </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import RoleList from '@/components/admin/RoleList';
  import Icon from '@/components/Icon';

  export default {
    components: {
      RoleList,
      Icon
    },
    middleware: ['auth'],
    data() {
      return {
        users: []
      };
    },
    async fetch() {
      const { users } = await this.$axios.$get('/api/users');
      this.users = users;
    },
    head() {
      return {
        title: "Modify Users"
      };
    },
    methods: {
      async deleteUser(_id) {
        try {
          this.$toasted.show('Really delete?', {
            action: [{
                text: 'Yes, delete!',
                onClick: async (e, toastObject) => {
                  try {
                    await this.$axios.$delete(`/api/users/${_id}`);
                    toastObject.goAway(0);
                    this.$toasted.show('The user was successfully purged from existence.', { type: 'success', duration: 2000 });
                    this.$fetch();
                  } catch (error) {
                    if (error.response) {
                      this.$toasted.show(error.response.data.message,
                      {
                        duration: 2000,
                        type: 'error'
                      });
                    } else {
                      console.log(error);
                    }
                  }
                }
              },
              {
                text: 'No, keep!',
                onClick: (e, toastObject) => toastObject.goAway()
              }]
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
</script>

<style scoped>
  table {
    margin: 1em 0;
    width: 100%;
    border-collapse: collapse;
  }

  table thead {
    font-weight: bold;
  }

  table thead, table tr:nth-child(even) {
    background-color: #EEE;
  }

  th, td {
    text-align: left;
    padding: 0.25em;
  }

  .delete-user {
    color: red;
    cursor: pointer;
  }

  .user-controls {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

  }

  .icon {
    height: 1em;
    width: 1em;
    display: inline-block;
    margin-right: 30px;
  }

  .user-controls a {
    display: block;
  }
</style>
