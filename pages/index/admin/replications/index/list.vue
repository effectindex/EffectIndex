<template>
  <div class="pageContent">
    <hr>
    <table class="replicationTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Artist </td>
          <td> Type </td>
        </tr>
      </thead>
      <replication-table-row 
        v-for="replication in $store.state.replications"
        :key="replication._id"
        :replication="replication"
        @deleteReplication="deleteReplication" />
    </table>
  </div>
</template>

<script>
import ReplicationTableRow from "@/components/replications/ReplicationTableRow.vue";

export default {
  components: {
    ReplicationTableRow
  },
  mounted() {
    this.$store.dispatch("getReplications");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
    deleteReplication(id) {
      this.$store.dispatch("deleteReplication", id);
    }
  }
};
</script>

<style scoped>
.replicationList {
  padding: 0;
  list-style: none;
}

.replicationTable {
  width: 100%;
  max-width: 800px;
}

thead {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>