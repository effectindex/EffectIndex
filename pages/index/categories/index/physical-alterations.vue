<template>
  <div class="pageContent">
    <h1>
      Physical Alterations
      <fa
        :icon="['far', 'cogs']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical alterations</b> are defined as any subjective effect which changes a facet of a person's physical body in a manner which does not involve a clearly definable <nuxt-link to="/categories/physical-enhancement">
        enhancement
      </nuxt-link> or <nuxt-link to="/categories/physical-suppressions">
        suppression
      </nuxt-link>.
    </p>

    <p>
      This page lists the various physical alterations which can occur under the influence of certain psychoactive compounds.
    </p>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['physical', 'alteration']"
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
      title: "Physical Alterations"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
