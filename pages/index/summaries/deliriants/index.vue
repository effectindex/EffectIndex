<template>
  <div class="pageContent effectCategories">
    <div>
      <img
        src="/icons/deliriant.svg"
        class="fa categoryIcon">
      <h1> Subjective Effects of Deliriants </h1>
      <div class="categoryDescription">
        <p> This article breaks down the subjective effects of the deliriant experience into simple and easy 
        to understand descriptions with accompanying image replications. This is done without resorting to
        metaphor, analogy, or personal trip reports. </p>

        <p> These descriptions are not specific to any particular substance but are applicable to the effects which commonly
        occur in various forms under the influence of almost any deliriant compound. This includes, but is not limited to, 
        both synthetic and plant based deliriants, such as: </p>

        <p> <i> diphenhydramine (DPH), datura, atropine, hyoscyamine, scopolamine, dimenhydrinate, doxylamine,
        benzydamine, elemicin, brugmansia, atropa belladonna, hyoscyamus niger, mandragora officinarum </i> </p>

        <p> Individual effects are also summarized with a prominent link to their full article. </p>
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