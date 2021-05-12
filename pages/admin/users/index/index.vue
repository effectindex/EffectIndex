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
        <td />
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
  import RoleList from '@/components/RoleList';
  import Icon from '@/components/Icon';

  export default {
    middleware: ['auth'],
    components: {
      RoleList,
      Icon
    },
    head() {
      return {
        title: "Modify Users"
      };
    },
    data() {
      return {
        users: []
      };
    },
    async asyncData({ $axios }) {
      const { users } = await $axios.$get('/api/users');
      return { users };
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