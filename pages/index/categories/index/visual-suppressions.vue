<template>
  <div class="pageContent">
    <h1>
      Visual Suppressions
      <fa
        :icon="['far', 'arrow-down']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual suppressions</b> are defined as any subjective effect that decreases a person's ability to perceive the external environment through their sense of sight.
    </p>

    <p>
      This page lists the various visual suppressions that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['visual', 'suppression']"
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
      title: "Visual Suppressions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>