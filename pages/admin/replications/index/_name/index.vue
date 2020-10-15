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
    let { replication } = await store.dispatch("getReplication", params.name);
    return { replication };
  },
  methods: {
    async submitReplication(replication) {
      let returnedReplication = await this.$store.dispatch(
        "updateReplication",
        replication
      );

        this.$toasted.show(
          'The replication has been successfully saved.',
          {
            duration: 2000,
            type: 'success'
          }
        );


      this.$router.push("/admin/replications/list");
    }
  }
};
</script>