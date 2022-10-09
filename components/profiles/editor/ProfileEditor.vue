<template>
  <div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="submit"
    >
      <label>Username
        <input
          v-model="profile.username"
          type="text"
        >
      </label>

      <label>Profile Body
        <textarea v-model="profile.body" />
      </label>

      <label>Sort order (lowest first)
        <input
          v-model="profile.sortOrder"
          type="text"
        >
      </label>

      <button type="submit">
        {{ profile._id ? 'Update' : 'Save' }}
      </button>
    </form>

    <p v-show="errorMessage">
      <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
    </p>

    <p v-show="success">
      <span class="success"> Profile {{ profile._id ? 'updated' : 'added' }}! </span>
    </p>

    <image-uploader
      v-show="profile._id"
      :username="profile.username"
    />
  </div>
</template>

<script>
import ImageUploader from "./profileEditor__imageUpload.vue";

export default {
  components: {
    ImageUploader
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      profile: {
        _id: undefined,
        username: "",
        profileBody: ""
      },
      success: false,
      errorMessage: ""
    };
  },
  async mounted() {
    this.grabProfile();
  },
  methods: {
    submit() {
      this.profile._id ? this.updateProfile() : this.submitProfile();
    },

    async submitProfile() {
      let profile = this.profile;
      delete profile._id;

      let response = await this.$store.dispatch("profiles/submit", { profile });
      if (response) {
        this.success = true;
        this.profile = response.profile;

        this.$toasted.show(
          'The profile has been successfully added.',
          {
            duration: 2000,
            type: 'success'
          }
        );

      }
    },
    async updateProfile() {
      let profile = this.profile;
      let response = await this.$store.dispatch("profiles/update", { profile });

      if (response) {
        this.success = true;
        this.grabProfile();

        this.$toasted.show(
          'The profile has been successfully added.',
          {
            duration: 2000,
            type: 'success'
          }
        );


      }
    },
    async grabProfile() {
      if (this.id) {
        let { profile } = await this.$store.dispatch("profiles/getProfileById", this.id);
        if (profile) this.profile = profile;
      }
    }
  },
};
</script>
