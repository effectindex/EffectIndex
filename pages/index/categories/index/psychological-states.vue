<template>
  <div class="pageContent">
    <h1>
      Psychological States
      <Icon
        filename="psychological.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Psychological states</b> are defined as any cognitive effect that is either established within the psychological literature or arises as a result of the complex interplay between more simplistic components such as <nuxt-link to="/categories/cognitive-enhancements">
        cognitive enhancements
      </nuxt-link> and <nuxt-link to="/categories/cognitive-suppressions">
        suppressions
      </nuxt-link>.
    </p>

    <p>
      This page lists the various psychological effects that can occur under the influence of certain psychoactive compounds.
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
import Icon from '@/components/Icon';

export default {
  components: {
    EffectList,
    Icon
  },
  scrollToTop: true,
  head() {
    return {
      title: "Psychological States"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>