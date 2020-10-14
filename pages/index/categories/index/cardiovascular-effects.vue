<template>
  <div class="pageContent">
    <h1>
      Cardiovascular Effects
      <Icon
        filename="frown.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cardiovascular effects</b> are defined as any uncomfortable physical effect which relates to the heart and blood vessels.
    </p>

    <p>
      This page lists the various cardiovascular effects which can occur under the influence of certain psychoactive compounds.
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
    EffectList
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