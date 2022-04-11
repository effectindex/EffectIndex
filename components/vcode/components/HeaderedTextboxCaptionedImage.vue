<template>
  <figure 
    :style="{ maxWidth: (width ? width + 'px' : '100%') }"
    class="captionedImage"
  >
    <img 
      v-if="src"
      :src="src" 
      :height="(height ? height + 'px' : 'auto')"
      @click.stop="toggleModal"
    >
    <div 
      v-else-if="gfycat"
      :style="{
        minWidth: width ? width + 'px' : 'none',
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
        v-show="(title) && (artist)"
        class="artistTitle"
      >
        <span class="title"> {{ title }} </span> by
        <span 
          v-if="url"
        >
          <ext-link :href="url"> {{ artist }} </ext-link>
        </span>
        <span 
          v-else
          class="artist"
        > {{ artist }} </span>
        <span v-show="caption"> - </span>
      </span>
      {{ caption }}
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
    }
  },
  computed: {
    modalData() {
      const { gfycat, src } = this;
      return gfycat ? 
      { type: 'gfycat', resource: gfycat } :
      { type: 'image', resource: src };
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
</style>