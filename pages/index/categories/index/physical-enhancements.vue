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
      <b>Physical enhancements</b> are defined as any subjective effect that increases or intensifies a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical enhancements that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['physical', 'enhancement']"
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