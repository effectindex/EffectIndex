<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Cognitive Suppressions
      <Icon
        filename="arrow-down.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cognitive suppressions</b> are defined as any subjective effect that decreases the intensity of a facet of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive suppressions that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['cognitive', 'suppression']"
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
      title: "Cognitive Suppressions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>