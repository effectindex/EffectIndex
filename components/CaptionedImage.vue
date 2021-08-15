<template>
  <figure
    :class="float + ' ' + (border ? 'withBorder' : '')"
    :style="{ maxWidth: (width ? width + 'px' : '100%'), marginTop: (top ? '0' : '2em') }"
    class="captionedImage"
  >
    <img
      v-show="imageSrc.src"
      :src="imageSrc.src"
      :height="(height ? height + 'px' : 'auto')"
      :style="{ borderRadius: (rounding ? rounding: '0') }"
      @click.stop="toggleModal"
    >
    <div
      v-show="gfycat"
      :style="{
        maxWidth: width ? width + 'px' : 'none',
        height: height ? height + 'px' : 'auto',
        marginBottom: '0.5em'
      }"
      style="position:relative; padding-bottom:56.25%;"
      @click.stop="toggleModal"
    >
      <iframe
        v-if="gfycat"
        :src="'https://gfycat.com/ifr/' + gfycat + '?hd=1&wmmode=opaque'"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="100%"
        style="position:absolute;top:0;left:0;"
        allow="autoplay"
        allowfullscreen
      />
    </div>
    <figcaption class="captionedImage__caption">
      <span
        v-show="(title || imageSrc.title) && (artist || imageSrc.artist)"
        class="artistTitle"
      >
        <span class="title"> {{ title || imageSrc.title }} </span> by
        <span
          v-if="url"
        >
          <ext-link :href="url"> {{ artist || imageSrc.artist }} </ext-link>
        </span>
        <span
          v-else
          class="artist"
        > {{ artist || imageSrc.artist }} </span>
        <span v-show="caption || imageSrc.caption"> - </span>
      </span>
      {{ caption || imageSrc.caption }}
    </figcaption>
  </figure>
</template>


<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
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
    url: {
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
    },
    border: {
      type: String,
      default: ""
    },
    rounding: {
      type: String,
      default: ""
    },
    imageRoutes: {
      type: String,
      default: undefined
    }
  },
  computed: {
    imageSrc() {
      let imageSrc = {
        src: this.src,
        title: this.title,
        artist: this.artist,
        caption: this.caption
      };

      if (this.imageRoutes) {
        let routes = this.imageRoutes.split(',');

        routes.forEach((route) => {
          let info = route.split(':');
          let path = info[0] ? info[0].trim() : undefined;
          let src = info[1] ? info[1].trim() : this.src;
          let title = info[2] ? info[2].trim() : this.title;
          let artist = info[3] ? info[3].trim() : this.artist;
          let caption = info[4] ? info[4].trim() : this.caption;

          if (this.$route.path.includes(path)) imageSrc = { src, title, artist, caption };

        });
      }

      return imageSrc;
    },

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
    },
    modalData() {
      return {
        type: this.gfycat ? 'gfycat' : 'image',
        resource: this.gfycat ? this.gfycat : this.imageSrc.src
      };
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit("modal/set_data", this.modalData);
      this.$store.commit("modal/toggle");
    }
  },
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

.withBorder {
  border: 1px solid #EEE;
  background-color: rgb(252, 252, 252);
  padding: 6px;
}

.captionedImage img {
  cursor: pointer;
  width: 100%;
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
