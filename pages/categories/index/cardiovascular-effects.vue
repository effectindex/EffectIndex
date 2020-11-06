<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -
      Cardiovascular Effects
      <Icon
        filename="heart.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cardiovascular effects</b> are defined as any <nuxt-link to="/categories/uncomfortable-physical-effects">
        uncomfortable physical effect
      </nuxt-link> that relates to the heart and blood vessels.
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
import Icon from '@/components/Icon';

export default {
  components: {
    EffectList,
    Icon
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