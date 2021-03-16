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
  opacity: 0.5;
  margin-top: 5px;
}

.person-social-media-icons .icon {
  margin-right: 5px;
}
</style>