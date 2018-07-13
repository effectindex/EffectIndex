<template>
  <div class="pageContent">
    <h1> Register (by invitation only) </h1>

    <div class="register__formContainer">
      <form @submit.prevent="register">
        <div>  
          <label> Username </label> 
          <input v-model="user.username">
        </div>
        <div> 
          <label> Password </label> 
          <input 
            v-model="user.password"
            type="password">
        </div>
        <div>
          <label> Invite Code </label> 
          <input 
            :value="user.inviteCode"
            :disabled="user.inviteCode ? true : false">
        </div>
        <button> Register </button>
        <button @click="clear"> Clear </button>
        <p v-show="errorMessage">
          <span class="errorMessage"> Uh oh. {{ errorMessage }} </span>
        </p>
        <p v-show="success">
          <span class="success" > Success! </span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        inviteCode: this.$route.params.inviteCode || ""
      },
      success: false,
      errorMessage: ""
    };
  },
  methods: {
    async register() {
      this.success = false;
      this.errorMessage = "";

      try {
        let returnedUser = await this.$axios.$post("api/users/register", {
          user: this.user
        });
        if (returnedUser && "user" in returnedUser) {
          this.success = true;
          this.$router.push("/user/login");
        }
      } catch (error) {
        if ("error" in error.response.data)
          this.errorMessage = error.response.data.error.message;
      }
    },
    clear() {
      this.user.username = "";
      this.user.password = "";
      this.success = false;
      this.errorMessage = "";
    }
  }
};
</script>

<style>
</style>