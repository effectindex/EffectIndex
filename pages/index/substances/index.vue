<template>
  <div class="pageContent substanceArticles">
    <fa
      :icon="['far', 'flask']"
      class="fa categoryIcon" />
    <h1> Substance Summaries </h1>

    <p>The following articles break down the specific subjective effects of hallucinogens
    into simple and easy to understand descriptions with accompanying image replications.
    This is done without relying on metaphor, analogy or personal trip reports.</p>

    <p>The descriptions include comprehensive intensity scales which are applied to both
    hallucinogenic substance classes and specific compounds. These intensity scales describe
    the various subjective changes that can occur at specific ranges as the dosage is increased.</p>

    <p>Alongside of these, we have also included more general and summarised descriptions of the
    various effects which commonly occur under the influence of the three main classes of
    hallucinogen: psychedelics, dissociatives, and deliriants. However, please keep in mind that
    although the effect descriptions within these summaries are significantly shortened, their
    full-length articles are linked above each effect.</p>
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
  head() {
    return {
      title: "Summaries"
    };
  },
  scrollToTop: true,
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  },
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    },
    getEffectsInSpecificOrder(...names) {
      let effects = [];
      names.forEach((name) => {
        let foundEffect = this.effects.find((effect) => effect.name.toLowerCase() === name.toLowerCase());
        if (foundEffect) effects.push(foundEffect);
        });
      return effects;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>


<style scoped>

  h4 {
    letter-spacing: 2px;
    color: #444;
    margin: 0.25em 0;
    font-size: 13pt;
    font-family: 'Titillium Web';
  }

  .summaryColumns {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .categoriesContainer {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 1em;
  }

  .summaryContentsTitle {
    margin: 1em 0 0.25em 0;
    color: #333;
    font-size: 14pt;
    letter-spacing: 0px;
    text-transform: none;
  }

  .categoriesFullLink {
    font-size: 12pt;
    color: #666;
    font-style: italic;
    font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .effectList {
    color: #AAA;
    padding-left: 1em;
  }

  @media(max-width: 1100px) {
    .columns {
      display: block;
    }
  }





</style>
