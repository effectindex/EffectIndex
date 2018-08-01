<template>
  <div />
</template>

<script>
export default {
  async mounted() {
    await this.$auth.logout();

    this.$notify({
      title: 'Logged out.',
      text: 'You have logged out.'
    });

  }
};
</script>