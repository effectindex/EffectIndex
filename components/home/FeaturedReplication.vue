<template>
  <div 
    v-show="featuredReplications.length"
    class="replicationsContainer"
  >
    <div 
      v-touch:swipe.left="nextImage"
      v-touch:swipe.right="previousImage"
      :style="{
        backgroundImage: imageUrl
      }" 
      class="replicationImage"
      @click="toggleModal"
    >
      <div 
        class="replicationControls previous"
        @click.stop="previousImage"
      >
        <Icon
          filename="chevron-double-left.svg"
          color="white"
        />
      </div>
      <div 
        class="replicationControls next"
        @click.stop="nextImage"
      >
        <Icon
          filename="chevron-double-right.svg"
          color="white"
        />
      </div>
      <div 
        class="replicationImageDescription"
        @click.stop
      >
        {{ properIntroduction }}
        <span
          v-for="(effect, i) in replicatedEffects"
          :key="effect._id" 
          class="replicationEffect"
        ><span v-if="i > 0 && (i === replicatedEffects.length - 1)"> and </span>
          <span v-else-if="i > 0">,</span>
          <nuxt-link :to="'/effects/' + effect.url">
            {{ effect.name }}</nuxt-link>
        </span>
        <!-- maybe add substances here -->
        <br>
        <span class="replicationArtist"> by {{ replication.artist }} </span>
      </div>
    </div>
    <div class="replicationsStub">
      For more, see the <nuxt-link to="/replications/">
        replications gallery.
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { shuffle } from 'lodash';
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
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

    substances() {
      return this.$store.state.substances;
    },

    replicatedEffects() {
      if (!this.replication) return [];
      let replicatedEffectIDs = this.replication.associated_effects;
      if (!replicatedEffectIDs) return [];
      let replicatedEffects = this.effects.filter((effect) => replicatedEffectIDs.includes(effect._id));
      return replicatedEffects;
    },

    replicatedSubstances() {
      if (!this.replication) return [];
      let replicatedSubstanceIDs = this.replication.associated_substances;
      if (!replicatedSubstanceIDs) return [];
      let replicatedSubstances = this.substances.filter((substance) => replicatedSubstanceIDs.include(substance._id));
      return replicatedSubstances;
    },

    imageUrl() {
      let prefix = '/img/gallery/';
      return `url("${prefix + this.replication.resource}"`; 
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
  .icon {
    height: 50px;
    width: 50px;
  }

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
    background-color: rgb(50, 50, 50);
    background-size: auto 250px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .replicationControls {
    user-select: none;
    display: flex;
    z-index: 5;
    color: #EEE;
    opacity: 0.6;
    position: absolute;
    top: calc(50% - 75px);
    filter: drop-shadow(0 0 5px black);
    padding: 0.5em;
    justify-content: center;
    align-items: center;
    height: 150px;
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

  .replicationControls svg {
    flex: 1;
  }
  .replicationImageDescription {
    position: absolute;
    display: inline-block;
    font-size: 12.5pt;
    bottom: 0;
    padding: 2em 0.5em 0.5em 0.5em;
    line-height: 1.25em;
    letter-spacing: 0px;
    width: 100%;
    color: #EEE;
    cursor:default;
    text-align: center;
    background: rgb(24,24,24);
    background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%); 
    text-shadow: 2px 2px 1px black;
  }

  .replicationImageDescription a:hover {
    color: #55cca2;
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
    font-size: 0.8em;
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