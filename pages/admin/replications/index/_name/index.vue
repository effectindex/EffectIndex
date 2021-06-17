<template>
  <div class="pageContent">
    <replication-editor
      :replication="replication"
      @edit-replication="submitReplication"
    />
  </div>
</template>

<script>
import ReplicationEditor from "@/components/replications/ReplicationEditor";

export default {
  components: {
    ReplicationEditor
  },
  middleware: ["auth"],
  async asyncData({ store, params }) {
    const { name } = params;
    const { replication } = await store.dispatch("replications/getReplication", name);
    return { replication };
  },
  methods: {
    async submitReplication(replication) {

      await this.$store.dispatch(
        "replications/update",
        replication
      );

      this.$toasted.show(
        'The replication has been successfully saved.',
        {
          duration: 2000,
          type: 'success'
        }
      );

      this.$router.push("/admin/replications");
    }
  }
};
</script>