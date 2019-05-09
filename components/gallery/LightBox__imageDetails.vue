<template>
  <div class="lightBox__imageDetails">
    <h3 class="lightBox__title">
      {{ title }}
    </h3>
    <h4 class="lightBox__artist">
      by
      <a @click="openWindow">
        {{ artist }}
      </a>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    artist: {
      type: String,
      default: ""
    },
    artistWebpage: {
      type: String,
      default: ""
    }
  },
  methods: {
    openWindow(e) {
      if (this.artistWebpage) {
        window.open(this.artistWebpage);
        e.stopPropagation();
      }
    }
  }
};
</script>

