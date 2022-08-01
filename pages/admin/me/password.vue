<template>
  <div class="pageContent">
    <h1> Change Password </h1>
    <form @submit.prevent="changePassword">
      <div class="inputContainer">
        <input
          v-model="oldPassword"
          placeholder="Current Password"
          name="current-password"
          type="password"
        >
      </div>

      <div class="inputContainer">
        <input
          v-model="newPassword"
          placeholder="New Password"
          name="new-password"
          type="password"
        >
      </div>

      <div class="inputContainer">
        <input
          v-model="confirmation"
          placeholder="Confirm New Password"
          name="confirm-new-password"
          type="password"
        >
      </div>
      <button type="submit">
        Change
      </button>
      <button
        type="reset"
        @click="clear"
      >
        Reset
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: undefined,
      newPassword: undefined,
      confirmation: undefined
    };
  },
  head() {
    return {
      title: "Change Password"
    };
  },
  methods: {
    async changePassword() {
      const { oldPassword, newPassword, confirmation } = this;
      this.error = undefined;

      try {
        await this.$axios.$post('/api/users/changePassword', { oldPassword, newPassword, confirmation });
        this.$toasted.show('Password changed successfully.', { type: 'success', duration: 3000 });
        this.clear();
      } catch (error) {
        if (error.response) {
          const { data } = error.response;
          this.$toasted.show(data.error.message, { type: 'error' , duration: 2000 });
        } else {
          console.log(error);
        }
      }
    },
    clear() {
      this.oldPassword = undefined;
      this.newPassword = undefined;
      this.confirmation = undefined;
    }
  }
};
</script>

<style scoped>

form {
  margin-top: 2em;
}

.inputContainer {
  display: flex;
  flex-direction: column;
}

input[type=password] {
  max-width: 250px;
  padding: 0.5em;
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
}

label {
  font-weight: bold;
}

.errorMessage {
  color: red;
  font-weight: bold;
}

</style>
