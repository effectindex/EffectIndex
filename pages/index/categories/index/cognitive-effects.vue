<template>
  <div class="pageContent">
    <h1>
      Cognitive Effects
      <Icon
        filename="cogs.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cognitive effects</b> are subjective effects which directly alter or introduce new content to an element of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive effects which can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <Columns>
      <Column>
        <Panel
          title="Enhancements"
          :icon="'arrow-up.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'enhancement']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          :icon="'arrow-down.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'suppression']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Novel States"
          :icon="'lightbulb.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'novel']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Psychological States"
          :icon="'psychological.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'psychological state']"
            :effects="effects"
          />
        </Panel>
      </Column>
      <Column>
        <Panel
          title="Transpersonal States"
          :icon="'infinity.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'transpersonal state']"
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
      title: "Cognitive Effects"
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  }
};
</script>
