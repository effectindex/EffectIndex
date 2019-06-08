<template>
  <div class="pageContent">
    <h1>
      Physical Enhancements
      <fa
        :icon="['far', 'arrow-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical enhancements</b> are defined as any subjective effect which increases or intensifies a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical enhancements which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['physical', 'enhancement']"
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
      title: "Physical Enhancements"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>