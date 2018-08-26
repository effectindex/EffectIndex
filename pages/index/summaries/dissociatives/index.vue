<template>
  <div class="pageContent effectCategories">
    <div>
      <img 
        style="opacity: 0.6;"
        class="fa categoryIcon"
        src="/icons/disconnective.svg">
      <h1> Subjective Effects of Dissociatives </h1>
      <div class="categoryDescription">
        <p>This article breaks down the subjective effects of the dissociative experience into simple and easy
        to understand descriptions with accompanying image replications. This is done without resorting to metaphor,
        analogy, or personal trip reports. </p>

        <p> These descriptions are not specific to any particular substance but are applicable to the effects 
        which commonly occur in various forms under the influence of almost any dissociative compound. This
        includes, but is not limited to, both classical and research chemical dissociatives, such as: </p>

        <p> <i> Ketamine, MXE, PCP, DXM, DCK, 3-MeO-PCP, O-PCE, 3-HO-PCE, 3-HO-PCP, 3-MeO-PCE, 4-MeO-PCP, PCE, 
        Diphenidine, Ephenidine, Methoxphenidine </i> </p>

        <p> Individual effects are also summarized with a prominent link to their full article. </p>
      </div>
    </div>
    <hr>
    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Disconnective Effects
        <img 
          style="opacity: 0.8;"
          class="fa actionIcon"
          src="/icons/disconnective.svg">
      </h3>

      <p class="actionDescription"> 
        <b> Disconnective effects </b> are any subjective effect which feels as if it detaches or disconnects one from the external environment, 
        their senses, and their consciousness. <br> <br>

        These effects are typically associated with dissociative hallucinogens and likely
        occur due to the way in which these compounds function as NMDA receptor antagonists.
        This means they bind to the receptor, but do not activate it and block other
        neurotransmitters from doing so. The result is a dose-dependent decrease in the 
        passing of electrical signals across the brain and an overall disconnection of neurons,
        which leads to states of disconnection between conscious parts of the brain and its
        sensory organs. 
      </p>


      <long-summary 
        v-for="(effect, i) in getEffectsInSpecificOrder('physical disconnection', 'cognitive disconnection', 'visual disconnection', 
                                                        'detachment plateaus')"
        :index="i"
        :effect="effect"
        :key="effect._id" />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Miscellaneous Sensory Effects
        <fa 
          :icon="['far', 'cogs']"
          class="fa actionIcon" />
      </h3>

      <p class="actionDescription"> 
        In this context, <b> miscellaneous sensory effects </b> are any subjective experience which alters a person's visual, tactile, or 
        gustatory senses.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('dissociative', 'sensory')
        .filter((effect) => (effect.tags.indexOf('disconnective') === -1))"
        :index="i"
        :effect="effect"
        :key="effect._id" />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Cognitive Effects
        <fa 
          :icon="['far', 'user']"
          class="fa actionIcon" />
      </h3>

      <p class="actionDescription"> 
        <b> Cognitive effects </b> are any subjective experience which directly alter or introduce new content to an element of a person's cognition.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('dissociative', 'cognitive')"
        :index="i"
        :effect="effect"
        :key="effect._id" />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Physical Effects
        <fa 
          :icon="['far', 'heart-rate']"
          class="fa actionIcon" />
      </h3>

      <p class="actionDescription"> 
        <b> Physical effects </b> are any subjective experience which directly affects an aspect of a person's physical body. 
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('dissociative', 'physical').filter((effect) => !effect.tags.includes('uncomfortable'))"
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
  name: 'Dissociatives',
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
    },
    getEffectsInSpecificOrder(...names) {
      let effects = [];
      names.forEach((name) => {
        let foundEffect = this.effects.find((effect) => effect.name.toLowerCase() === name.toLowerCase());
        if (foundEffect) effects.push(foundEffect);
        });
      return effects;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>