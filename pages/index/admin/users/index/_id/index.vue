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
        type="checkbox" > Admin <br>
      <input 
        v-model="user.scope.editor"
        type="checkbox" > Editor <br>

      <button type="submit"> Submit </button>
    </form>
    <p v-show="errorMessage">
      <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
    </p>
    <p v-show="success">
      <span class="success" > User Updated! </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      errorMessage: ""
    };
  },
  methods: {
    async submit() {
      this.success = false;
      let user = {
        username: this.user.username,
        scope: {
          admin: this.user.scope.admin,
          editor: this.user.scope.editor
        }
      };

      try {
        let response = await this.$axios.$post("/api/users/" + this.user._id, {
          user
        });
        if (response) this.success = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async asyncData(app) {
    try {
      let id = app.route.params.id;
      let user = await app.$axios.$get("/api/users/" + id);
      if (user) return user;
      else
        return {
          user: {
            _id: undefined,
            username: undefined,
            scope: {
              admin: false,
              editor: false
            }
          }
        };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>