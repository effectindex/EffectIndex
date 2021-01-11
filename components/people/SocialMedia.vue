<template>
  <div class="socialMedia">
    <icon
      :filename="socialIconFilename"
      color="grey"
    />
    <a
      class="value"
      :href="value"
      target="_blank"
    >
      {{ value }}
    </a>
    <div class="controls">
      <a @click="removeSocial">
        <icon
          filename="times.svg"
          color="red"
        />
      </a>
      <a @click="moveUp">
        <icon
          filename="arrow-up.svg"
          color="grey"
        />
      </a>
      <a @click="moveDown">
        <icon
          filename="arrow-down.svg"
          color="grey"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'personal'
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    socialIconFilename() {
      switch (this.type) {
        case 'personal':
          return 'home.svg';
        case 'facebook':
          return 'facebook.svg';
        case 'instagram':
          return 'instagram.svg';
        case 'tiktok':
          return 'tiktok.svg';
        case 'reddit':
          return 'reddit.svg';
        case 'discord':
          return 'discord.svg';
        case 'twitter':
          return 'twitter.svg';
        default:
          return 'home.svg';
      }
    }
  },
  methods: {
    removeSocial() {
      this.$emit('remove', this.index);
    },
    moveUp() {
      this.$emit('moveUp', this.index);
    },
    moveDown() {
      this.$emit('moveDown', this.index);
    }
  }
};
</script>

<style scoped>
  .icon {
    flex: 1;
    max-width: 30px;
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    margin-top: 0.5em;
  }

  .value {
    flex: 1;
    padding: 0 10px;
  }

  .controls {
    flex: 1;
    max-width: 80px;
    display: flex;
    justify-content: flex-end;
  }

  .controls a {
    cursor: pointer;
  }

  .controls .icon {
    height: 100%;
    width: 30px;
  }
</style>