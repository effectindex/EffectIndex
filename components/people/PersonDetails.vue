<template>
  <form 
    class="people__personDetails"
    @submit.prevent="handleSubmit"
    @keydown.enter.prevent
  >
    <div class="people__inputField">
      <h3> Full Name </h3>
      <input
        v-model="person.full_name"
        type="text"
      >
    </div>

    <div class="people__inputField">
      <h3> Alias </h3>
      <input
        v-model="person.alias"
        type="text"
      >
    </div>

    <div class="people__inputField">
      <h3> Bio </h3>
      <vcode-input 
        v-model="person.bio"
      />
    </div>

    <div class="people__inputField">
      <h3> Email </h3>
      <input
        v-model="person.email"
        type="text"
      >
    </div>

    <div class="people__inputField">
      <h3> Social Media </h3>
      <social-media-input
        v-model="person.social_media"
      />
    </div>

    <div class="people__inputField">
      <h3> Tags </h3>
      <tag-input 
        v-model="person.tags" 
      />
    </div>

    <div class="people__inputField">
      <h3> Profile Url </h3>
      <h4 style="text-transform: none; letter-spacing: unset;">
        (/people/<b>?</b> e.g.: mark-gillis)
        <input
          v-model="person.profile_url"
          type="text"
        >
      </h4>
    </div>

    <div class="people__inputField">
      Private? 
      <input
        v-model="person.private"
        class="people__inputPrivateCheckbox"
        type="checkbox"
      >
    </div>

    <div class="people__controls">
      <button
        v-if="!person._id"
        type="submit"
      >
        Create New
      </button>
      <button
        v-else
        type="submit"
      >
        Update
      </button>
      <button type="reset">
        Reset
      </button>
    </div>
  </form>
</template>

<script>
import TagInput from '@/components/editors/TagInput';
import VcodeInput from '@/components/vcode/editor';
import SocialMediaInput from './SocialMediaInput';

export default {
  components: {
    TagInput,
    VcodeInput,
    SocialMediaInput
  },
  props: {
    person: {
      type: Object,
      default: () => ({
        _id: undefined,
        not_public: true,
        full_name: undefined,
        alias: undefined,
        email: undefined,
        social_media: [],
        bio: '\n\n\n',
        tags: undefined,
        profile_url: undefined
      })
    }
  },
  methods: {
    handleSubmit(e) {
        if (this.person._id) {
          this.$emit('update', this.person);
        } else {
          this.$emit('submit', this.person);
        }
    }
  }
};
</script>

<style scoped>

.people__personDetails {
  margin: 1em 0;
  padding: 20px 0;
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
}

.people__controls {
  display: flex;
  justify-content: flex-end;
}

.people__controls button {
  background-color: #CCC;
  border: 1px solid #BBB;
  width: 100px;
  padding: 1em;
  font-size: 14px;
  margin-left: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.people__controls button:hover {
  background-color: #BBB;
}

.people__inputPrivateCheckbox {
  display: inline-block;
  margin-left: 25px;
}

.people__personDetails h3 {
  text-transform: none;
  letter-spacing: unset;
  margin: 0;
  margin-bottom: 3px;
  padding: 0;
}

.people__inputField input[type=text], .people__inputField textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
}

.people__inputField textarea {
  height: 150px;
}

.people__inputField {
  margin-bottom: 1em;
}
</style>