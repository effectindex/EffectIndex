<template>
  <div class="pageContent">
    <h1>
      Novel Cognitive States
      <fa
        :icon="['far', 'lightbulb']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Novel cognitive states</b> are defined as any cognitive effect which does not merely amplify or suppress familiar states of mind, but rather induces an experience that is qualitatively different from that of ordinary consciousness.
    </p>

    <p>
      Although many <nuxt-link to="/categories/transpersonal-effects">
        transpersonal
      </nuxt-link> and <nuxt-link to="/categories/psychological-effects">
        psychological effects
      </nuxt-link> also technically fit into this definition, they are excluded from this category of effects as they have their own defining qualities which standard novel states do not. 
    </p>
    
    <p>
      This page lists the various novel cognitive states which can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['novel']"
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
      title: "Novel Cognitive States"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>