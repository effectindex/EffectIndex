<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Hallucinatory States
      <Icon
        filename="dragon.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Hallucinatory states</b> are defined as any subjective effect that changes the perception or appearance of pre-existing sensory data by adding entirely new content in a manner similar to that of dreams.
    </p>

    <p>
      This page lists the various hallucinatory states that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['hallucinatory state']"
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
      title: "Hallucinatory States"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>
