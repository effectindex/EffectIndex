<template>
  <div class="pageContent">
    <h1>
      Uncomfortable Physical Effects
      <fa
        :icon="['far', 'frown']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Uncomfortable physical effects</b> are defined as any substance-induced alteration of a person's physical state that is unpleasant, undesirable, painful, or otherwise a source of distress. In most cases, they indicate a temporary part of a substance's interaction with the body. However, in certain contexts, they can also indicate the need for medical attention or treatment if they become dangerously severe.
    </p>

    <p>
      Those who experiment with or use psychoactive substances, especially hallucinogens, should also be aware that some of the other effects that the substance may produce, such as <nuxt-link to="/effects/anxiety">
        anxiety
      </nuxt-link>, <nuxt-link to="/effects/paranoia">
        paranoia
      </nuxt-link>, <nuxt-link to="/effects/physical-disconnection">
        disconnectivity
      </nuxt-link>, and <nuxt-link to="/effects/delusion">
        delusions
      </nuxt-link>, may lead to a distorted perception of what is actually happening to their body. While this risk can be partially mitigated by taking harm reduction measures, such as having a knowledgeable and trustworthy trip sitter to watch over and provide sober third-party input, it is worth noting that the potentially serious health consequences that may result from these effects can never be completely mitigated. Therefore, it is extremely important that the user understands the risks, does their research, and is aware of any pre-existing medical conditions that could potentially be exacerbated by these effects.
    </p>

    <p>
      This page lists the various uncomfortable physical effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['uncomfortable', 'physical']"
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
      title: "Uncomfortable Physical Effectss"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>