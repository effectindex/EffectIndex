<template>
  <div class="pageContent">
    <h1>
      Cardiovascular Effects
      <fa
        :icon="['far', 'frown']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cardiovascular effects</b> are defined as any uncomfortable physical effect that relates to the heart and blood vessels.
    </p>

    <p>
      This page lists the various cardiovascular effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['cardiovascular']"
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
      title: "Cardiovascular Effectss"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>