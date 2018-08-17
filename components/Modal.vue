<template>
  <transition
    name="fade">
    <div 
      v-show="active"
      class="modal"
      @click="toggleModal">
      <div 
        v-if="type === 'image'"
        :style="{ backgroundImage: url }"
        class="modalImageContainer"
        @click.stop="toggleModal" />
      <div 
        v-else-if="(type === 'gfycat') && active"
        style="position:relative;height: 100%;"
        class="modalImageContainer">
        <iframe
          :src="'https://gfycat.com/ifr/' + src + '?autoplay=1&controls=0'"
          frameborder="0"
          scrolling="no"
          width="100%"
          height="100%"
          style="position:absolute;top:0;left:0"
          allow="autoplay"
          allowfullscreen
        />
        <div 
          class="cover"
          @click.stop="toggleModal" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: undefined
    },
    src: {
      type: String,
      default: undefined
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    url() {
      return `url("${this.src}")`;
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.active ? "modal-active" : ""
      }
    };
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
    }
  }
};
</script>

<style scoped>
  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    text-align: center;
  }

  .modalImageContainer {
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: calc(100vh - 10%);
    width: calc(100vw - 10%);
  }

  .cover {
    cursor: pointer;
    z-index: 10000;
    opacity: 0;
    height: 100vh;
    width: 100vw;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>