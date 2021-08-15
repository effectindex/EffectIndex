<template>
  <div class="socialMediaInput">
    <div class="socialMediaInput__input">
      <div class="socialMediaInput__typeInput">
        <select         
          v-model="socialMediaType"
        >
          <option
            v-for="(name, index) in ['personal', 'facebook', 'instagram', 'tiktok', 'reddit', 'discord', 'twitter', 'youtube']"
            :key="index"
            :value="name"
          >
            {{ name }}
          </option>
        </select>
      </div>
      <div class="socialMediaInput__urlInput">
        <input
          v-model="socialMediaValue"
          type="text"
          @keydown="handleKeyDown"
        >
      </div>
      <div class="socialMediaInput__inputControls">
        <button @click.prevent="addSocialMedia">
          Add
        </button>
        <button @click.prevent="reset">
          Clear
        </button>
      </div>
    </div>
    <social-media 
      v-for="(social, index) in value"
      :key="index"
      :index="index"
      :type="social.type"
      :value="social.value"
      @moveUp="moveSocialMediaUp"
      @moveDown="moveSocialMediaDown"
      @remove="removeSocialMedia"
    />
  </div>
</template>

<script>
import SocialMedia from './SocialMedia';

export default {
  components: {
    SocialMedia
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      socialMediaValue: '',
      socialMediaType: 'personal'
    };
  },
  methods: {
    addSocialMedia () {
      const type = this.socialMediaType;
      const value = this.socialMediaValue;
      this.$emit('input', [...this.value, { type, value }]);
      this.reset();
    },
    reset () {
      this.socialMediaType = '';
      this.socialMediaValue = '';
    },
    moveSocialMediaUp (index) {
      if (index > 0) {
        const socialMediaCopy = this.value.slice();
        const temp = socialMediaCopy[index - 1];
        socialMediaCopy[index - 1] = socialMediaCopy[index];
        socialMediaCopy[index] = temp;
        this.$emit('input', socialMediaCopy);
      }
    },
    moveSocialMediaDown (index) {
      if (index < (this.value.length - 1)) {
        const socialMediaCopy = this.value.slice();
        const temp = socialMediaCopy[index + 1];
        socialMediaCopy[index + 1] = socialMediaCopy[index];
        socialMediaCopy[index] = temp;
        this.$emit('input', socialMediaCopy);
      }
    },
    removeSocialMedia (index) {
      this.$emit('input', this.value.filter( (val, i) => i !== index ));
    },
    handleKeyDown(e) {
      if (e.key === 'Enter') {
        this.addSocialMedia();
      }
    }
  }
};
</script>

<style scoped>
  .socialMediaInput__input {
    display: flex;
  }

  .socialMediaInput select {
    padding: 0.5em;
    border: 1px solid #BBB;
  }
  
  .socialMediaInput__urlInput {
    flex: 1;
  }

  input {
    padding: 0.5em;
    margin: 0 10px;
    width: 100%;
    height: 100%;
    border: 1px solid #BBB;
  }

  .socialMediaInput button {
    padding: 0.5em;
    flex: 1;
    border: 1px solid #BBB;
    margin: 0 5px;
  }

  .socialMediaInput__inputControls {
    width: 200px;
    display: flex;
  }
</style>