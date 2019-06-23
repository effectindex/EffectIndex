<template>
  <div class="pageContent">
    <h1>
      Disconnective Effects
      <fa
        :icon="['far', '/icons/disconnective.svg']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Disconnective effects</b> are defined as any subjective effect which feels as if it detaches or disconnects one from the external environment, their senses, and their consciousness.
    </p>

    <p>
      These effects are typically associated with <nuxt-link to="/effects/dissociative-intensity-scale">
        dissociative hallucinogens
      </nuxt-link> and likely occur due to the way in which these compounds function as NMDA receptor antagonists. This means they bind to the receptor, but do not activate it and block other neurotransmitters from doing so. The result is a dose-dependent decrease in the passing of electrical signals across the brain and an overall disconnection of neurons, which leads to states of disconnection between conscious parts of the brain and its sensory organs.
    </p>

    <p>
      This page lists the various disconnective effects which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['disconnective']"
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
      title: "Disconnective Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
