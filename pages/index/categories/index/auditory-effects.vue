<template>
  <div class="pageContent">
    <h1>
      Auditory Effects
      <fa
        :icon="['far', 'volume-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Auditory effects</b> are defined as any subjective effect which directly alters a person's sense of hearing.
    </p>

    <p>
      This page lists the various auditory effects which can occur under the influence of certain psychoactive compounds.
    </p>
    <Panels>
      <Panel 
        title="Auditory Effects"
        :icon="['far', 'volume-up']"
      >
        <PanelEffectList
          :effects="effects"
          :tags="['auditory']"
        />
      </Panel>
    </Panels>

    <hr>

    <EffectList
      :effects="effects"
      :tags="['auditory']"
    />
  </div>
</template>

<script>
import EffectList from '@/components/categories/EffectList';
import Panel from '@/components/categories/Panel';
import Panels from '@/components/categories/Panels';
import PanelEffectList from '@/components/categories/PanelEffectList';

export default {
  components: {
    EffectList,
    Panel,
    Panels,
    PanelEffectList
  },
  scrollToTop: true,
  head() {
    return {
      title: "Auditory Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
