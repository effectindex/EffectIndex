<template>
  <div class="pageContent">
    <h1>
      Auditory Effects
      <fa
        :icon="['far', 'volume-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Auditory effects</b> are defined as any subjective effect that directly alters a person's sense of hearing.
    </p>

    <p>
      This page lists the various auditory effects that can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <EffectList
      :effects="effects"
      :tags="['auditory']"
    />
  </div>
</template>

<script>
import EffectList from '@/components/categories/EffectList';

export default {
  components: {
    EffectList,
  },
  scrollToTop: true,
  head() {
    return {
      title: "Auditory Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
