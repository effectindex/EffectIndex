<template>
  <div class="pageContent">
    <Icon
      filename="images.svg"
      class="categoryIcon"
    />
    <h1> Replications </h1>
    <p> 
      <span class="bold"> Replications </span> are image, video, and audio recreations of the sensory experiences produced by various subjective effects that a user may encounter under the influence of hallucinogens. Replications may be created intentionally or unintentionally, as long as they accurately convey the effect being shown. They serve the purpose of documenting certain experiences in a level of detail that descriptive language is incapable of describing.
    </p>
    <p>
      This page will serve as a dedicated index of as many replication examples as possible in the form of images, animations, and videos. These are primarily sourced from our <a href="https://reddit.com/r/replications">subreddit,</a> through dedicated artists, and from various sources throughout the internet. The artist is credited for each replication whenever possible. However, if you would like your artwork removed or its link altered, please do not hesitate to contact us at <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com </a>
    </p>

    <hr>

    <h3 
      ref="lightbox"
      style="text-align: center;"
    >
      <nuxt-link :to="'/effects/' + selected_effect.url">
        {{ selected_effect.name }}
      </nuxt-link>
    </h3>

    <light-box
      :image-set="image_set"
      :order="gallery_order"
      base="/img/gallery/"
      @listEnd="switchEffect"
      @listStart="switchEffect(true)"
    />

    <hr>
    <h3> Effect Galleries </h3>
    <effect-selector 
      :effects="replicated_effects"
      :selected="selected_effect_id"
      @effectSelected="scroll"
    />
  </div>
</template>

<script>
import EffectSelector from "@/components/EffectSelector.vue";
import LightBox from "@/components/gallery/LightBox.vue";
import Icon from '@/components/Icon';

export default {
  components: {
    EffectSelector,
    LightBox,
    Icon
  },
  computed: {
    replicated_effects() {
      return this.$store.state.gallery.replicated_effects;
    },
    replications() {
      return this.$store.state.gallery.replications;
    },
    selected_effect_id() {
      return this.$store.state.gallery.selected_effect_id;
    },
    selected_effect() {
      let selected_effect = this.replicated_effects.find(
        val => val._id === this.selected_effect_id
      );

      return selected_effect ? selected_effect : {};
    },
    image_set() {
      return this.replications.filter(
        (replication) => replication.associated_effects.includes(this.selected_effect_id));
    },
    gallery_order() {
      const selectedEffect = this.replicated_effects.find(
        (effect) => (effect._id === this.selected_effect_id));

      return selectedEffect ? selectedEffect.gallery_order : undefined;
    },
    current_index() {
      return this.replicated_effects.findIndex(
        val => val._id === this.selected_effect_id
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("getGallery");
  },
  methods: {
    scroll() {
      this.$scrollTo(this.$refs.lightbox, 800);
    },
    switchEffect(prev) {
      if (!this.replicated_effects.length) return;

      if (!prev) {
        let index = ((this.current_index + 1) >= this.replicated_effects.length) ? 0 : this.current_index + 1;
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[index]._id);
      } else {
        let index = ((this.current_index - 1) <= 0) ? this.replicated_effects.length - 1 : this.current_index - 1;
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[index]._id);
      }
    },
  },
  head() {
    return {
      title: "Replications"
    };
  }
};
</script>