<template>
  <div class="pageContent">
    <replication-editor
      :replication="replication"
      @edit-replication="submitReplication" />
  </div>
</template>

<script>
import ReplicationEditor from "@/components/replications/ReplicationEditor";

export default {
  components: {
    ReplicationEditor
  },
  middleware: ["auth"],
  methods: {
    async submitReplication(replication) {
      let returnedReplication = await this.$store.dispatch(
        "updateReplication",
        replication
      );
      this.$router.push("/admin/replications/list");
    }
  },
  async asyncData({ store, params }) {
    let { replication } = await store.dispatch("getReplication", params.name);
    return { replication };
  }
};
</script>