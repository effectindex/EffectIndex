<template>
  <div class="pageContent">
    <h1>
      Psychological Effects
      <fa
        :icon="['far', 'psychological.svg']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Psychological effects</b> are defined as any cognitive effect that is either established within the psychological literature or arises as a result of the complex interplay between other more simplistic components such as <nuxt-link to="/categories/cognitive-enhancements">
        cognitive enhancements
      </nuxt-link> and <nuxt-link to="/categories/cognitive-suppressions">
        suppressions
      </nuxt-link>.
    </p>

    <p>
      This page lists the various psychological effects which can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['psychological state']"
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
      title: "Psychological Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>