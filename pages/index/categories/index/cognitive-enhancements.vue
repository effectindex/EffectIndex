<template>
  <div class="pageContent">
    <h1>
      Cognitive Enhancements
      <fa
        :icon="['far', 'arrow-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cognitive enhancements</b> are defined as any subjective effect which increases or raises the intensity of a facet of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive enhancements which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['cognitive', 'enhancement']"
    />
  </div>
</template>

<script>
import EffectList from '@/components/effects/index/EffectList';

export default {
  components: {
    EffectList
  },
  head() {
    return {
      title: "Cognitive Enhancements"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>