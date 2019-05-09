<template>
  <div class="pageContent effectCategories">
    <div>
      <fa
        :icon="['far', 'user']"
        class="fa categoryIcon"
      />
      <h1> Cognitive Effects of Psychedelics </h1>
      <div class="categoryDescription">
        <p> This article breaks down the subjective cognitive effects of the psychedelic experience into simple and easy to understand descriptions with accompanying image replications. This is done without resorting to metaphor, analogy, or personal trip reports. </p>
        <p> These descriptions are not specific to any particular substance but are applicable to the effects which commonly occur in various forms under the influence of almost any psychedelic compound. This includes, but is not limited to, both classical and research chemical psychedelics, such as: </p>
        <p style="font-style: italic;">
          LSD, Psilocybin mushrooms, DMT, Ayahuasca, Mescaline, 5-MeO-MiPT, 2C-B, LSA, AL-LAD, ALD-52, 1P-LSD, 2C-B-Fly, 2C-C, 2C-D, 2C-E, 2C-P, 4-AcO-DMT, 4-HO-MET, 4-HO-MiPT, 5-MeO-DMT, DPT, and DOC.
        </p>
        <p> The article begins with a description of the simpler effects and works its way up towards more complex experiences as it progresses. Individual effects are also summarized with a link to their full article. </p>
      </div>
    </div>
    <hr>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Cognitive Enhancements
        <fa 
          :icon="['far', 'arrow-up']"
          class="fa actionIcon"
        />
      </h3>

      <p class="actionDescription">
        <b> Cognitive enhancements </b> are any subjective effect which increases or raises the intensity of an aspect of a person's cognition.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'cognitive', 'enhancement')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Cognitive Suppressions
        <fa 
          :icon="['far', 'arrow-down']"
          class="fa actionIcon"
        />
      </h3>

      <p class="actionDescription">
        <b> Cognitive suppressions </b> are any subjective effect which decreases or lowers the intensity of an aspect of a person's cognition.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'cognitive', 'suppression')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Novel States
        <fa 
          :icon="['far', 'arrow-up']"
          class="fa actionIcon"
        />
      </h3>

      <p class="actionDescription"> 
        A <b> novel cognitive state </b> is any cognitive effect which does not
        merely amplify or suppress familiar states of mind, but rather induces an experience that is qualitatively
        different from that of ordinary consciousness. <br> <br>
        Although many transpersonal and psychological effects also technically fit into this definition, they are
        excluded from this category of effects as they have their own defining qualities which standard novel states do not. 
      </p>
        
        
      
      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'cognitive', 'novel')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Psychological States
        <fa 
          :icon="['far', 'arrow-up']"
          class="fa actionIcon"
        />
      </h3>

      <p class="actionDescription">
        <b> Psychological effects </b> are any cognitive effect that is either 
        established within the psychological literature or arises as a result of the complex interplay between other 
        more simplistic components such as cognitive enhancements and suppressions.
      </p>

      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'cognitive', 'psychological state')"
        :key="effect._id"
        :index="i"
        :effect="effect"
      />
    </div>

    <div class="effectsContainer">
      <h3 class="titleContainer"> 
        Transpersonal States
        <fa 
          :icon="['far', 'arrow-up']"
          class="fa actionIcon"
        />
      </h3>

      <p class="actionDescription">
        <b> Transpersonal states </b> are any subjective effect which feels as if it alters
        a person's cognition in a manner which relates to or contains information regarding their place in the universe,
        the inner workings of reality or consciousness, and the context of their existence. The fullest manifestation of 
        these effects fall under what are sometimes called "peak", "transcendent" or "transformative" experiences.
      </p>
        
      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'cognitive', 'transpersonal state')"
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
        <nuxt-link to="/summaries/psychedelics/miscellaneous">
          Miscellaneous Psychedelic Effects
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LongSummary from "@/components/effects/LongSummary";

export default {
  components: {
    LongSummary
  },
  head() {
    return {
      title: "Cognitive Psychedelic Effects"
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
