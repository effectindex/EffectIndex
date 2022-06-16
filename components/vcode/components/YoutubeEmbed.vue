<template>
  <div
    v-if="src"
    class="video-responsive"
  >
    <iframe
      :src="`https://www.youtube.com/embed/${src}`"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: "YoutubeEmbed",
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
  }
};
</script>

<style scoped>
/*TODO: Add responsive component */
.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
