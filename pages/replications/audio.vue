<template>
  <div class="pageContent">
    <Icon
      filename="volume-up.svg"
      class="categoryIcon"
    />
    <h1> Auditory Effect Replications </h1>
    <div>
      <audio-replication
        v-for="replication in audioReplications"
        :key="replication._id"
        :replication="replication"
      />
    </div>
  </div>
</template>

<script>
import AudioReplication from "@/components/replications/audio/AudioReplication";
import Icon from '@/components/Icon';

export default {
  components: {
    AudioReplication,
    Icon
  },
  async fetch({ store }) {
    await store.dispatch("replications/get");
    await store.dispatch("effects/get");
  },
  head() {
    return {
      title: "Audio Replications"
    };
  },
  computed: {
    audioReplications() {
      return this.$store.state.replications.list.filter(
        (replication) => (replication.type === 'audio'));
    }
  }
};
</script>
