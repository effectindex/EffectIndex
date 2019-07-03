<template>
  <div class="pageContent">
    <h1>
      Physical Suppressions
      <fa
        :icon="['far', 'arrow-down']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical suppressions</b> are defined as any subjective effect which decreases or reduces a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical suppressions which can occur under the influence of certain psychoactive compounds.
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

export default {
  components: {
    EffectList
  },
  scrollToTop: true,
  head() {
    return {
      title: "Physical Suppressions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>