<template>
  <div class="pageContent effectCategories">
    <div>
      <fa
        :icon="['far', 'user']"
        class="fa categoryIcon" />
      <h1> Subjective Effects of Deliriants </h1>
      <div class="categoryDescription">
        <p> Write me </p>
      </div>
    </div>
    <hr>
    <div class="effectsContainer">
      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant')"
        :index="i"
        :effect="effect"
        :key="effect._id" />
    </div>
  </div>
</template>

<script>
import CaptionedImage from "@/components/CaptionedImage";
import LongSummary from "@/components/effects/LongSummary";

export default {
  components: {
    CaptionedImage,
    LongSummary
  },
  scrollToTop: true,
  data () {
    return {
      linkedEffect: this.$route.query.e
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  },
  mounted() {
    if (this.linkedEffect) {
      this.$scrollTo(`#${this.linkedEffect}`);
    }
  },
  watchQuery: ['e'],
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>