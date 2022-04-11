<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Transpersonal States
      <Icon
        filename="infinity.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Transpersonal states</b> are defined as any subjective state that feels as if it alters a person's cognition in a manner that relates to their place in the universe, the inner workings of reality or consciousness, and/or the context of their existence. The highest manifestations of these effects fall under what are commonly known as "peak", "transcendent", "mystical", or "transformative" experiences.
    </p>

    <p>
      These effects are typically associated with high dose <nuxt-link to="/effects/psychedelic-intensity-scale">
        psychedelic
      </nuxt-link> or <nuxt-link to="/effects/dissociative-intensity-scale">
        dissociative
      </nuxt-link> experiences. They can occur regardless of the person's spiritual or religious beliefs and often have a distinct and lasting impact on the user's perspective of the world around them. During the experience of a substance-induced transpersonal state, the information conveyed is often felt to be a real and objective truth. However, the person will sometimes come to disagree with these supposed "epiphanies" once the effects of the substance have worn off.
    </p>

    <p>
      The majority of effects listed within this category are largely relevant to the qualitative questions included within the <ext-link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3539773/#S2title">
        Mystical Experiences Questionare,
      </ext-link> a well established series of 30 standardized questions that has been developed as a scientific criteria for measuring the presence and intensity of hallucinogen induced mystical experiences. 
    </p>

    <p>
      It should also be noted that these mind-states are the least reproducible of all effects within the <nuxt-link to="/effects/">
        Subjective Effect Index.
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
import ExtLink from "@/components/ExtLink";
import Icon from '@/components/Icon';

export default {
  components: {
    EffectList,
    ExtLink,
    Icon
  },
  scrollToTop: true,
  head() {
    return {
      title: "Transpersonal States"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>