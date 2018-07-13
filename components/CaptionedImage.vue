<template>
  <figure 
    :class="'captionedImage ' + float + ' unfloat'"
    :style="{ maxWidth: (width ? width + 'px' : '100%') }">
    <div v-if="src">
      <a 
        :href="src"
        target="_blank">
        <img 
          :src="src" 
          :width="(width ? width + 'px' : '100%')" 
          :height="(height ? height + 'px' : '100%')">
      </a>
    </div>
    <div 
      v-else-if="gfycat"
      :style="{
        maxWidth: width ? width + 'px' : 'none',
        maxHeight: height ? height + 'px' : 'none'
      }"
      style="position:relative; padding-bottom:56.25%;"
    >
      <iframe
        :src="'https://gfycat.com/ifr/' + gfycat + '?hd=1&controls=0&wmmode=opaque'"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="100%"
        style="position:absolute;top:0;left:0;"
        allowfullscreen />
    </div>
    <figcaption class="captionedImage__caption">
      <span 
        v-show="title && artist"
        class="artistTitle"
      >
        <span class="title"> {{ title }} </span> by
        <span class="artist"> {{ artist }} </span>
        <span v-show="caption"> - </span>
      </span>
      {{ caption }}
    </figcaption>
  </figure>

</template>


<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    artist: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    gfycat: {
      type: String,
      default: ""
    }
  },
  computed: {
    float() {
      switch (this.align.toLowerCase()) {
        case 'right':
          return 'floatRight';
          break;
        case 'left':
          return 'floatLeft';
          break;
        case 'center':
          return 'alignCenter';
          break;
        default: 
          return 'floatRight';
          break;
      }
    }
  }
};
</script>

<style scoped>
.floatRight {
  float: right;
  margin: 2em;
  margin-right: 0;
}

.floatLeft {
  float: left;
  margin: 2em;
  margin-left: 0;
}

.alignCenter {
  display: block;
  margin: 30px auto;
}

.artistTitle {
  text-align: center;
}

.captionedImage__caption {
  font-size: 15px;
  text-align: center;
  color: #666;
  line-height: 1.25em;
  width: 100%;
}

.title {
  font-weight: bold;
}

.artist {
  font-style: italic;
}

.artistTitle {
  font-size: 14px;
}

@media (max-width: 500px) {
  .unfloat {
    float: none;
    margin: 1em auto;
  }
}
</style>