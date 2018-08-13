<template>
  <li class="replication">
    <div v-if="replication.type === 'image'">
      <img 
        v-if="replication.resource"
        :src="'/img/gallery/thumbnails/' + replication.resource"
      >
    </div>
    <div v-else-if="replication.type === 'gfycat'">
      <img 
        v-if="replication.thumbnail" 
        :src="'/img/gallery/thumbnails/' + replication.thumbnail"
      >
      <iframe 
        v-else-if="replication.resource"
        :src="'https://gfycat.com/ifr/' + replication.resource"
        frameborder="0" 
        scrolling="no" 
        height="200" />
      <i 
        v-else 
        class="fa fa-image" />
    </div>
    <div 
      v-else-if="replication.type === 'audio'">
      <AudioPlayer 
        :src="replication.resource"
        simple="true" />
    </div>

    <div>
      <span class="replication__title"> {{ replication.title }} </span> by
      <span class="replication__artist">
        <ext-link 
          v-if="replication.artist_url"
          :href="replication.artist_url"> {{ replication.artist }} </ext-link>
        <span v-else> {{ replication.artist }} </span>
      </span>
    </div>

    <div 
      v-show="$auth.loggedIn"
      class="replication__controls"
    >
      <nuxt-link :to="'/replications/' + replication.url + '/edit'"> <i class="fa fa-edit" /> </nuxt-link>
      <a @click="deleteReplication(replication._id)"> <i class="fa fa-times" /> </a>
    </div>
  </li>

</template>

<script>
import ExtLink from "@/components/ExtLink.vue";
import AudioPlayer from "@/components/replications/audio/AudioPlayer.vue";

export default {
  components: {
    ExtLink,
    AudioPlayer
  },
  props: {
    replication: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    deleteReplication(id) {
      this.$emit("deleteReplication", id);
    }
  }
};
</script>

<style>
.replication__title {
  font-weight: bold;
}
.replication {
  color: black;
  height: 250px;
  display: inline-block;
  padding: 1em;
  text-align: center;
}
</style>