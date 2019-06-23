<template>
  <div class="pageContent">
    <h1>
      Tactile Effects
      <fa
        :icon="['far', 'hand-paper']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Tactile effects</b> are defined as any subjective effect which directly alters a person's sense of touch.
    </p>

    <p>
      This page lists the various tactile effects which can occur under the influence of certain psychoactive compounds.
    </p>

    <EffectList
      :effects="effects"
      :tags="['tactile']"
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
      title: "Tactile Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>