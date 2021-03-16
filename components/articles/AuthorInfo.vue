<template>
  <div
    class="author"
  >
    <div
      v-if="avatar"
      class="author-image"
    >
      <gravatar :hash="author.gravatar_hash" />
    </div>
    <div class="name-container">
      <div class="name">
        <nuxt-link
          v-if="author.profile_url"
          :to="`/people/${author.profile_url}`"
        >
          {{ author.full_name }}
        </nuxt-link>
        <span v-else>
          {{ author.full_name }}
        </span>
      </div>
      <person-social-media-icons
        v-if="socialMedia"
        :social-media="author.social_media"
      />
    </div>
  </div>
</template>

<script>
import Gravatar from '@/components/Gravatar';
import PersonSocialMediaIcons from './PersonSocialMediaIcons';

export default {
  components: {
    Gravatar,
    PersonSocialMediaIcons
  },
  props: {
    author: {
      type: Object,
      default: () => ({})
    },
    avatar: {
      type: Boolean,
      default: true
    },
    socialMedia: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #333;
  }

  .author-image {
    margin-right: 10px;
    margin-top: 3px;
  }

  .name {
    font-size: 20px;
    font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, "Segoe UI";
    color: #444;
    white-space: nowrap;
  }

  .name-container {
    display: flex;
    flex-direction: column;
  }
</style>