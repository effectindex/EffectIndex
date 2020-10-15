<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Visual Enhancements
      <Icon
        filename="arrow-up.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual enhancements</b> are defined as any subjective effect that improves one's ability to perceive the external environment through their sense of sight.
    </p>

    <p>
      This page lists the various visual enhancements that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['visual', 'enhancement']"
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
      title: "Visual Enhancements"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>