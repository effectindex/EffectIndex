<template>
  <div>
    <hr>
    <h1> Modify User - {{ user.username }} </h1>
    <form @submit.prevent="submit">
      <label> Username
        <input v-model="user.username">
      </label>

      <label> Roles </label>
      <input 
        v-model="user.scope.admin"
        type="checkbox"
      > Admin <br>
      <input 
        v-model="user.scope.editor"
        type="checkbox"
      > Editor <br>

      <button type="submit">
        Submit
      </button>
    </form>
    <p v-show="errorMessage">
      <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
    </p>
    <p v-show="success">
      <span class="success"> User Updated! </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      errorMessage: "",
      user: {
        _id: undefined,
        username: undefined,
        scope: {
          admin: false,
          editor: false
        }
      }
    };
  },
  async asyncData({ store, params }) {
    let { user } = await store.dispatch("getUser", params.id);
    return { user };
  },
  methods: {
    async submit() {
      this.success = false;
      let response = await this.$store.dispatch("updateUser", { user: this.user });
      if (response) this.success = true;
        this.$toasted.show(
          'The user has been successfully updated.',
          {
            duration: 2000,
            type: 'success'
          }
        );

    }
  }
};
</script>