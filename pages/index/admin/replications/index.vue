<template>
  <div class="pageContent replicationManagement">
    <h1> Replication Management </h1>
    <nuxt-link
      class="replicationManagement__link"
      to="/admin/replications/list"> Replication List </nuxt-link>
    <nuxt-link 
      class="replicationManagement__link"
      to="/admin/replications/add"> Add New Replication </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: ["auth"]
};
</script>

<style scoped>
.replicationManagement__link {
  display: inline-block;
  margin-right: 2em;
}
</style>