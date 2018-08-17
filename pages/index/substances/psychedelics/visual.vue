<template>
  <div class="pageContent effectCategories">
    <div>
      <fa
        :icon="['far', 'unlink']"
        class="fa categoryIcon" />
      <h1> Visual Effects of Psychedelics </h1>
      <captioned-image
        src="/img/gallery/In_the_tree_by_Eddie_calz.jpg"
        float="right"
        width="300"
        title="In the Tree"
        artist="Eddie Calz"
        top="true" />
      <p> This article breaks down the subjective visual effects of the psychedelic experience into simple and easy to understand descriptions with accompanying image replications. This is done without resorting to metaphors, analogies, or personal trip reports. </p>
      <p> These descriptions are not specific to any particular substance but are applicable to the effects which commonly occur in various forms under the influence of almost any psychedelic compound. This includes, but is not limited to, both classical and research chemical psychedelics, such as: </p>
      <p> LSD, Psilocybin mushrooms, DMT, Ayahuasca, mescaline, 5-MeO-MiPT, 2C-B, LSA, AL-LAD, ALD-52, 1P-LSD, 2C-B-Fly, 2C-C, 2C-D, 2C-E, 2C-P, 4-AcO-DMT, 4-HO-MET, 4-HO-MiPT, 5-MeO-DMT, DPT, and DOC. </p>
      <p> The article begins with a description of the simpler effects and works its way up towards more complex experiences as it progresses. Individual effects are also summarized with a link to their full article. </p>

    </div>
    <hr>
    <div>
      <div class="effectsContainer">
        <h3> Visual Enhancements </h3>
        <p class="actionDescription"> <b> Visual enhancements </b> are any subjective effect which improves one's ability to perceive the external environment through their sense of sight. </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'enhancement')"
          :index="i"
          :effect="effect"
          :key="effect._id" />
      </div>

      <div class="effectsContainer">
        <h3> Visual Distortions </h3>
        <p class="actionDescription"> <b> Visual distortions </b> are any subjective effect which alters and changes the perception or appearance of pre-existing visual data without adding any entirely new content. </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'distortion')"
          :index="i"
          :effect="effect"
          :key="effect._id" />
      </div>

      <div class="effectsContainer">
        <h3> <nuxt-link to="/effects/geometry"> Geometry </nuxt-link> </h3>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'geometry')"
          :show-title="false"
          :index="i"
          :effect="effect"
          :key="effect._id" />
      </div>      

      <div class="effectsContainer">
        <h3> Hallucinatory States </h3>
        <p class="actionDescription"> <b> Hallucinatory states </b> are any subjective effect which changes the perception or appearance of pre-existing visual data by adding entirely new content in a manner which is similar to that of dreams. </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'hallucinatory state')"
          :index="i"
          :effect="effect"
          :key="effect._id" />
      </div>
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
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  },
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
    await store.dispatch("getReplications");
  }
};
</script>