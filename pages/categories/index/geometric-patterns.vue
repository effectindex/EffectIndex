<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> - 
      Geometric patterns
      <Icon
        filename="geometry.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Geometric patterns</b> are defined as any subjective effect that introduces complex arrays of shapes, colours, symbols, patterns, geometry, form constants, and fractals to one's field of vision.
    </p>

    <p>
      Within the context of psychedelic substances, effects within this category are often speculated to not simply be another form of hallucination, but instead a result of neurological signals and processes from various regions of the brain bleeding into the visual cortex and being reinterpreted as complex geometric forms.
    </p>

    <p>
      This page lists the various auditory effects that can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <EffectList
      :effects="effects"
      :tags="['geometric']"
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
      title: "Geometric patterns"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
