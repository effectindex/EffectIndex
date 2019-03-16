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
    <div v-html="$md.render(description)"> {{ description }} </div>
    <audio-player 
      :src="`/audio/${replication.resource}`"
      :title="replication.title"
      :artist="replication.artist" />
      
    <div v-show="associatedEffects.length">
      <h4> Effects Replicated </h4>
      <ul class="replicationEffectsList">
        <li 
          v-for="effect in associatedEffects"
          :key="effect._id"
          class="replicationEffectsListItem">
          <nuxt-link :to="'/effects/' + effect.url">
            {{ effect.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div v-show="associatedSubstances.length">
      <h4>Substances Replicated</h4>
      <ul class="replicationSubstancesList">
        <li
          v-for="substance in associatedSubstances"
          :key="substance._id"
          class="replicationSubstancesListItem">
          <nuxt-link :to="'/substances/' + substance.url">
            {{ substance.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
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
  },
  computed: {
    associatedEffects() {
      let replication = this.replication;
      if (!Array.isArray(replication.associated_effects)) return undefined;

      return this.$store.state.effects.filter(
        (effect) => replication.associated_effects.includes(effect._id));
    },
    associatedSubstances() {
      let replication = this.replication;
      if (!Array.isArray(replication.associated_substances)) return undefined;

      return this.$store.state.substances.filter(
        (substance) => replication.associated_substances.includes(substance._id));
    },
    description() {
      return (typeof (this.replication.description === 'String') ? this.replication.description : "" );
    }
  }
};
</script>

<style scoped>
  .audioReplication {
    margin-bottom: 3em;
    padding-bottom: 2em;
    color: #333;
  }

  .audioReplication:not(:last-child) {
    border-bottom: 1px solid #CCC;
  }

  .replicationTitle {
    font-weight: bold;
    font-size: 1.25em;
    font-weight: 400;
    margin-right: 0.5em;
  }

  .replicationEffectsList, .replicationsSubstancesList {
    list-style: none;
    padding: 0;
  }

  .replicationEffectsListItem, .replicationSubstancesListItem {
    padding-right: 2em;
    display: inline-block;
  }

  


</style>
