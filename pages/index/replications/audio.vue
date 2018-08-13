<template>
  <div class="pageContent">
    <h1> Auditory Effect Replications </h1>

    <audio-replication
      v-for="replication in audioReplications"
      :replication="replication"
      :key="replication._id" />

  </div>
</template>

<script>
import AudioReplication from "@/components/replications/audio/AudioReplication";

export default {
  components: {
    AudioReplication
  },
  computed: {
    audioReplications() {
      return this.$store.state.replications.filter(
        (replication) => (replication.type === 'audio'));
    }
  },
  async fetch({ store }) {
    await store.dispatch("getReplications");
  },
  head() {
    return {
      title: "Audio Replications"
    };
  }
};
</script>