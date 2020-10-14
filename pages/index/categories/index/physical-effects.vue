<template>
  <div class="pageContent">
    <h1>
      Physical Effects
      <Icon
        filename="user.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical effects</b> are subjective effects that directly alter a person's perception of their physical body or its physiological functions.
    </p>

    <p>
      This page lists the various physical effects that can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <Columns>
      <Column>
        <Panel
          title="Enhancements"
          icon="arrow-up.svg"
        >
          <PanelEffectList
            :tags="['physical', 'enhancement']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          icon="arrow-down.svg"
        >
          <PanelEffectList
            :tags="['physical', 'suppression']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Alterations"
          icon="arrow-down.svg"
        >
          <PanelEffectList
            :tags="['physical', 'alteration']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Cardiovascular"
          icon="lightbulb.svg"
        >
          <PanelEffectList
            :tags="['cardiovascular']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Cerebrovascular"
          icon="psychological.svg"
        >
          <PanelEffectList
            :tags="['cerebrovascular']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Bodily"
          icon="infinity.svg"
        >
          <PanelEffectList
            :tags="['bodily']"
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
      title: "Physical Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
