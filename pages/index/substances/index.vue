<template>
  <div class="pageContent substanceArticles">
    <Icon
      filename="flask.svg"
      class="categoryIcon"
    />
    <h1> Substance Index </h1>

    <p>
      The following articles break down the specific subjective effects of hallucinogens
      into simple and easy to understand descriptions with accompanying image replications.
      This is done without relying on metaphor, analogy or personal trip reports.
    </p>

    <p>
      The descriptions include comprehensive intensity scales which are applied to both
      hallucinogenic substance classes and specific compounds. These intensity scales describe
      the various subjective changes that can occur at specific ranges as the dosage is increased.
    </p>

    <p>
      Alongside of these, we have also included more general and summarised descriptions of the
      various effects which commonly occur under the influence of the three main classes of
      hallucinogen: psychedelics, dissociatives, and deliriants. However, please keep in mind that
      although the effect descriptions within these summaries are significantly shortened, their
      full-length articles are linked above each effect.
    </p>

    <hr>
    <div class="summaryColumns">
      <div class="categoriesContainer">
        <category
          icon="chart-line.svg"
          title="Intensity Scales"
        >
          <panel
            title="Intensity Scales"
          >
            <h4>Substance Classes</h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('intensity scale')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/effects/${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            <h4>Specific Substances</h4>
            <ul class="effectList">
              <li
                v-for="substance in substances"
                :key="substance._id"
              >
                <nuxt-link
                  :to="`/substances/${substance.url}`"
                >
                  {{ substance.name }}
                </nuxt-link>
              </li>
              <li>More coming soon...</li>
            </ul>
          </panel>
        </category>

        <category
          icon="eye.svg"
          link="/summaries/psychedelics/visual"
          title="Psychedelics (Visual)"
        >
          <panel
            title="Visual Effects of Psychedelics"
          >
            <p class="categoriesFullLink">
              <nuxt-link to="/summaries/psychedelics/visual">
                Read the full article
              </nuxt-link>
              detailing the visual effects of psychedelic substances.
            </p>

            <h4> Enhancements </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'enhancement')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Distortions </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'distortion')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Geometry </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'geometry')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Hallucinatory States </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'hallucinatory state')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
          </panel>
        </category>

        <category
          icon="user.svg"
          title="Psychedelics (Cognitive)"
          link="/summaries/psychedelics/cognitive"
        >
          <panel
            title="Cognitive Effects of Psychedelics"
          >
            <p class="categoriesFullLink">
              <nuxt-link to="/summaries/psychedelics/cognitive">
                Read the full article
              </nuxt-link>
              detailing the cognitive effects of psychedelic substances.
            </p>

            <h4> Enhancements </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'enhancement')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Suppressions </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'suppression')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Novel States </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'novel')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Psychological States </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'psychological state')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Transpersonal States </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'transpersonal state')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
          </panel>
        </category>

        <category
          icon="cogs.svg"
          title="Psychedelics (Miscellaneous)"
          link="/summaries/psychedelics/miscellaneous"
        >
          <panel
            title="Miscellaneous Effects of Psychedelics"
          >
            <p class="categoriesFullLink">
              <nuxt-link to="/summaries/psychedelics/miscellaneous">
                Read the full article
              </nuxt-link>
              detailing the miscellaneous effects of psychedelic substances.
            </p>

            <h4> Auditory Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'auditory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Tactile Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'tactile')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Multisensory Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'multisensory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'physical')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>


            <h4> Uncomfortable Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'uncomfortable')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
          </panel>
        </category>
      </div>

      <div class="categoriesContainer">
        <category
          title="Dissociatives"
          icon="disconnective.svg"
          link="/summaries/dissociatives/"
        >
          <panel
            title="Effects of Dissociatives"
            link="/summaries/dissociatives/"
          >
            <p class="categoriesFullLink">
              <nuxt-link to="/summaries/dissociatives/">
                Read the full article
              </nuxt-link>
              detailing the effects of dissociative substances.
            </p>

            <h4> Disconnective Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in getEffectsInSpecificOrder('physical disconnection', 'cognitive disconnection', 'visual disconnection',
                                                           'detachment plateaus')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/dissociatives?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Miscellaneous Sensory Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('dissociative', 'sensory')
                  .filter((effect) => (effect.tags.indexOf('disconnective') === -1))"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/dissociatives?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>


            <h4> Cognitive Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('dissociative', 'cognitive')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/dissociatives?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('dissociative', 'physical')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/dissociatives?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
          </panel>
        </category>
      </div>
      <div class="categoriesContainer">
        <category
          title="Deliriants"
          icon="deliriant.svg"
          link="/summaries/deliriants/"
        >
          <panel
            title="Effects of Deliriants"
            link="/summaries/deliriants/"
          >
            <p class="categoriesFullLink">
              <nuxt-link to="/summaries/deliriants/">
                Read the full article
              </nuxt-link>
              detailing the effects of deliriant substances.
            </p>

            <h4> Visual Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'visual')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Auditory Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'auditory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Tactile Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'tactile')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Taste &amp; Smell Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'gustatory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'olfactory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Multisensory Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'multisensory')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Cognitive Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'cognitive')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'physical')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Uncomfortable Effects </h4>
            <ul class="effectList">
              <li
                v-for="effect in filterEffectsByTag('deliriant', 'uncomfortable')"
                :key="effect._id"
              >
                <nuxt-link
                  :to="`/summaries/deliriants?e=${effect.url}`"
                >
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
          </panel>
        </category>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Category from '@/components/Category';
import Icon from '@/components/Icon';

export default {
  components: {
    Panel,
    Category,
    Icon
  },
  head() {
    return {
      title: "Substance Index"
    };
  },
  scrollToTop: true,
  computed: {
    effects() {
      return this.$store.state.effects;
    },
    substances() {
      return this.$store.state.substances;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
    await store.dispatch("getSubstances");
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
