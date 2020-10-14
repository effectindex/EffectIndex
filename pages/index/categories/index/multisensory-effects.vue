<template>
  <div class="pageContent">
    <h1>
      Multisensory Effects
      <fa
        :icon="['far', 'cogs']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Multisensory effects</b> are defined as any subjective effect that directly alters two or more senses at a time.
    </p>

    <p>
      It is worth noting that although <nuxt-link to="/categories/hallucinatory-states">
        hallucinatory states
      </nuxt-link> may affect multiple senses, they are typically not categorized as multisensory effects unless they consistently affect multiple senses every time that they occur. For example, while experiences with <nuxt-link to="/effects/autonomous-entity">
        autonomous entities
      </nuxt-link> may sometimes have a <nuxt-link to="/categories/tactile-effects">
        tactile component
      </nuxt-link> to them, more often than not they are primarily a <nuxt-link to="/categories/visual-effects">
        visual experience
      </nuxt-link> and are therefore classified as such. 
    </p>

    <p>
      This page lists the various multisensory effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['multisensory']"
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
      title: "Multisensory Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>