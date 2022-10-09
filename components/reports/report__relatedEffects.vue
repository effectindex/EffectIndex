<template>
  <div class="reportRelatedEffects"> 
    <div class="header">
      <Icon
        filename="sitemap.svg"
        style="height: 1em; width: 1.2em; margin-right: 10px;"
      /> 
      <h1 class="title">
        Related Effects
      </h1>
    </div>
    <div class="categories">
      <p class="description">
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
        background="#EEE"
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

<style>
  .reportRelatedEffects {
    border: 1px solid #CCC;
    background-color: #FBFBFB;
  }

  .reportRelatedEffects .header {
    background-color: #eeeeee;
    padding: 5px 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .reportRelatedEffects .title {
    margin: 0;
    font-size: 21px;
  }

  .reportRelatedEffects .description {
    opacity: 0.85;
    margin-bottom: 1em;
  }

  .reportRelatedEffects .categories {
    padding: 5px 1em;
  }

.reportRelatedEffects .category {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.reportRelatedEffects .titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 150px;
}

@media (max-width: 650px) {
  .reportRelatedEffects .category {
    flex-direction: column;
    margin-top: 15px;
    align-items: flex-start;
    padding-bottom: 10px;
  }

  .reportRelatedEffects .category:not(:last-child) {
    border-bottom: 1px solid #D8D8D8;
  }

  .reportRelatedEffects .titleContainer {
    margin-bottom: 10px;
    width: 100%;
  }
}

.reportRelatedEffects .titleContainer h2 {
  margin-left: 10px;
  font-size: 18px;
  font-weight: normal;
}

.reportRelatedEffects .effectList {
  list-style: none;
  display: flex;
  padding-left: 0;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.reportRelatedEffects .effect {
  display: inline-block;
  color: white;
  background-color: #2e2e2e;
  text-decoration: none;
  margin: 5px 5px 5px 0;

  padding: 6px 12px;
  cursor: pointer;
  opacity: 0.85;
  transition: background-color 0.5s;
  text-align: center;
  border-radius: 5px;
}

.reportRelatedEffects .effect:hover {
    background-color: #444;
}
</style>