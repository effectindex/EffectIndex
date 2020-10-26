<template>
  <div class="relatedEffects"> 
    <div class="relatedEffectsHeader">
      <Icon
        filename="sitemap.svg"
        style="height: 1em; width: 1.2em; margin-right: 10px;"
      /> 
      <h1 class="relatedEffectsTitle">
        Related Effects
      </h1>
    </div>
    <div class="relatedEffectsCategories">
      <p class="relatedEffectsDescription">
        This trip report seems to include the following subjective effects:
      </p>
      <related-effects-category
        v-if="sensoryEffects.length > 0"
        :effects="sensoryEffects"
        name="Sensory"
        icon="eye.svg"
      />

      <related-effects-category
        v-if="cognitiveEffects.length > 0"
        :effects="cognitiveEffects"
        name="Cognitive"
        icon="user.svg"
      />

      <related-effects-category
        v-if="physicalEffects.length > 0"
        :effects="physicalEffects"
        name="Physical"
        icon="heart-rate.svg"
      />
    </div>
  </div>
</template>

<script>
import RelatedEffectsCategory from './report__relatedEffectsCategory';
import Icon from '@/components/Icon';

export default {
  components: {
    RelatedEffectsCategory,
    Icon
  },
  props: {
    effects: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sensoryEffects () {
      return this.effects.filter( effect => effect.tags.includes('sensory'));
    },

    physicalEffects () {
      return this.effects.filter( effect => effect.tags.includes('physical'));
    },

    cognitiveEffects () {
      return this.effects.filter( effect => effect.tags.includes('cognitive'));
    }
  }
};
</script>

<style scoped>
  .relatedEffects {
    border: 1px solid #CCC;
    background-color: #FBFBFB;
  }

  .relatedEffectsHeader {
    background-color: #eeeeee;
    padding: 5px 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .relatedEffectsTitle {
    margin: 0;
    font-size: 21px;
  }

  .relatedEffectsDescription {
    opacity: 0.85;
    margin: 0;
    margin-bottom: 1em;
  }

  .relatedEffectsCategories {
    padding: 5px 1em;
  }
</style>