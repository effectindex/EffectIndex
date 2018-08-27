<template>
  <div 
    v-show="featuredReplications.length"
    class="replicationsContainer">
    <div 
      v-touch:swipe.left="nextImage"
      v-touch:swipe.right="previousImage"
      :style="{
        backgroundImage: imageUrl
      }" 
      class="replicationImage"
      @click="toggleModal">
      <div 
        class="replicationControls previous"
        @click.stop="previousImage">
        <fa
          :icon="['far', 'chevron-double-left']" />
      </div>
      <div 
        class="replicationControls next"
        @click.stop="nextImage">
        <fa
          :icon="['far', 'chevron-double-right']" />
      </div>
      <div 
        class="replicationImageDescription"
        @click.stop="gotoEffect(effect.name)">
        {{ properIntroduction }}
        <span
          v-for="(effect, index) in replicatedEffects"
          :key="effect._id" 
          class="replicationEffect"> 
          <nuxt-link :to="'/effects/' + effect.url"> {{ effect.name }} </nuxt-link>
          <span v-if="index < (replicatedEffects.length - 1)">, &nbsp;</span>  
        </span>
        <br>
        <span class="replicationArtist"> {{ replication.artist }} </span>
      </div>
    </div>
    <div class="replicationsStub">
      For more, see the <nuxt-link to="/replications/"> replications gallery</nuxt-link>.
    </div>
  </div>
</template>

<script>
import { shuffle } from 'lodash';

export default {
  data() {
    return {
      index: undefined
    };
  },
  computed: {
    featuredReplications() {
      const featuredReplicationFilter = (replication) => (
        (replication.type === 'image') && (replication.featured));

      const featuredReplications = this.$store.state.replications
        .filter(featuredReplicationFilter);

      return shuffle(featuredReplications);
    },

    replication () {
      if (this.featuredReplications.length) {
        return this.index === undefined ? this.featuredReplications[0] : this.featuredReplications[this.index];
      } else return {};
    },

    effects() {
      return this.$store.state.effects;
    },

    replicatedEffects() {
      if (!this.replication) return [];
      let replicatedEffectIDs = this.replication.associated_effects;
      if (!replicatedEffectIDs) return [];
      let replicatedEffects = this.effects.filter((effect) => replicatedEffectIDs.includes(effect._id));
      return replicatedEffects;
    },

    imageUrl() {
      let prefix = '/img/gallery/';
      return `url("${prefix + this.replication.resource}"`; 
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
        resource: '/img/gallery/' + this.replication.resource
      };
    },

    properIntroduction() {
      let firstEffect = this.replicatedEffects[0];

      const nonplurl = 'A replication of ';
      const plurl = 'A replication of an ';
      const exceptions = [
        'Autonomous entity',
        'Internal hallucination',
        'External hallucination'
      ];

      if (firstEffect && exceptions.includes(this.replicatedEffects[0].name)) return plurl;
      return nonplurl;
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit("set_modal_data", this.modalData);
      this.$store.commit("toggle_modal");
    },

    nextImage() {
      if (this.index === undefined) this.index = 0;
      let maxIndex = this.featuredReplications.length - 1;
      if (this.index < maxIndex) this.index = this.index + 1;
      else this.index = 0;
    },

    previousImage() {
      if (this.index === undefined) this.index = 0;
      let maxIndex = this.featuredReplications.length - 1;
      if (this.index > 0) this.index = this.index - 1;
      else this.index = maxIndex;
    }

  }
};
</script>

<style scoped>
  .replicationsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgb(252, 252, 252);
  }

  .replicationsContainer h1 {
    margin-top: 0;
    line-height: 1em;
    font-size: 23pt;
  }

  .replicationImage {
    flex: 1;
    margin: 12px;
    position: relative;
    min-width: 250px;
    height: 250px;
    background-size: auto 250px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .replicationControls {
    position: absolute;
    user-select: none;
    display: flex;
    opacity: 0.4;
    color: #EEE;
    filter: drop-shadow(0 0 2px black);
    padding: 0.5em;
    justify-content: center;
    top: calc(50% - 50px);
    height: 100px;
    width: 50px;
  }

  .replicationControls:hover {
    opacity: 0.9;
  }

  .replicationControls.previous {
    left: 0;
  }

  .replicationControls.next {
    right: 0;
  }

  .replicationImageDescription {
    position: absolute;
    display: inline-block;
    font-size: 13pt;
    bottom: 0;
    padding: 0.5em;
    line-height: 1.25em;
    width: 100%;
    color: #EEE;
    cursor:default;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .replicationsDescription {
    flex: 1;
    min-width: 250px;
    padding-top: 1em;
  }

  .replicationsDescriptionText {
    margin-bottom: 0;
  }

  .replicationTitle {
    font-style: italic;
  }

  .replicationArtist {
    font-style: italic;
  }

  .replicationsStub {
    width: 100%;
    font-size: 12pt;
    color: #666;
    border-top: 1px solid #DDD;
    background-color: #F4F4F4;
    line-height: 1.2em;
    padding: 4px 12px;
  }

</style>