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
      <div class="replicationImageDescription">
        <span class="replicationTitle"> {{ randomReplication.title }} </span>
        by
        <span class="replicationArtist"> {{ randomReplication.artist }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: [Array, undefined],
      default: undefined
    }
  },
  computed: {
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
    }
  }
};
</script>

<style scoped>
  .replicationsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2em 0;
    border: 1px solid #CCC;
    background-color: rgb(252, 252, 252);
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
    margin: 1em;
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
    margin: 1em;
    min-width: 250px;

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