<template>
  <div class="pageContent">
    <h1>
      Hallucinatory States
      <Icon
        filename="dragon.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Hallucinatory states</b> are defined as any subjective effect which changes the perception or appearance of pre-existing visual data by adding entirely new content in a manner which is similar to that of dreams.
    </p>

    <p>
      This page lists the various hallucinatory states which can occur under the influence of certain psychoactive compounds.
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
      return this.$store.state.effects;
    }
  }
};
</script>
