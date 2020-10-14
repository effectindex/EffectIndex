<template>
  <div class="pageContent">
    <h1>
      Smell and Taste effects
      <Icon
        filename="utensils.svg"
        class="categoryIcon"
      /> 
    </h1>


    <p>
      <b>Smell and taste effects</b> are defined as any subjective effect that directly alters either a person's sense of smell or taste.
    </p>

    <p>
      This page lists the various smell and taste effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>
    
    <EffectList
      :effects="effects"
      :tags="['smell and taste']"
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
      title: "Smell and Taste Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>