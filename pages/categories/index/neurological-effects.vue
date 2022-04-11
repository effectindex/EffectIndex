<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -
      Neurological Effects
      <Icon
        filename="brain.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Neurological effects</b> are defined as any <nuxt-link to="/categories/uncomfortable-physical-effects">
        uncomfortable physical effect
      </nuxt-link> that relates to the brain and its blood vessels.
    </p>

    <p>
      This page lists the various neurological effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['neurological']"
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
      title: "Neurological Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>