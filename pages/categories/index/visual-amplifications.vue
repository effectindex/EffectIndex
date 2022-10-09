<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Visual Amplifications
      <Icon
        filename="arrow-up.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual amplifications</b> are defined as any subjective effect that increases, enhances, or intensifies a facet of a person's sense of sight.
    </p>

    <p>
      This page lists the various visual amplifications that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['visual', 'amplification']"
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
      title: "Visual Amplifications"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>