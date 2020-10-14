<template>
  <div class="pageContent">
    <h1>
      Cognitive Suppressions
      <Icon
        filename="down-arrow.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cognitive suppressions</b> are defined as any subjective effect which decreases or lowers the intensity of a facet of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive suppressions which can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['cognitive', 'suppression']"
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
      title: "Cognitive Suppressions"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>