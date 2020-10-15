<template>
  <div />
</template>

<script>
export default {
  async mounted() {
    await this.$auth.logout();

        this.$toasted.show(
          'You have been logged out.',
          {
            duration: 2000,
            type: 'success'
          }
        );


  }
};
</script>