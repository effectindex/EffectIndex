<template>
  <div class="pageContent">
    <h1>
      Visual Effects
      <fa
        :icon="['far', 'eye']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual effects</b> are defined as any subjective effect which directly alters a person's sense of sight.
    </p>

    <p>
      This page lists the various visual effects which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['visual']"
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
      title: "Visual Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
