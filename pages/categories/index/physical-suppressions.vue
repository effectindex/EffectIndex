<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Physical Suppressions
      <Icon
        filename="arrow-down.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical suppressions</b> are defined as any subjective effect that decreases or reduces a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical suppressions that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['physical', 'suppression']"
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
      title: "Physical Suppressions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>