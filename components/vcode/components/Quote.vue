<template>
  <div class="quotation">
    <div class="quotationContent">
      <slot />
    </div>
    <div class="quotationAuthor">
      <span
        v-if="!profile"
        class="quotationAuthorName"
      > <span class="quotationDash"> - </span> {{ author }} </span>
      <div
        v-else
      >
        <div
          v-if="profileImage"
          class="quotationProfileImageContainer"
        >
          <nuxt-link :to="`/people/${profile}`">
            <img
              :src="profileImage"
              class="quotationProfileImage"
            >
          </nuxt-link>
          <span> <span class="quotationDash"> - </span> <nuxt-link :to="`/people/${profile}`"> {{ author }} </nuxt-link> </span>
        </div>
        <span v-else> <span class="quotationDash"> - </span> {{ author }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: ""
    },
    profile: { /* technically this should be called person, but keeping it as this for backwards compat */
      type: String,
      default: undefined
    },
  },
  data() {
    return {
      profileImage: undefined
    };
  },
  async fetch() {
    try {
      if (this.profile) {
        const {person} = await this.$axios.$get(`/api/persons/${this.profile}`);
        if (person) {
          this.profileImage = person.profile_image ? `/${person.profile_image}` : undefined;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
  .quotation {
    border: 1px solid #EEE;
    background-color: rgb(252, 252, 252);
    padding: 2em;
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
    justify-content: flex-end;
  }

  .quotationDash {
    color: #888;
  }

</style>
