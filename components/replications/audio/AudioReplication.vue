<template>
  <div 
    class="audioReplication">
    <div class="replicationInfo">
      <span class="replicationTitle"> {{ replication.title }} </span> by
      <span class="replicationArtist"> 
        <span v-if="replication.artist_url"> <ext-link :href="replication.artist_url"> {{ replication.artist }} </ext-link> </span>
        <span v-else> {{ replication.artist }} </span>
      </span>
    </div>
    <p> {{ replication.description }} </p>
    <audio-player 
      :src="`/audio/${replication.resource}`"
      :title="replication.title"
      :artist="replication.artist" />
  </div>
</template>

<script>
import AudioPlayer from "@/components/replications/audio/AudioPlayer";
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    AudioPlayer,
    ExtLink
  },
  props: {
    replication: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
  .audioReplication {
    margin-bottom: 3em;
    color: #333;
  }

  .replicationTitle {
    font-weight: bold;
  }

  


</style>
