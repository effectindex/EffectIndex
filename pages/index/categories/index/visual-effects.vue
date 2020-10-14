<template>
  <div class="pageContent">
    <h1>
      Visual Effects
      <fa
        :icon="['far', 'eye']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Visual effects</b>  are defined as any subjective effect that directly alters a person's sense of sight.
    </p>

    <p>
      This page lists the various visual effects that can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <Columns>
      <Column>
        <Panel
          title="Enhancements"
          :icon="['far', 'arrow-up']"
        >
          <PanelEffectList
            :tags="['visual', 'enhancement']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          :icon="['far', 'arrow-down']"
        >
          <PanelEffectList
            :tags="['visual', 'suppression']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Hallucinatory States"
        >
          <PanelEffectList
            :tags="['visual', 'hallucinatory state']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Distortions"
        >
          <PanelEffectList
            :tags="['visual', 'distortion']"
            :effects="effects"
          />
        </Panel>
      </Column>
    </Columns>
  </div>
</template>

<script>
import Panel from '@/components/categories/Panel';
import Column from '@/components/categories/Column';
import Columns from '@/components/categories/Columns';
import PanelEffectList from '@/components/categories/PanelEffectList';

export default {
  components: {
    Panel,
    Column,
    Columns,
    PanelEffectList
  },
  scrollToTop: true,
  head() {
    return {
      title: "Visual Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
