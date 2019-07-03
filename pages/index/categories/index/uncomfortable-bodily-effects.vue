<template>
  <div class="pageContent">
    <h1>
      Uncomfortable Bodily Effects
      <fa
        :icon="['far', 'brain']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Uncomfortable bodily effects</b> are defined as any uncomfortable physical effect which relates to the overall body and cannot be categorized as <nuxt-link to="/categories/cardiovascular">
        cardiovascular
      </nuxt-link> or <nuxt-link to="/categories/cerebrovascular">
        cerebrovascular
      </nuxt-link>.
    </p>

    <p>
      This page lists the various uncomfortable bodily effects which can occur under the influence of certain psychoactive compounds.
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

export default {
  components: {
    EffectList
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