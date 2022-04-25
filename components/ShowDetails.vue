<template>
  <div>
    <transition name="fade">
      <div
        v-show="hiddenIntro"
        class="hiddenIntro showDetails"
      >
        <slot />
      </div>
    </transition>

    <div
      style="display: inline-block;"
      class="whiteButton"
      @click="toggleIntro"
    >
      {{ hiddenIntro ? getOpenedText() : getClosedText() }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: String,
      default: ""
    },
    closed: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hiddenIntro: false
    };
  },
  methods: {
    toggleIntro() {
      this.hiddenIntro = !this.hiddenIntro;
    },
    getClosedText() {
      return this.$props["closed"] ? this.$props["closed"] : "Read More";
    },
    getOpenedText() {
      return this.$props["opened"] ? this.$props["opened"] : "Read Less";
    }
  }
};
</script>

<style scoped>
.showDetails {
  margin-bottom: 7px;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 1s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
