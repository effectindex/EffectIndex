<template>
  <div class="quotation">
    <p 
      class="quotationContent" > 
      <slot />
    </p>
    <p class="quotationAuthor">
      <span 
        v-if="!profile"
        class="quotationAuthorName"> - {{ author }} </span>
      <span 
        v-else> 
        <nuxt-link :to="`/profiles/${profile}`">
          <div 
            v-if="profileImage"
            class="quotationProfileImageContainer">
            <img 
              v-if="profileImage"
              :src="profileImage"
              class="quotationProfileImage">
            <span> {{ author }} </span>
          </div>
          <span 
            v-else> - {{ author }} </span>
        </nuxt-link>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: ""
    },
    profile: { 
      type: String,
      default: undefined
    }
  },
  computed: {
    profileImage() {
      let profile = this.$store.state.profiles.find((profile) => profile.username === this.profile);

      return profile ? '/img/profiles/cropped/' + profile.profileImageCropped : undefined;
    }
  },
  beforeCreate() {
    if (this.$store.state.profiles.length < 1) this.$store.dispatch("getProfiles");
  },
};
</script>

<style scoped>
  .quotation {
    border: 1px solid #EEE;
    background-color: rgb(252, 252, 252);
    padding: 2em;
  }

  .quotationContent {
    white-space: pre-wrap;
  }

  .quotationAuthor {
    text-align: right;
  }

  .quotationAuthorName {
    color: #444;
    font-size: 1.1em;
  }

  .quotationProfileImage {
    border-radius: 100%;
    height: 64px;
    width: 64px;
    margin: 0.5em 0.5em 0 0.5em;
  }

  .quotationProfileImageContainer {
    display: flex;
    align-items: center;
    align-self: right;
    justify-content: right;
  }

</style>