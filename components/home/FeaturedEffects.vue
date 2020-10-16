<template>
  <Panel
    icon="sitemap.svg" 
    title="Featured Effects"
    class="featuredEffects"
  >
    <template v-slot:content>
      <div class="featuredEffectsListContainer">
        <div class="featuredEffectsCategory">
          <h4> Visual Effects </h4>
          <nuxt-link 
            v-for="(effect, index) in visualEffects"
            :key="effect._id"
            :to="`/effects/${effect.url}`"
          >
            {{ effect.name }}{{ (index &lt; (visualEffects.length - 1)) ? ' &sdot; ' : '' }}
          </nuxt-link>
        </div>

        <div class="featuredEffectsCategory">
          <h4> Cognitive Effects </h4>
          <nuxt-link 
            v-for="(effect, index) in cognitiveEffects"
            :key="effect._id"
            :to="`/effects/${effect.url}`"
          >
            {{ effect.name }}{{ (index &lt; (cognitiveEffects.length - 1)) ? ' &sdot; ' : '' }}
          </nuxt-link>
        </div>

        <div class="featuredEffectsCategory">
          <h4> Miscellaneous Effects </h4>
          <nuxt-link 
            v-for="(effect, index) in miscellaneousEffects"
            :key="effect._id"
            :to="`/effects/${effect.url}`"
          >
            {{ effect.name }}{{ (index &lt; (miscellaneousEffects.length - 1)) ? ' &sdot; ' : '' }}
          </nuxt-link>
        </div>
      </div>
    </template>
    <template v-slot:stub>
      For more, see the <nuxt-link to="/effects/">
        Subjective Effect Index.
      </nuxt-link>
    </template>
  </Panel>
</template>

<script>
import Panel from '@/components/home/Panel';

export default {
  components: {
    Panel
  },
  computed: {
    featuredEffects() {
      return this.$store.state.effects.filter((effect) => effect.featured);
    },

    visualEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('visual'));
    },

    cognitiveEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('cognitive'));
    },

    miscellaneousEffects() {
      return this.featuredEffects.filter((effect) => effect.tags.includes('miscellaneous'));
    }



  }
};
</script>

<style scoped>
  .featuredEffectsListContainer {
    font-size: 12pt;
    display: flex;
    flex-direction: column;
  }

  .featuredEffectsCategory {
    border-bottom: 1px solid #DDD;
    margin: 0;
    padding: 12px;
    flex: 1;
  }

  .featuredEffectsCategory:last-child {
    border-bottom: none;
  }

  .featuredEffects h4 {
    font-family: 'Titillium Web';
    text-transform: none;
    font-size: 13pt;
    letter-spacing: 1px;
    line-height: 1em;
    text-transform: uppercase;
    margin-bottom: 0.25em;
    margin-top: 0;
  }
</style>
