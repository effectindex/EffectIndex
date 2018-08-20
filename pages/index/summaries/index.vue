<template>
  <div class="pageContent substanceArticles"> 
    <h1> Effect Summaries </h1>

    <p> The following articles break down the general subjective effects of hallucinogens 
    into simple and easy to understand descriptions with accompanying image replications. This 
    is done without relying on metaphor, analogy or personal trip reports. </p>

    <p> The descriptions are not specific to any particular substances but are 
    applicable to the effects which commonly occur under the influence 
    of the three main classes of hallucinogen: psychedelics, deliriants, and dissociatives. </p>

    <p> Each article begins with descriptions of the simpler effects and progressively work their
    way up towards effects of greater complexity. These descriptions are shortened summaries,
    and their full-length articles are clearly linked. </p>

    <hr>

    <category 
      title="Psychedelics"
      image="/icons/psychedelic.svg">

      <panel
        title="Visual Effects of Psychedelics"
        link="/summaries/psychedelics/visual">
        <h4 class="summaryContentsTitle"> Contents </h4>
        <ul class="effectList">
          <li 
            v-for="effect in filterManyEffects([['psychedelic', 'visual', 'enhancement'], 
                                                ['psychedelic', 'visual', 'distortion'],
                                                ['psychedelic', 'visual', 'geometry'],
                                                ['psychedelic', 'visual', 'hallucinatory state']])"
            :key="effect._id"> 
            <nuxt-link 
              :to="`/summaries/psychedelics/visual?e=${effect.url}`">
              {{ effect.name }}
            </nuxt-link>
          </li>
        </ul>
      </panel>

      <panel
        title="Cognitive Effects of Psychedelics"
        link="/summaries/psychedelics/cognitive">
        <h4 class="summaryContentsTitle"> Contents </h4>
        <ul class="effectList">
          <li 
            v-for="effect in filterManyEffects([['psychedelic', 'cognitive', 'enhancement'], 
                                                ['psychedelic', 'cognitive', 'suppression'],
                                                ['psychedelic', 'cognitive', 'novel state'],
                                                ['psychedelic', 'cognitive', 'psychological state'],
                                                ['psychedelic', 'cognitive', 'transpersonal state']])"
            :key="effect._id"> 
            <nuxt-link 
              :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
              {{ effect.name }}
            </nuxt-link>
          </li>
        </ul>
      </panel>      

      <panel
        title="Miscellaneous Effects of Psychedelics"
        link="/summaries/psychedelics/miscellaneous">
        <h4 class="summaryContentsTitle"> Contents </h4>
        <ul class="effectList">
          <li 
            v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous')"
            :key="effect._id"> {{ effect.name }} </li>          

        </ul>

      </panel>
    </category>

    <div class="categoriesContainer">
      <category
        title="Dissociatives">
        <panel
          title="Effects of Dissociatives"
          link="/summaries/dissociatives/">
          <h4 class="summaryContentsTitle"> Contents </h4>
          <ul class="effectList">
            <li 
              v-for="effect in filterManyEffects([['dissociative']])"
              :key="effect._id"> 
              <nuxt-link 
                :to="`/summaries/dissociatives?e=${effect.url}`">
                {{ effect.name }}
              </nuxt-link>
            </li>
          </ul>
        </panel>
      </category>

      <category
        title="Deliriants">
        <panel
          title="Effects of Deliriants"
          link="/summaries/deliriants/">
          <h4 class="summaryContentsTitle"> Contents </h4>
          <ul class="effectList">
            <li 
              v-for="effect in filterManyEffects([['deliriant']])"
              :key="effect._id"> 
              <nuxt-link 
                :to="`/summaries/deliriants?e=${effect.url}`">
                {{ effect.name }}
              </nuxt-link>
            </li>
          </ul>
        </panel>
      </category>
    </div>

  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Category from '@/components/Category';

export default {
  components: {
    Panel,
    Category
  },
  scrollToTop: true,
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  },
  methods: {
    filterManyEffects(tagArrs) {
      if (!Array.isArray(tagArrs)) return;
      let effects = [];
      tagArrs.forEach((tagArr) => 
        effects = effects.concat(this.filterEffectsByTag(...tagArr)));
      return effects;
    },
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>


<style scoped>

  .categoriesContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .categoriesContainer >>> .categoryContainer:not(:last-child) {
    margin-right: 1em;
  }
  
  .summaryContentsTitle {
    margin: 1em 0 0.25em 0;
    color: #333;
    font-size: 14pt;
    text-transform: uppercase;
    letter-spacing: 1px; 
  }

  @media(max-width: 700px) {
    .categoriesContainer {
      display: block;
    }

    .categoriesContainer >>> .categoryContainer:not(:last-child) {
      margin-right: 0em;
    }

    .categoriesContainer >>> .categoryContainer {
      margin-right: 0;
    }
  
  }

  .psychedelicsContainer {
    padding: 1em 0;
  }

  .effectList {
    padding: 0;
    list-style: none;
    color: #AAA;
  }


  .psychedelicsContainer ul {
    list-style: none;
    padding: 0;
  }

  
</style>