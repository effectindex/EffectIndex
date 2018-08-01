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
      this.profile._id ? this.updateProfile() : this.submitProfile();
    },

    async submitProfile() {
      let profile = this.profile;
      delete profile._id;

      let response = await this.$store.dispatch("submitProfile", { profile });
      if (response) {
        this.success = true;
        this.profile = response.profile;


        this.$notify({
          title: 'Profile Added',
          text: 'The profile has been succesfully added.'
        });

      }
    },
    async updateProfile() {
      let profile = this.profile;
      let response = await this.$store.dispatch("updateProfile", { profile });
      
      if (response) {
        this.success = true;
        this.grabProfile();

        this.$notify({
          title: 'Profile Updated',
          text: 'The profile has been succesfully updated.'
        });

      }
    },
    async grabProfile() {
      if (this.id) {
        let { profile } = await this.$store.dispatch("getProfileById", this.id);
        if (profile) this.profile = profile;
      }
    }
  },
};
</script>