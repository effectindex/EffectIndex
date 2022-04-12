<template>
  <div 
    :id="id"
    class="headeredTextbox"
  >
    <div 
      class="headersContainer"
      :style="`background-color: ${headerBackground}`"
    >
      <div
        class="headersContainerText"
      >
        <h4 
          v-show="label"
          class="label"
          :style="`background-color: ${labelBackground}`"
        >
          <span style="white-space: pre;">{{ label }}</span>
        </h4>
        <div 
          v-show="header || subHeader"
          class="headers"
        >
          <h3
            v-show="header" 
            class="mainHeader"
          >
            {{ header }}
          </h3>
          <h4
            v-show="subHeader" 
            class="subHeader"
          >
            <span class="separator">-</span> {{ subHeader }}
          </h4>
        </div>
      </div>
      <Icon
        v-if="icon"
        :filename="icon"
      />
    </div>
    <div
      class="body"
      :class="imageAlignment"
    >
      <div class="body-text">
        <slot />
      </div>
      <captioned-image 
        v-if="imageSrc || imageGfycat" 
        :src="imageSrc"
        :width="imageWidth"
        :height="imageHeight"
        :artist="imageArtist"
        :url="imageUrl"
        :title="imageTitle"
        :caption="imageCaption"
        :gfycat="imageGfycat"
      />
    </div>
  </div>
</template>

<script>
import CaptionedImage from './HeaderedTextboxCaptionedImage';
import Icon from '@/components/Icon';

export default {
  components: {
    CaptionedImage,
    Icon
  },
  props: {
    id: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: undefined
    },
    labelBackground: {
      type: String,
      default: '#666666'
    },
    headerBackground: {
      type: String,
      default: '#F0F0F0'
    },
    header: {
      type: String,
      default: undefined
    },
    subHeader: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: ""
    },
    imageAlign: {
      type: String,
      default: ""
    },
    imageWidth: {
      type: String,
      default: ""
    },
    imageHeight: {
      type: String,
      default: ""
    },
    imageArtist: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: ""
    },
    imageTitle: {
      type: String,
      default: ""
    },
    imageCaption: {
      type: String,
      default: ""
    },
    imageGfycat: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: undefined
    }
  },
  computed: {
    imageAlignment() {
      return this.imageAlign.toLowerCase() === 'left' ? 'left' : 'right';
    }
  }
};
</script>

<style scoped>

.headeredTextbox {
  border: 1px solid rgb(221, 221, 221);
  margin: 1em 0;
}

.headeredTextbox > .headersContainer h3, .headeredTextbox > .headersContainer h4 {
  margin: 0;
  text-transform: none;
  letter-spacing: unset;
}

.headeredTextbox .label {
  white-space: pre-line;
  color: white;
  padding: 5px 15px 5px 20px;
  border-radius: 0 30px 30px 0;
  margin: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.headeredTextbox .headers {
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin-left: 10px;
}

.headeredTextbox .mainHeader {
  margin-right: 5px;
  font-size: 20px;
}

.headeredTextbox .subHeader {
  color: #AAA;
  font-size: 18px;
}

.headeredTextbox h4.subHeader {
  margin-left: 5px;
}

.headeredTextbox .body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FAFAFA;
  padding: 20px;
}

.headeredTextbox .body > .body-text {
  margin-right: 2em;
  flex: 1;
}

.headeredTextbox .body.left > .body-text {
  margin-right: 0;
  margin-left: 2em;
}

.headeredTextbox .body.left {
  flex-direction: row-reverse;
}

.headeredTextbox .body-text p {
  flex: 1;
  margin: 0;
}

.headeredTextbox .body-text p:not(:last-of-type) {
  margin-bottom: 1em;
}

@media (max-width: 600px) {
  .headeredTextbox h3 {
    font-size: 20px;
  }

  .headeredTextbox .headers {
    flex-direction: column;
    align-items: flex-start;
  }

  .headeredTextbox .separator {
    display: none;
  }
  
  .headeredTextbox .body {
    padding: 10px;
    flex-direction: column;
  }

  .headeredTextbox .body.left {
    flex-direction: column-reverse;
  }

  .headeredTextbox .body > .body-text, .headeredTextbox .body.left > .body-text {
    margin: 1em 0;
  }

  .headeredTextbox .label {
    padding: 5px 15px 5px 10px;
  }
}

.icon {
  height: 25px;
  width: 25px;
  opacity: 0.6;
  margin: 0.5em;
}

.headersContainer, .headersContainerText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
