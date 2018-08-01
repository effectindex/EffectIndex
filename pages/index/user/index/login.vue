<template>
  <div>
    <h2> Login </h2>
    <div class="login__formContainer">
      <form @submit.prevent="login">
        <div>  
          <label> Username
            <input v-model="user.username">
          </label> 
        </div>
        <div> 
          <label> Password
            <input 
              v-model="user.password"
              type="password">
          </label> 
        </div>
        <button> Login </button>
      </form>
      <p v-show="errorMessage">
        <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: undefined,
        password: undefined
      },
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: { user: this.user }
        });


        this.$notify({
          title: 'Login Success.',
          text: 'You have been successfully logged in.'
        });

      } catch (error) {
        if ("error" in error.response.data)
          this.errorMessage = error.response.data.error.message;
      }
    }
  }
};
</script>