<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Uncomfortable Bodily Effects
      <Icon
        filename="child.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Uncomfortable bodily effects</b> are defined as any uncomfortable physical effect that relates to the overall body and cannot be categorized as <nuxt-link to="/categories/cardiovascular">
        cardiovascular
      </nuxt-link> or <nuxt-link to="/categories/cerebrovascular">
        cerebrovascular.
      </nuxt-link>
    </p>

    <p>
      This page lists the various uncomfortable bodily effects that can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['uncomfortable', 'bodily']"
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
      title: "Uncomfortable Bodily Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>