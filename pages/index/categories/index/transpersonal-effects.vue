<template>
  <div class="pageContent">
    <h1>
      Transpersonal Effects
      <fa
        :icon="['far', 'infinity']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Transpersonal effects</b> are defined as any subjective effect that feels as if it alters a person's cognition in a manner that relates to their place in the universe, the inner workings of reality or consciousness, and/or the context of their existence. The highest manifestations of these effects fall under what are commonly known as "peak", "transcendent" or "transformative" experiences.
    </p>

    <p>
      These effects are typically associated with high dose <nuxt-link to="/effects/psychedelic-intensity-scale">
        psychedelic
      </nuxt-link> or <nuxt-link to="/effects/dissociative-intensity-scale">
        dissociative
      </nuxt-link> experiences. They can occur regardless of the person's spiritual or religious beliefs and often have a distinct and lasting impact on the user's perspective of the world around them. During the experience of a substance-induced transpersonal state, the information conveyed is often felt to be a real and objective truth. However, the person will often come to disagree with these supposed "epiphanies" once the effects of the substance have worn off.
    </p>

    <p>
      It should be noted that these mind-states are the least reproducible of all effects within the <nuxt-link to="/effects/">
        subjective effect index.
      </nuxt-link> Simply taking more of a given substance does not necessarily increase the chances of having these states occur. Instead, they seem to rely more on contextual factors, such as the person's set and setting.
    </p>
    
    <p>
      This page lists the various transpersonal effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['transpersonal state']"
    />
  </div>
</template>

<script>
import EffectList from '@/components/categories/EffectList';

export default {
  components: {
    EffectList
  },
  scrollToTop: true,
  head() {
    return {
      title: "Transpersonal Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>