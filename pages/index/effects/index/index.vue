<template>
  <div>

    <p>The <strong>Subjective Effect Index</strong> is a set of articles designed to serve as a comprehensive catalogue and reference for the range of subjective effects that may occur under the influence of psychoactive substances and other psychonautic techniques.</p>
    <p>The effects listed here are accompanied by detailed descriptions of the subjective experience of them. They are written in a consistent, formal writing style that seeks to avoid the use of flowery metaphors or analogy, instead striving to use simple and accessible language. This is done in the hope that they will eventually serve as a universal terminology set that enables people to better communicate and share experiences that are, by nature, difficult to convey.</p>
    <p>The Index is separated into over 230 effects which are organised into categories based on the senses they affect and their behavior. Many of these are further broken down into leveling systems, subcomponents, and style variations that may occur across different substances. Detailed image, video, and audio <a href="/replications"> replications </a> have been included wherever possible to supplement text-based descriptions.</p>
    <p>The content within this Index is based on the collective experiences of our contributors, scientific literature, and individual case reports.</p>

    <tabs :tabs="['All', 'Sensory', 'Cognitive', 'Physical', 'Psychedelic', 'Dissociative', 'Deliriant']">

      <tab slot="All">
        <column>
          <category 
            :icon="'eye'"
            title="Visual Effects">
            <action
              :effects="filterEffectsByTag('visual', 'enhancement')"
              title="Enhancements" />
            <action
              :effects="filterEffectsByTag('visual', 'suppression')"
              title="Suppresions" />
            <action
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <action
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
            <action
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
          </category>

          <category 
            :icon="'volume-up'"
            title="Auditory Effects">
            <action :effects="filterEffectsByTag('auditory')" />
          </category>

          <category 
            :icon="'hand-paper-o'"
            title="Tactile Effects">
            <action :effects="filterEffectsByTag('tactile')" />
          </category>

          <category 
            :icon="'chain-broken'"
            title="Disconnective Effects">
            <action :effects="filterEffectsByTag('disconnective')" />
          </category>

          <category 
            :icon="'cutlery'"
            title="Smell &amp; Taste Effects">
            <action 
              :effects="filterEffectsByTag('gustatory')"
              title="Gustatory Effects" />
          </category>

          <category 
            :icon="'cogs'"
            title="Multisensory Effects">
            <action 
              :effects="filterEffectsByTag('multisensory')" />
          </category>
        </column>

        <column>
          <category  
            :icon="'user'"
            title="Cognitive Effects">
            <action
              :effects="filterEffectsByTag('cognitive', 'enhancement')"
              title="Enhancements" />
            <action
              :effects="filterEffectsByTag('cognitive', 'suppression')"
              title="Suppresions" />
            <action
              :effects="filterEffectsByTag('cognitive', 'novel')"
              title="Novel States" />
            <action
              :effects="filterEffectsByTag('cognitive', 'psychological state')"
              title="Psychological States" />
            <action
              :effects="filterEffectsByTag('cognitive', 'transpersonal state')"
              title="Transpersonal States" />          
          </category>
        </column>

        <column>
          <category 
            :icon="'child'"
            title="Physical Effects" />        
        </column>

      </tab>
      <tab slot="Sensory">

        <column>
          <category 
            :icon="'eye'"
            title="Visual Effects">
            <action
              :effects="filterEffectsByTag('visual', 'enhancement')"
              title="Enhancements" />
            <action
              :effects="filterEffectsByTag('visual', 'suppression')"
              title="Suppresions" />
            <action
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <action
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
            <action
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
          </category>
        </column>

        <column>
          <category 
            :icon="'volume-up'"
            title="Auditory Effects">
            <action :effects="filterEffectsByTag('auditory')" />
          </category>

          <category 
            :icon="'hand-paper-o'"
            title="Tactile Effects">
            <action :effects="filterEffectsByTag('tactile')" />
          </category>

          <category 
            :icon="'chain-broken'"
            title="Disconnective Effects">
            <action :effects="filterEffectsByTag('disconnective')" />
          </category>
        </column>

        <column>
          <category 
            :icon="'cutlery'"
            title="Smell &amp; Taste Effects">
            <action 
              :effects="filterEffectsByTag('gustatory')"
              title="Gustatory Effects" />
          </category>

          <category 
            :icon="'cogs'"
            title="Multisensory Effects">
            <action 
              :effects="filterEffectsByTag('multisensory')" />
          </category>
        </column>

      </tab>
      <tab slot="Cognitive">
        <column>
          <category  
            :icon="'user'"
            title="Cognitive Effects">
            <action
              :effects="filterEffectsByTag('cognitive', 'enhancement')"
              title="Enhancements" />
            <action
              :effects="filterEffectsByTag('cognitive', 'suppression')"
              title="Suppresions" />
            <action
              :effects="filterEffectsByTag('cognitive', 'novel')"
              title="Novel States" />
            <action
              :effects="filterEffectsByTag('cognitive', 'psychological state')"
              title="Psychological States" />
            <action
              :effects="filterEffectsByTag('cognitive', 'transpersonal state')"
              title="Transpersonal States" />          
          </category>
        </column>
      </tab>

      <tab slot="Psychedelic">
        <category
          title="Psychedelic Effects">
          <action
            :effects="filterEffectsByTag('psychedelic')" />
        </category>
      </tab>

      <tab slot="Dissociative">
        <category
          title="Dissociative Effects">
          <action
            :effects="filterEffectsByTag('dissociative')" />
        </category>
      </tab>

      <tab slot="Deliriant">
        <category
          title="Deliriant Effects">
          <action
            :effects="filterEffectsByTag('deliriant')" />
        </category>
      </tab>

    </tabs>
  </div>
</template>

<script>
import Tabs from "@/components/effects/index/Tabs";
import Tab from "@/components/effects/index/Tab";
import Category from "@/components/effects/index/Category";
import Column from "@/components/effects/index/Column";
import Action from "@/components/effects/index/Action";

export default {
  components: {
    Tabs,
    Tab,
    Category,
    Action,
    Column
  },
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
    }
  },
  async fetch ({ store }) {
    await store.dispatch("getEffects");
  }
};
</script>