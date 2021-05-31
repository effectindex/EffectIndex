<template>
  <div class="pageContent">
    <div v-if="user">
      <h1> {{ user.username }} <span v-if="user.identity"> ({{ user.identity.full_name || user.identity.alias }}) </span> </h1>
      <section>
        <role-input v-model="user.roles" />
      </section>
      <section>
        <button @click="updateUser">
          Save
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import RoleInput from '@/components/admin/RoleInput';

export default {
  components: {
    RoleInput
  },
  data() {
    return {
      user: undefined
    };
  },
  async fetch() {
    const { id } = this.$route.params;
    try {
      const { user } = await this.$axios.$get(`/api/users/${id}`);
      this.user = user;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateUser() {
      try {
        const { user } = this;
        await this.$axios.$post(`/api/users/${user._id}`, { user });
        this.$toasted.show('The user was successfully updated.', { type: 'success', duration: 2000 });
        this.$router.push('/admin/users');
      } catch (error) {
        this.$toasted.show('There was an error updating the user.', { type: 'error', duration: 2000 });
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
h1 {
  margin-bottom: 1em;
}

section {
  margin: 2em 0;
}

button {
  padding: 10px;
  width: 200px;
  border: 1px solid #CCC;
  background-color: rgb(223, 255, 223);
}
</style>