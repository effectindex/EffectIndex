<template>
  <figure 
    :class="'captionedImage ' + float"
    :style="{ maxWidth: (width ? width + 'px' : '100%'), marginTop: (top ? '0' : '2em') }">
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
        height: height ? height + 'px' : 'none',
        marginBottom: '0.5em'
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
    },
    top: {
      type: String,
      default: ""
    }
  },
  computed: {
    float() {
      switch (this.align.toLowerCase()) {
        case "right":
          return "floatRight";
        case "left":
          return "floatLeft";
        case "center":
          return "alignCenter";
        default:
          return "floatRight";
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
  margin: 0 auto;
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
  .floatRight, .floatLeft {
    float: none;
    margin: 1em auto;
  }
}
</style>