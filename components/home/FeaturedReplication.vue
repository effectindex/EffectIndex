<template>
  <div class="replicationsContainer">
    <div class="replicationsDescription">
      <h1> Replications </h1>
      <p class="replicationsDescriptionText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam mi, mollis vitae 
      congue quis, vestibulum a dolor. Integer sit amet enim vitae urna luctus rhoncus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div 
      :style="{
        backgroundImage: randomImage
      }" 
      class="replicationImage"
      @click="toggleModal">
      <div 
        class="replicationImageDescription"
        @click.stop>
        A replication of 
        <span
          v-for="(effect, index) in replicatedEffects"
          :key="effect._id" 
          class="replicationEffect"> 
          <nuxt-link :to="'/effects/' + effect.url"> {{ effect.name }} </nuxt-link>
          <span v-if="index < (replicatedEffects.length - 1)">, &nbsp;</span>  
        </span>
        by
        <span class="replicationArtist"> {{ randomReplication.artist }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featured: {
      type: [Array, undefined],
      default: undefined
    }
  },
  computed: {
    images() {
      return this.$store.state.replications
        .filter((replication) => replication.type === 'image');
    },

    effects() {
      return this.$store.state.effects;
    },


    randomReplication() {
      if (!this.images || !this.images.length) return {};
      else {
        const randomIndex = Math.floor(Math.random() * this.images.length);
        return this.images[randomIndex];
      }
    },

    randomImage() {
      let prefix = '/img/gallery/';
      return `url("${prefix + this.randomReplication.resource}"`; 
    },

    replicatedEffects() {
      let replicatedEffectIDs = this.randomReplication.associated_effects;
      let replicatedEffects = this.effects.filter((effect) => replicatedEffectIDs.includes(effect._id));
      return replicatedEffects;
    },

    replicatedEffectList() {
      let list = '';
      this.replicatedEffects.forEach((replicatedEffect, index) => {
        list += replicatedEffect.name;
        if (index < (this.replicatedEffects.length - 1)) list += ' & ';
      });
      return list;
    },

    modalData() {
      return {
        type: 'image',
        resource: '/img/gallery/' + this.randomReplication.resource
      };
    }
  },
  methods: {
    toggleModal() {
      this.$store.commit("set_modal_data", this.modalData);
      this.$store.commit("toggle_modal");
    },

  }
};
</script>

<style scoped>
  .replicationsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #DDD;
    background-color: rgb(252, 252, 252);
    padding: 0.5em;
  }

  .replicationsContainer h1 {
    margin-top: 0;
    line-height: 1em;
    font-size: 23pt;
  }

  .replicationImage {
    flex: 1;
    position: relative;
    min-width: 250px;
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .replicationImageDescription {
    position: absolute;
    display: inline-block;
    bottom: 1em;
    padding: 0.5em;
    margin: 0 2em;
    width: calc(100% - 4em);
    color: #EEE;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .replicationsDescription {
    flex: 1;
    min-width: 250px;
    padding-right: 1em;
  }

  .replicationsDescriptionText {
    padding: 0.25em;
  }

  .replicationTitle {
    font-style: italic;
  }

  .replicationArtist {

        font-weight: bold;
  }
</style>