<template>
  <div class="pageContent">
    <h1>
      Cerebrovascular Effects
      <fa
        :icon="['far', 'brain']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cerebrovascular effects</b> are defined as any uncomfortable physical effect which relates to the brain and its blood vessels.
    </p>

    <p>
      This page lists the various cerebrovascular effects which can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['cerebrovascular']"
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
      title: "Cerebrovascular Effectss"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>