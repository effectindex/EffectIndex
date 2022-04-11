<template>
  <div class="comparison">
    <div class="comparison-text">
      <div class="comparison-label">
        <h4 v-if="label">
          {{ label }}
        </h4>
        <h4 v-else-if="a && b"> 
          <span class="comparator"> {{ a }} </span> vs <span class="comparator"> {{ b }} </span>
        </h4>
        <div
          v-show="hasImages"
          class="show-images-button"
        >
          <a @click="toggleImages"> {{ showImages ? '(hide examples)' : '(show examples)' }} </a>
        </div>
      </div>
      <vcode
        :body="description.children"
        type="p"
        class="comparison-description"
      />
    </div>
    <div
      v-if="hasImages && showImages"
      class="comparison-images"
    >
      <captioned-image
        :no-margin="true"
        top="true"
        border="true"
        v-bind="images[0].properties"
      />
      <div class="image-separator">
        vs
      </div>
      <captioned-image
        :no-margin="true"
        top="true"
        border="true"
        v-bind="images[1].properties"
      />
    </div>
  </div>
</template>

<script>
import CaptionedImage from '@/components/vcode/components/CaptionedImage';

export default {
  name: 'Comparison',
  components: {
    CaptionedImage
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    description: {
      type: Object,
      default: () => ({})
    },
    images: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      showImages: false
    };
  },
  computed: {
    a () {
      return this.items.length && this.items[0] ? this.items[0].properties.name : undefined;
    },
    b () {
      return this.items.length && this.items[1] ? this.items[1].properties.name : undefined;
    },
    hasImages () {
      return this.images && this.images.length === 2;
    }
  },
  methods: {
    toggleImages () {
      this.showImages = !this.showImages;
    }
  }
};
</script>


<style scoped>
  .comparison {
    margin: 1em 0;
  }

  .comparison .comparison-text {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }

  .comparison .comparison-label {
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding-right: 20px;
  }

  .comparison h4 {
    margin: 0;
    text-transform: unset;
    letter-spacing: unset;
    text-align: right;
    padding-top: 3px;
  }

  .comparison .comparison-text > p {
    margin: 0;
    flex: 1;
    padding-left: 20px;
    border-left: 1px solid #EEE;
  }

  .comparison .comparator {
    font-weight: bold;
    display: inline-block;
  }

  .comparison .comparison-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .comparison .show-images-button a {
    cursor: pointer;
  }

  .comparison figure {
    margin: 0.5em;
  }

  .comparison .image-separator {
    color: #CCC;
  }

  @media(max-width: 1000px) {
    .comparison .comparison-text {
      flex-direction: column;
    }

    .comparison h4 {
      display: inline-block;
      text-align: left;
      margin-right: 20px; 
      padding-bottom: 0;
      border-bottom: none;
    }

    .comparison figure {
      margin: 0;
    }

    .comparison .comparison-label {
      flex-direction: row;
      width: auto;
      justify-content: flex-start;
      align-items: flex-end;
      padding-right: 20px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #EEE;
    }

    .comparison .comparison-text > p {
      padding-left: 0;
      border-left: none;
    }

    .comparison .comparison-images {
      flex-direction: column;
    }
  }

</style>