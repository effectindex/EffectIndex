<template>
  <div class="pageContent">
    <h1>
      Tactile Effects
      <Icon
        filename="hand-paper.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Tactile effects</b> are defined as any subjective effect that directly alters a person's sense of touch.
    </p>

    <p>
      This page lists the various tactile effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['tactile']"
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