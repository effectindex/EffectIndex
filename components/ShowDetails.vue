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
      read {{ hiddenIntro ? 'less' : 'more' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
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
