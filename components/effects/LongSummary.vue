<template>
  <div 
    class="effect__longSummary">
    <h4 class="longSummary__title">
      <nuxt-link
        :to="`/effects/${effect.url}`">
        {{ effect.name }}
      </nuxt-link>
    </h4>
    <captioned-image
      v-if="image"
      :align="odd ? 'left' : 'right'"
      :title="image.title"
      :src="(image.type === 'image') ? `/img/gallery/${image.resource}` : undefined"
      :gfycat="(image.type === 'gfycat') ? image.resource : undefined"
      :artist="image.artist"
      height="300"
      top="yup" />
    <p v-html="$md.render(long_summary)" />

  </div>
</template>

<script>
import CaptionedImage from "@/components/CaptionedImage";

export default {
  components: {
    CaptionedImage
  },
  props: {
    effect: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    long_summary() {
      return this.effect.long_summary ? this.effect.long_summary : "Long summary placeholder.";
    },
    replications() {
      return this.$store.state.replications;
    },
    odd() {
      return (this.index % 2) ? true : false;
    },
    image() {
      let replications = this.replications.filter((replication) => 
      (replication.associated_effects.includes(this.effect._id) && (replication.type !== 'audio')));

      return replications[Math.floor(Math.random() * (replications.length - 1))];
    }
  }
};
</script>

<style scoped>

p {
  line-height: 1;
}

  .effect__longSummary {
    padding-bottom: 1.5em;
    margin-bottom: 2.5em;
    clear: both;
    overflow: auto;
  }

  .floatLeft {
    float: left;
    margin: 0 1em 0em 0;
  }

  .floatRight {
    float: right;
    margin: 0 0 0em 1em;
  }

  .longSummary__image {
    max-height: 300px;
    max-width: 300px;
    padding-top: 0.5em;
  }

  .longSummary__title {
    font-size: 16pt;
    text-transform: none;
    letter-spacing: 0px;
  }

</style>