<template>
  <div 
    v-show="thumbs.length > 0"
    class="lightBox"
  >
    <div
      v-if="currentImage"
      class="lightBox__canvas"
    >
      <transition name="fade">
        <div 
          v-if="currentImage.resource && (currentImage.type === 'image')"
          :key="currentImage.resource"
          v-touch:swipe.left="nextImage"
          v-touch:swipe.right="previousImage"
          :style="'background-image: url(\'' + encodeURI(base + currentImage.resource) + '\');'"
          class="lightBox__image"
          @click.prevent="toggleModal()"
        >
          <image-details
            :title="currentImage.title"
            :artist="currentImage.artist"
            :artist-webpage="currentImage.artist_url"
          />
        </div>

        <div 
          v-else-if="currentImage.resource && (currentImage.type === 'gfycat') && (!modalActive)"
          :key="currentImage.resource"
          style="position:relative;height: 100%;"
        >
          <iframe
            :src="'https://gfycat.com/ifr/' + currentImage.resource + '?autoplay=1'"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="100%"
            style="position:absolute;top:0;left:0"
            allow="autoplay"
            allowfullscreen
          />
            
          <div
            v-touch:swipe.left="nextImage"
            v-touch:swipe.right="previousImage"
            class="lightBox__touchControls"
            @click="toggleModal"
          />

          <image-details
            :title="currentImage.title"
            :artist="currentImage.artist"
            :artist-webpage="currentImage.artist_url"
          />
        </div>
      </transition>

      <a 
        class="lightBox__control previousImage"
        @mousedown="previousImage"
      >
        <Icon
          filename="chevron-double-left.svg"
          class="lightBox__icon"
          color="white"
        />
      </a>
      <a
        class="lightBox__control nextImage"
        @mousedown="nextImage"
      >
        <Icon
          filename="chevron-double-right.svg"
          class="lightBox__icon"
          color="white"
        />
      </a>
    </div>

    <div
      ref="thumbnailReel"
      class="lightBox__thumbnailReel"
    >
      <div
        v-if="thumbs"
        ref="thumbnailContainer"
        :style="'left: ' + thumbnailOffset + 'px;'"
        class="lightBox__thumbnailContainer"
      >
        <span
          v-for="(image, index) in thumbs"
          :key="index"
          @mousedown="selectImage(index)"
        >
          <img 
            v-if="(image.type === 'image')"
            ref="activeThumbnail"
            :src="base + '/thumbnails/' + image.resource"
            :class="current_image === index ? {active: true}: {}"
            class="lightBox__thumbnailImage"
          >
          <img
            v-else-if="(image.thumbnail)"
            ref="activeThumbnail"
            :src="base + '/thumbnails/' + image.thumbnail"
            :class="current_image === index ? {active: true}: {}"
            class="lightBox__thumbnailImage"
          >
          <img
            v-else-if="image.type === 'gfycat'"
            ref="activeThumbnail"
            :src="'https://thumbs.gfycat.com/' + image.resource + '-mobile.jpg'"
            :class="current_image === index ? {active: true}: {}" 
            class="lightBox__thumbnailImage"
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ImageDetails from "./LightBox__imageDetails";
import Icon from '@/components/Icon';

export default {
  components: {
    ImageDetails,
    Icon
  },
  props: {
    imageSet: {
      default: () => [],
      type: Array
    },
    order: {
      default: () => [],
      type: Array
    },
    base: {
      type: String,
      default: ""
    },
    gfycats: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      current_image: 0,
      thumbnailOffset: 0,
      modalActive: false,
      thumbs: []
    };
  },
  computed: {
    currentImage() {
      if (this.thumbs.length > 0) {
        if (this.current_image <= this.thumbs.length - 1)
          return this.thumbs[this.current_image];
        else return this.imageSet[this.thumbs.length - 1];
      } else if (this.imageSet.length > 0) {
        if (this.current_image <= this.imageSet.length - 1)
          return this.imageSet[this.current_image];
        else return this.imageSet[this.imageSet.length - 1];
      } else return {};
    }
  },
  watch: {
    imageSet: function(oldImageSet, newImageSet) {
      this.current_image = 0;
      this.updateThumbs();
    }
  },
  mounted() {
    this.updateThumbs();
    this.updateThumbnailOffset();
  },
  updated() {
    this.updateThumbnailOffset();
    if (!this.thumbs.length) this.$emit('listEnd');
  },
  methods: {
    updateThumbs() {
      if (this.order.length) {
        let thumbs = [];
        this.order.forEach(order => {
          let foundImage = this.imageSet.find(image => image._id === order._id);
          if (foundImage) thumbs.push(foundImage);
        });
        let filteredImageSet = this.imageSet.filter(image => {
          return !this.order.find(orderItem => orderItem._id === image._id);
        });
        if (!this.gfycats) this.thumbs = thumbs.concat(filteredImageSet).filter((thumb) => thumb.type !== 'gfycat');
        else this.thumbs = thumbs.concat(filteredImageSet);
      } else {
        if (!this.gfycats) this.thumbs = this.imageSet.filter((image) => (image.type !== 'gfycat'));
        else this.thumbs = this.imageSet;
      }
      
    },
    updateThumbnailOffset() {
      setTimeout(() => {
        if (this.$refs.thumbnailReel && this.$refs.activeThumbnail) {
          let thumbnailReel = this.$refs.thumbnailReel;
          let currentImage = this.$refs.activeThumbnail[this.current_image];

          this.thumbnailOffset =
            thumbnailReel.offsetWidth / 2 -
            currentImage.offsetLeft -
            currentImage.offsetWidth / 2;
        }
      }, 0);
    },
    selectImage(index) {
      this.current_image = index;
      this.updateThumbnailOffset();
    },
    nextImage() {
      if ((this.current_image + 1) >= this.thumbs.length) this.$emit('listEnd');
      this.current_image =
        (this.current_image + 1) % this.thumbs.length;
      this.updateThumbnailOffset();
    },
    previousImage() {
      if (this.current_image === 0) {
        this.current_image = this.thumbs.length - 1;
        this.$emit('listStart');
      } else this.current_image = this.current_image - 1;
      this.updateThumbnailOffset();
    },
    openImage(url, absolute) {
      absolute ? window.open(url) : window.open("/img/gallery/" + url);
    },
    toggleModal() {
      let data = {
        type: this.currentImage.type,
        resource: (this.currentImage.type === 'image') ? this.base + this.currentImage.resource : this.currentImage.resource 
      };

      this.$store.commit("modal/set_data", data);
      this.$store.commit("modal/toggle");
    }
  }
};
</script>

<style>
.lightBox__icon {
  width: 40px;
  height: 45px;
  border: 1px solid red;
  opacity: 0.6;
}

.lightBox__canvas {
  height: 530px;
  overflow: hidden;
  text-align: center;
  position: relative;
  background-color: #f7f7f7;
}

.lightBox__control {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100px;
  width: 50px;
  position: absolute;
  top: calc(50% - 50px);
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.65;
  color: white;
  border-radius: 5px;
}

a.lightBox__control {
  color: white;
  cursor: pointer;
}

.lightBox__touchControls {
  height: 75%;
  width: 100%;
  opacity: 0;
}

a.lightBox__control:hover {
  opacity: 1;
  color: white;
}

.lightBox__control.nextImage {
  right: 0;
}

.lightBox__image {
  display: inline-block;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;
}

.lightBox__imageDetails {
  position: absolute;
  top: 0;
  left: 0;
  margin: 25px;
  background-color: rgba(23, 23, 23, 0.5);
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  color: white;
  padding: 10px;
  user-select: none;
}

@media (max-width: 500px) {
  .lightBox__imageDetails {
    margin: 5px;
    padding: 5px;
  }
}

.lightBox__imageDetails .lightBox__title {
  font-size: 16px;
  text-transform: none;
  color: white;
  text-shadow: 0px 0px 2px black;
  margin: 10px;
}

.lightBox__imageDetails .lightBox__artist {
  font-size: 13px;
  text-transform: none;
  color: white;
  margin: 10px;
  text-shadow: 0px 0px 2px black;
  font-style: italic;
}

.lightBox__artist a {
  color: white;
}

.lightBox__artist a:hover {
  color: white;
}

.lightBox img {
  height: 100%;
  cursor: pointer;
  opacity: 0.35;
  transition: opacity 0.5s ease;
}

.lightBox__thumbnailReel {
  overflow: hidden;
  margin: 1em 0;
}

.lightBox__thumbnailImage.active {
  opacity: 1;
}

@media (max-width: 1100px) {
  .lightBox__canvas {
    height: 400px;
  }
}

@media (max-width: 500px) {
  .lightBox__canvas {
    height: 300px;
  }

  .lightBox__imageDetails {
    display: none;
  }
}

@media (max-width: 400px) {
  .lightBox__canvas {
    height: 200px;
  }
}

.lightBox__thumbnailContainer {
  position: relative;
  height: 80px;
  transition: left 0.5s ease-out;
  width: 8000px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>