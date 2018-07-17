<template>
  <div>

    <form 
      enctype="multipart/form-data"
      @submit.prevent="submit" >

      <label> Username
        <input 
          v-model="profile.username"
          type="text"> </label>

      <label> Profile Body
        <textarea v-model="profile.body" />
      </label>

      <button type="submit"> {{ profile._id ? 'Update' : 'Save' }} </button>
    </form>

    <p v-show="errorMessage">
      <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
    </p>

    <p v-show="success">
      <span class="success"> Profile {{ profile._id ? 'updated' : 'added' }}! </span>
    </p>

    <image-uploader 
      v-show="profile._id"
      :username="profile.username" />
  </div>
</template>

<script>
import ProfileImage from "@/components/profiles/profileImage.vue";
import ImageUploader from "@/components/profiles/profileEditor__imageUpload.vue";

export default {
  components: {
    ProfileImage,
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
      this.profile._id ? this.submitModified() : this.submitNew();
    },

    async submitNew() {
      let profile = this.profile;
      delete profile._id;

      try {
        let response = await this.$axios.$post("/api/profiles/", { profile });
        if (response) {
          this.success = true;
          this.profile = response.profile;
        }
      } catch (error) {
        if ("error" in error.response.data)
          this.errorMessage = error.response.data.error.message;
      }
    },
    async submitModified() {
      let profile = this.profile;
      try {
        let response = await this.$axios.$put(
          "/api/profiles/" + profile._id,
          { profile }
        );
        if (response) this.success = true;
      } catch (error) {
        if ("error" in error.response.data)
          this.errorMessage = error.response.data.error.message;
      }
    },
    async grabProfile() {
      if (this.id) {
        let { profile } = await this.$axios.$get("/api/profiles/" + this.id);
        if (profile) this.profile = profile;
      }
    }
  },
};
</script>