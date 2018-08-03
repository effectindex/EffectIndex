<template>
  <div class="pageContent">
    <i class="fa fa-picture-o categoryIcon" />
    <h1> Replications </h1>
    <p> 
      <span class="bold"> Replications </span> are image, video, and audio recreations of the
      sensory experiences produced by the various subjective effects that a user may encounter
      under the influence of hallucinogens. Replications may be created intentionally or 
      unintentionally, as long as they accurately convey the effect being shown. They serve
      the purpose of documenting certain experiences in a level of detail which descriptive
      language is incapable of describing.
    </p>
    <p>
      This page will serve as a dedicated index of as many replication examples as possible in 
      the form of images, animations, and videos. These are primarily sourced from our subreddit, 
      through <nuxt-link to="/artists"> dedicated artists </nuxt-link> such as 
      <nuxt-link to="/profiles/StingrayZ"> StingrayZ </nuxt-link>,
      <nuxt-link to="/profiles/Zenx2"> Zenx2 </nuxt-link>, 
      and from various sources throughout the internet. It is worth noting that while the artist 
      is credited for each replication wherever possible, if you would like your artwork removed
      or its link altered please do not hesitate to contact me at disregardeverythingisay@gmail.com.
    </p>
    <hr>

    <nuxt-link 
      :to="'/effects/' + selected_effect.url">
      <h3 
        ref="lightbox"
        style="text-align: center;"> {{ selected_effect.name }} </h3>
    </nuxt-link>
    <light-box
      
      :image-set="replications.filter((replication) => replication.associated_effects.indexOf(selected_effect_id) >= 0)"
      :order="replicated_effects.find((effect) => (effect._id === selected_effect_id))['gallery_order']"
      base="/img/gallery/"
      @listEnd="selectNextEffect"
      @listStart="selectPrevEffect" />

    <hr>
    <h3> Effect Galleries </h3>
    <effect-selector 
      :effects="replicated_effects"
      :selected="selected_effect_id"
      @effectSelected="scroll" />


  </div>
</template>

<script>
import EffectSelector from "@/components/EffectSelector.vue";
import LightBox from "@/components/LightBox/LightBox.vue";

export default {
  components: {
    EffectSelector,
    LightBox
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
  },
  methods: {
    scroll() {
      this.$scrollTo(this.$refs.lightbox, 800);
    },
    selectNextEffect() {
      if (!this.replicated_effects.length) return;
      let currentIndex = this.replicated_effects.findIndex(
        val => val._id === this.selected_effect_id
      );

      if ((currentIndex + 1) >= this.replicated_effects.length) {
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[0]._id);
      } else {
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[currentIndex + 1]._id);
      }
    },
    selectPrevEffect() {
      if (!this.replicated_effects.length) return;
      let currentIndex = this.replicated_effects.findIndex(
        val => val._id === this.selected_effect_id
      );

      if ((currentIndex - 1) <= 0) {
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[this.replicated_effects.length - 1]._id);
      } else {
        this.$store.dispatch("setGallerySelectedEffect", this.replicated_effects[currentIndex - 1]._id);
      }
    }
  },
  head() {
    return {
      title: "Replications"
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("getGallery");
  }
};
</script>