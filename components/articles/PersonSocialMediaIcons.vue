<template>
  <div class="person-social-media-icons">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      class="icon"
      :href="icon.url"
    >
        
      <img
        :src="`/icons/${icon.filename}`"
        height="24"
        width="24"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    icons () {
      return this.socialMedia.map(socialMedia => {
        switch (socialMedia.type) {
          case 'personal':
            return { url: socialMedia.value, filename: 'home.svg' };
          case 'facebook':
            return { url: socialMedia.value, filename: 'facebook.svg' };
          case 'instagram':
            return { url: socialMedia.value, filename: 'instagram.svg' };
          case 'tiktok':
            return { url: socialMedia.value, filename: 'tiktok.svg' };
          case 'youtube':
            return { url: socialMedia.value, filename: 'youtube.svg' };
          case 'reddit':
            return { url: socialMedia.value, filename: 'reddit.svg' };
          case 'twitter':
            return { url: socialMedia.value, filename: 'twitter.svg' };
          default:
            return { url: socialMedia.value, filename: 'home.svg' };

          
        }
      });
    }
  }
};
</script>

<style>
.person-social-media-icons {
  margin-top: 5px;
}

.person-social-media-icons img {
  opacity: 0.5;
  transition: all 0.25s;
  top: 0;
  left: 0;
  position: relative;
}

.person-social-media-icons img:hover {
  opacity: 1;
  top: -4px;
  left: -4px;
  filter:drop-shadow(4px 4px 2px #AAA);
}

.person-social-media-icons .icon {
  margin-right: 5px;
}
</style>