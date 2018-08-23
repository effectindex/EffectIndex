<template>
  <div class="pageContent substanceArticles"> 
    <fa 
      :icon="['far', 'flask']"
      class="fa categoryIcon" />
    <h1> Substance Summaries </h1>

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
    <div class="columns">
      <div class="categoriesContainer">
        <category 
          :icon="['far', 'eye']"
          link="/summaries/psychedelics/visual"
          title="Psychedelics (Visual)">

          <panel
            title="Visual Effects of Psychedelics">
            <p class="categoriesFullLink"> 
              <nuxt-link to="/summaries/psychedelics/visual"> Read the full article </nuxt-link>
              detailing the visual effects of psychedelic substances.
            </p>

            <h4> Enhancements </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'enhancement')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Distortions </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'distortion')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Geometry </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'geometry')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Hallucinatory States </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'visual', 'hallucinatory state')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/visual?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

          </panel>
        </category>

        <category 
          :icon="['far', 'user']"
          title="Psychedelics (Cognitive)"
          link="/summaries/psychedelics/cognitive">

          <panel
            title="Cognitive Effects of Psychedelics">
            <p class="categoriesFullLink"> 
              <nuxt-link to="/summaries/psychedelics/cognitive"> Read the full article </nuxt-link>
              detailing the cognitive effects of psychedelic substances.
            </p>

            <h4> Enhancements </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'enhancement')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            
            <h4> Suppressions </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'suppression')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            
            <h4> Novel States </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'novel')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            
            <h4> Psychological States </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'psychological state')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            
            <h4> Transpersonal States </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'cognitive', 'transpersonal state')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/cognitive?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>
            
                                
          </panel>      
        </category>

        <category 
          :icon="['far', 'cogs']"
          title="Psychedelics (Miscellaneous)"
          link="/summaries/psychedelics/miscellaneous">
          <panel
            title="Miscellaneous Effects of Psychedelics">
            <p class="categoriesFullLink"> 
              <nuxt-link to="/summaries/psychedelics/miscellaneous"> Read the full article </nuxt-link>
              detailing the miscellaneous effects of psychedelic substances.
            </p>

            <h4> Auditory Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'auditory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Tactile Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'tactile')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Multisensory Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'multisensory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'physical')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>


            <h4> Uncomfortable Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('psychedelic', 'miscellaneous', 'uncomfortable')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/psychedelics/miscellaneous?e=${effect.url}`">
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
          image="/icons/disconnective.svg"
          link="/summaries/dissociatives/">
          <panel
            title="Effects of Dissociatives"
            link="/summaries/dissociatives/">
            <p class="categoriesFullLink"> 
              <nuxt-link to="/summaries/dissociatives/"> Read the full article </nuxt-link>
              detailing the effects of dissociative substances.
            </p>

            <h4> Disconnective Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in getEffectsInSpecificOrder('physical disconnection', 'cognitive disconnection', 'visual disconnection', 
                                                           'detachment plateaus')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Miscellaneous Sensory Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('dissociative', 'sensory')
                .filter((effect) => (effect.tags.indexOf('disconnective') === -1))"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>


            <h4> Cognitive Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('dissociative', 'cognitive')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('dissociative', 'physical')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
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
          image="/icons/deliriant.svg"
          link="/summaries/deliriants/">
          <panel
            title="Effects of Deliriants"
            link="/summaries/deliriants/">
            <p class="categoriesFullLink"> 
              <nuxt-link to="/summaries/deliriants/"> Read the full article </nuxt-link>
              detailing the effects of deliriant substances.
            </p>

            <h4> Visual Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'visual')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Auditory Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'auditory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Tactile Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'tactile')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Taste &amp; Smell Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'gustatory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'olfactory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Multisensory Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'multisensory')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Cognitive Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'cognitive')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Physical Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'physical')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
                  {{ effect.name }}
                </nuxt-link>
              </li>
            </ul>

            <h4> Uncomfortable Effects </h4>
            <ul class="effectList">
              <li 
                v-for="effect in filterEffectsByTag('deliriant', 'uncomfortable')"
                :key="effect._id"> 
                <nuxt-link 
                  :to="`/summaries/dissociatives?e=${effect.url}`">
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

  .columns {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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

  @media(max-width: 1000px) {
    .columns {
      display: block;
    }
  }




  
</style>