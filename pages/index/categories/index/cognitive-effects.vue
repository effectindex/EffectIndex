<template>
  <div class="pageContent">
    <h1>
      Cognitive Effects
      <fa
        :icon="['far', 'cogs']"
        class="fa categoryIcon"
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
          :icon="['far', 'arrow-up']"
        >
          <PanelEffectList
            :tags="['cognitive', 'enhancement']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          :icon="['far', 'arrow-down']"
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
          :icon="['far', 'lightbulb']"
        >
          <PanelEffectList
            :tags="['cognitive', 'novel']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Psychological States"
          image="/icons/psychological.svg"
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
          :icon="['far', 'infinity']"
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
