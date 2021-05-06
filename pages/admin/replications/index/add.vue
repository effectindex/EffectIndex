<template>
  <div class="pageContent">
    <hr>
    <replication-editor 
      @new-replication="submitReplication"
      @update-replication="submitReplication" 
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
  methods: {
    async submitReplication(replication) {
      try {
        let returnedReplication = await this.$store.dispatch(
          "replications/submit",
          replication
        );
        this.$router.push("/admin/replications/list");
      } catch (error) {
        console.log(error);
        this.$toasted.show(
          'There was an error saving the replication.',
          {
            duration: 2000,
            type: 'error'
          }
        );
      }
    }
  }
};
</script>