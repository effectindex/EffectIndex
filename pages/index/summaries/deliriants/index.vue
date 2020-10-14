<template>
  <div class="pageContent effectCategories">
    <div>
      <img
        src="/icons/deliriant.svg"
        class="fa categoryIcon"
      >
      <h1> Subjective Effects of Deliriants </h1>
      <captioned-image
        :border="true"
        src="/img/gallery/deliriants.jpg"
        align="right"
        width="300"
        title="700mg Diphenhydramine"
        artist="Stas Constantine"
        top="true"
      />
      <div class="categoryDescription">
        <p>
          This article breaks down the subjective effects of the deliriant experience into simple and easy 
          to understand descriptions with accompanying image replications. This is done without resorting to
          metaphor, analogy, or personal trip reports.
        </p>

        <p>
          These descriptions are not specific to any particular substance but are applicable to the effects which commonly
          occur in various forms under the influence of almost any deliriant compound. This includes, but is not limited to, 
          both synthetic and plant based deliriants, such as:
        </p>

        <p>
          <i> diphenhydramine (DPH), datura, atropine, hyoscyamine, scopolamine, dimenhydrinate, doxylamine,
            benzydamine, elemicin, brugmansia, atropa belladonna, hyoscyamus niger, mandragora officinarum </i>
        </p>

        <p> Individual effects are also summarized with a prominent link to their full article. </p>
      </div>
    </div>
    <hr>
    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Visual Effects
        <Icon 
          filename="eye.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Visual effects </b> are any subjective experience which directly alters a person's sense of sight.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'visual')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Auditory Effects
        <Icon 
          filename="volume-up.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Auditory effects </b> are any subjective effect which directly alters a person's sense of hearing. 
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'auditory')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Tactile Effects
        <Icon 
          filename="paper.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Tactile effects </b> are any subjective effect which directly alters a person's sense of touch. 
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'tactile')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Multisensory Effects
        <Icon 
          filename="cogs.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Multisensory effects </b> are any subjective effect which directly alters two or more senses simultaneously. <br> <br> 
        Although some hallucinatory effects may affect multiple senses at one time they are usually 
        not categorized as 'multisensory effects' unless they do so consistently.
        For example, while experiences with autonomous entities may sometimes have a tactile component to them, more often
        than not they are primarily a visual experience and are therefore classified as such.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'multisensory')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Cognitive Effects
        <Icon 
          filename="user.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Cognitive effects </b> are any subjective experience which directly alter or introduce new content to an element of a person's cognition.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'cognitive')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Physical Effects
        <Icon 
          filename="heart-rate.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        <b> Physical effects </b> are any subjective experience which directly affects an aspect of a person's physical body. 
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'physical').filter((effect) => !effect.tags.includes('uncomfortable'))"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Uncomfortable Physical Effects
        <Icon 
          filename="frown.svg"
          class="actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        An <b> uncomfortable physical effect </b> is any substance-induced alteration of a person's physical state which is unpleasant, 
        undesirable, painful, or otherwise a source of distress. In most cases they indicate a temporary part of a substance's 
        interaction with the body. However, in certain contexts, they can also indicate the need for attention or even medical treatment 
        if they become dangerously severe.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('deliriant', 'uncomfortable')"
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
        <nuxt-link to="/summaries/psychedelics/visual">
          Visual Psychedelic Effects
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/summaries/dissociatives/">
          Dissociative Subjective Effects
        </nuxt-link>
      </li>
    </ul>
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
      title: "Deliriant Effects"
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
