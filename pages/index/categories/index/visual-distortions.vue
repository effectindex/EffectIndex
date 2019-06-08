<template>
  <div class="pageContent">
    <h1>
      Visual Distortions
      <fa
        :icon="['far', 'exchange']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual distortions</b> are defined as any subjective effect which alters and changes the perception or appearance of pre-existing visual data without adding any entirely new content.
    </p>

    <p>
      This page lists the various visual distortions which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['visual', 'distortion']"
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
      title: "Visual Distortions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>