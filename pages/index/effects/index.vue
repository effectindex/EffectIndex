<template>
  <div class="pageContent">
    <fa
      :icon="['far', 'sitemap']"
      class="fa categoryIcon" />
    <h1> Subjective Effect Index </h1>
    <description />
    <tabs 
      :tabs="['All', 'Sensory', 'Cognitive', 'Physical']"
      :active-tab="activeTab"
      @selectTab="selectTab">

      <tab 
        slot="All" 
        style="padding-top: 1em;">
        <column>
          <category 
            :icon="['far', 'eye']"
            title="Visual Effects">
            <actions
              :effects="filterEffectsByTag('visual', 'enhancement')"
              title="Enhancements" />
            <actions
              :effects="filterEffectsByTag('visual', 'suppression')"
              title="Suppresions" />
            <actions
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <actions
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
            <actions
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
          </category>

          <category 
            :icon="['far', 'volume-up']"
            title="Auditory Effects">
            <actions :effects="filterEffectsByTag('auditory')" />
          </category>

          <category 
            :icon="['far', 'hand-paper']"
            title="Tactile Effects">
            <actions :effects="filterEffectsByTag('tactile')" />
          </category>

          <category 
            :image="'/icons/disconnective.svg'"
            title="Disconnective Effects">
            <actions :effects="filterEffectsByTag('disconnective')" />
          </category>

          <category 
            :icon="['far', 'utensils']"
            title="Smell &amp; Taste Effects">
            <actions 
              :effects="filterEffectsByTag('gustatory')"
              title="Gustatory Effects" />
            <actions 
              :effects="filterEffectsByTag('olfactory')"
              title="Olfactory Effects" />
          </category>

          <category 
            :icon="['far', 'cogs']"
            title="Multisensory Effects">
            <actions 
              :effects="filterEffectsByTag('multisensory')" />
          </category>
        </column>

        <column>
          <category  
            :icon="['far', 'user']"
            title="Cognitive Effects">
            <actions
              :effects="filterEffectsByTag('cognitive', 'enhancement')"
              title="Enhancements" />
            <actions
              :effects="filterEffectsByTag('cognitive', 'suppression')"
              title="Suppressions" />
            <actions
              :effects="filterEffectsByTag('cognitive', 'novel')"
              title="Novel States" />
            <actions
              :effects="filterEffectsByTag('cognitive', 'psychological state')"
              title="Psychological States" />
            <actions
              :effects="filterEffectsByTag('cognitive', 'transpersonal state')"
              title="Transpersonal States" />          
          </category>
        </column>

        <column>
          <category  
            :icon="['far', 'heart-rate']"
            title="Physical Effects">
            <actions
              :effects="filterEffectsByTag('physical', 'enhancement')"
              title="Enhancements" />
            <actions
              :effects="filterEffectsByTag('physical', 'suppression')"
              title="Suppressions" />
            <actions
              :effects="filterEffectsByTag('physical', 'alteration')"
              title="Alterations" />
            <actions
              :effects="filterEffectsByTag('physical', 'cardiovascular')"
              title="Cardiovascular" />
            <actions
              :effects="filterEffectsByTag('physical', 'bodily')"
              title="Bodily" />
          </category>
        
          <category
            :icon="['far', 'frown']"
            title="Uncomfortable Effects">
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'cardiovascular')"
              title="Cardiovascular" />
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'cerebrovascular')"
              title="Cerebrovascular" />
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'bodily')"
              title="bodily" />
          </category>   
        </column>

      </tab>
      <tab slot="Sensory">
        <blob> 
          <p>
            <b> Sensory effects </b> are subjective effects which directly alter a person's senses. 
            These can include any combination of sight, sound, touch, taste, and smell. 
          </p>
        </blob>
        <column>
          <category 
            :icon="['far', 'eye']"
            title="Visual Effects">
            <actions
              :effects="filterEffectsByTag('visual', 'enhancement')"
              title="Enhancements" />
            <actions
              :effects="filterEffectsByTag('visual', 'suppression')"
              title="Suppressions" />
            <actions
              :effects="filterEffectsByTag('visual', 'distortion')"
              title="Distortions" />
            <actions
              :effects="filterEffectsByTag('visual', 'geometry')"
              title="Geometry" />          
            <actions
              :effects="filterEffectsByTag('visual', 'hallucinatory state')"
              title="Hallucinatory States" />
          </category>
        </column>

        <column>
          <category 
            :icon="['far', 'volume-up']"
            title="Auditory Effects">
            <actions :effects="filterEffectsByTag('auditory')" />
          </category>

          <category 
            :icon="['far', 'hand-paper']"
            title="Tactile Effects">
            <actions :effects="filterEffectsByTag('tactile')" />
          </category>

          <category 
            image="/icons/disconnective.svg"
            title="Disconnective Effects">
            <actions :effects="filterEffectsByTag('disconnective')" />
          </category>
        </column>

        <column>
          <category 
            :icon="['far', 'utensils']"
            title="Smell &amp; Taste Effects">
            <actions 
              :effects="filterEffectsByTag('gustatory')"
              title="Gustatory Effects" />
            <actions 
              :effects="filterEffectsByTag('olfactory')"
              title="Olfactory Effects" />
          </category>

          <category 
            :icon="['far', 'cogs']"
            title="Multisensory Effects">
            <actions 
              :effects="filterEffectsByTag('multisensory')" />
          </category>
        </column>

      </tab>

      <tab slot="Cognitive">

        <blob> 
          <p>
            <b> Cognitive effects </b> are subjective effects which directly alter or introduce 
            new content to an element of a person's cognition.
          </p>
        </blob>

        <column>
          <category 
            :icon="['far', 'arrow-up']"
            title="Enhancements">
            <actions
              :effects="filterEffectsByTag('cognitive', 'enhancement')" />
          </category>
          <category  
            :icon="['far', 'arrow-down']"
            title="Suppressions">
            <actions
              :effects="filterEffectsByTag('cognitive', 'suppression')" />
          </category>
        </column>
        <column>
          <category
            :icon="['far', 'lightbulb']" 
            title="Novel States">
            <actions
              :effects="filterEffectsByTag('cognitive', 'novel')" />
          </category>
          <category  
            image="/icons/psychological.svg"
            title="Psychological States">
            <actions
              :effects="filterEffectsByTag('cognitive', 'psychological state')" />
          </category>
        </column>
        <column>
          <category
            :icon="['far', 'infinity']"
            title="Transpersonal States">
            <actions
              :effects="filterEffectsByTag('cognitive', 'transpersonal state')" />
          </category>
        </column>
      </tab>

      <tab slot="Physical">
        <blob> 
          <p>
            <b> Physical effects </b> are subjective effects which directly affect part of a person's
            physical body.
          </p>
        </blob>
        <column>
          <category  
            :icon="['far', 'heart-rate']"
            title="Physical Effects">
            <actions
              :effects="filterEffectsByTag('physical', 'enhancement')"
              title="Enhancements" />
            <actions
              :effects="filterEffectsByTag('physical', 'suppression')"
              title="Suppressions" />
            <actions
              :effects="filterEffectsByTag('physical', 'alteration')"
              title="Alterations" />
            <actions
              :effects="filterEffectsByTag('physical', 'cardiovascular')"
              title="Cardiovascular" />
            <actions
              :effects="filterEffectsByTag('physical', 'bodily')"
              title="Bodily" />
          </category>
        </column>

        <column>
          <category
            :icon="['far', 'frown']"
            title="Uncomfortable Effects">
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'cardiovascular')"
              title="Cardiovascular" />
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'cerebrovascular')"
              title="Cerebrovascular" />
            <actions
              :effects="filterEffectsByTag('uncomfortable', 'bodily')"
              title="bodily" />
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
import Actions from "@/components/effects/index/Actions";
import Description from "@/components/effects/index/Description";
import Blob from "@/components/effects/index/Blob";

export default {
  components: {
    Tabs,
    Tab,
    Category,
    Actions,
    Column,
    Description,
    Blob
  },
  data() {
    return {
      activeTab: this.$route.query.type
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    },
  },
  watchQuery: ['type'],
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    },
    selectTab(name) {
      this.activeTab = name;
    }
  },
  async fetch ({ store }) {
    await store.dispatch("getEffects");
  },
};
</script>