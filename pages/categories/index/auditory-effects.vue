<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> - 
      Auditory Effects
      <Icon
        filename="volume-up.svg"
        class="categoryIcon"
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
import Icon from '@/components/Icon';

export default {
  components: {
    EffectList,
    Icon
  },
  scrollToTop: true,
  head() {
    return {
      title: "Auditory Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>
