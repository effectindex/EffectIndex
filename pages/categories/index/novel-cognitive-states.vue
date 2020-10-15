<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Novel Cognitive States
      <Icon
        filename="lightbulb.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Novel cognitive states</b> are defined as any cognitive effect that does not merely amplify or suppress familiar states of mind; rather, it induces an experience that is qualitatively different from that of ordinary consciousness.
    </p>

    <p>
      Although many <nuxt-link to="/categories/transpersonal-effects">
        transpersonal
      </nuxt-link> and <nuxt-link to="/categories/psychological-effects">
        psychological effects
      </nuxt-link> also technically fit into this definition, they are excluded from this category as they have their own defining qualities that standard novel states do not.
    </p>
    
    <p>
      This page lists the various novel cognitive states that can occur under the influence of certain psychoactive compounds.
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
import Icon from '@/components/Icon';

export default {
  components: {
    EffectList,
    Icon
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