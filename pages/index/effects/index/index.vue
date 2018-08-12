<template>
  <div>
    <description />
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
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
            <action
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <action
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
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
            <action 
              :effects="filterEffectsByTag('olfactory')"
              title="Olfactory Effects" />
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
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
            <action
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <action
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
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
            <action 
              :effects="filterEffectsByTag('olfactory')"
              title="Olfactory Effects" />
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

      <tab slot="Physical">
        <column>
          <category  
            :icon="'child'"
            title="Physical Effects" /> 
        </column>      
      </tab>

      <tab slot="Psychedelic">
        <column>
          <category
            title="Psychedelic Effects">
            <action
              :effects="filterEffectsByTag('psychedelic')" />
          </category>
        </column>
      </tab>

      <tab slot="Dissociative">
        <column>
          <category
            title="Dissociative Effects">
            <action
              :effects="filterEffectsByTag('dissociative')" />
          </category>
        </column>
      </tab>

      <tab slot="Deliriant">
        <column>
          <category
            title="Deliriant Effects">
            <action
              :effects="filterEffectsByTag('deliriant')" />
          </category>
        </column>
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
import Description from "@/components/effects/index/Description";

export default {
  components: {
    Tabs,
    Tab,
    Category,
    Action,
    Column,
    Description
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