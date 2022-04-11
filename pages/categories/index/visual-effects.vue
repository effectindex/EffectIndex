<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -      
      Visual Effects
      <Icon
        filename="eye.svg"
        class="categoryIcon"
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
          title="Amplifications"
          page="/categories/visual-amplifications"
          icon="arrow-up.svg"
        >
          <PanelEffectList
            :tags="['visual', 'amplification']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          page="/categories/visual-suppressions"
          icon="arrow-down.svg"
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
          page="/categories/hallucinatory-states"
          icon="dragon.svg"
        >
          <PanelEffectList
            :tags="['visual', 'hallucinatory state']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Geometric Patterns"
          page="/categories/geometric-patterns"
          icon="geometry.svg"
        >
          <PanelEffectList
            :tags="['visual', 'geometric']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Distortions"
          page="/categories/visual-distortions"
          icon="distortions.svg"
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
import Icon from '@/components/Icon';

export default {
  components: {
    Panel,
    Column,
    Columns,
    PanelEffectList,
    Icon
  },
  scrollToTop: true,
  head() {
    return {
      title: "Visual Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  }
};
</script>
