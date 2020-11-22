<template>
  <div class="pageContent effectCategories">
    <div>
      <Icon
        filename="eye.svg"
        class="categoryIcon"
      />
      <h1> Visual Effects of Psychedelics </h1>
      <captioned-image
        :border="true"
        src="/img/gallery/In_the_tree_by_Eddie_calz.jpg"
        float="right"
        width="300"
        title="In the Tree"
        artist="Eddie Calz"
        top="true"
      />
      <div class="categoryDescription">
        <p> This article breaks down the subjective visual effects of the psychedelic experience into simple and easy to understand descriptions with accompanying image replications. This is done without resorting to metaphors, analogies, or personal trip reports. </p>
        <p> These descriptions are not specific to any particular substance but are applicable to the effects which commonly occur in various forms under the influence of almost any psychedelic compound. This includes, but is not limited to, both classical and research chemical psychedelics, such as: </p>
        <p style="font-style: italic;">
          LSD, Psilocybin mushrooms, DMT, Ayahuasca, Mescaline, 5-MeO-MiPT, 2C-B, LSA, AL-LAD, ALD-52, 1P-LSD, 2C-B-Fly, 2C-C, 2C-D, 2C-E, 2C-P, 4-AcO-DMT, 4-HO-MET, 4-HO-MiPT, 5-MeO-DMT, DPT, and DOC.
        </p>
        <p> The article begins with a description of the simpler effects and works its way up towards more complex experiences as it progresses. Individual effects are also summarized with a link to their full article. </p>
      </div>
    </div>
    <hr>
    <div>
      <div class="effectsContainer">
        <h3 class="titleContainer"> 
          Visual Amplifications
          <Icon
            filename="arrow-up.svg"
            class="actionIcon"
          />
        </h3>

        <p class="actionDescription">
          <b> Visual amplifications </b> are defined as any subjective effect that increases, enhances, or intensifies a facet of a person's sense of sight.
        </p>

        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'enhancement')"
          :key="effect._id"
          :index="i"
          :effect="effect"
        />
      </div>

      <div class="effectsContainer">
        <h3 class="titleContainer">
          Visual Distortions 
          <Icon
            filename="distortions.svg"
            class="actionIcon"
          />
        </h3>
        <p class="actionDescription">
          <b> Visual distortions </b> are any subjective effect which alters and changes the perception or appearance of pre-existing visual data without adding any entirely new content.
        </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'distortion')"
          :key="effect._id"
          :index="i"
          :effect="effect"
        />
      </div>

      <div class="effectsContainer">
        <h3 class="titleContainer">
          Geometric Patterns
          <Icon
            filename="geometry.svg"
            class="actionIcon"
          />
        </h3>
        <p class="actionDescription">
          <b> Geometric patterns </b> are defined as any subjective effect that introduces complex arrays of shapes, colours, symbols, patterns, geometry, form constants, and fractals to one's field of vision.
        </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'geometric')"
          :key="effect._id"
          :index="i"
          :effect="effect"
        />
      </div>     

      <div class="effectsContainer">
        <h3 class="titleContainer">
          Hallucinatory States
          <Icon
            filename="dragon.svg"
            class="actionIcon"
          />
        </h3>
        <p class="actionDescription">
          <b> Hallucinatory states </b> are any subjective effect which changes the perception or appearance of pre-existing visual data by adding entirely new content in a manner which is similar to that of dreams.
        </p>
        <long-summary 
          v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual', 'hallucinatory state')"
          :key="effect._id"
          :index="i"
          :effect="effect"
        />
      </div>
      <h3> See Also </h3>
      <ul>
        <li>
          <nuxt-link to="/substances/">
            Substance Index
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/summaries/psychedelics/cognitive">
            Cognitive Psychedelic Effects
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/summaries/psychedelics/miscellaneous">
            Miscellaneous Psychedelic Effects
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CaptionedImage from "@/components/CaptionedImage";
import LongSummary from "@/components/effects/LongSummary";
import Icon from '@/components/Icon';

export default {
  components: {
    CaptionedImage,
    LongSummary,
    Icon
  },
  head() {
    return {
      title: "Visual Psychedelic Effects"
    };
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
  async fetch({ store }) {
    await store.dispatch("getEffects");
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
  }
};
</script>
