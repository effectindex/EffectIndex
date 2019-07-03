<template>
  <div class="pageContent">
    <h1>
      Physical Effects
      <fa
        :icon="['far', 'user']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
      <b>Physical effects</b> are subjective effects which directly alter or introduce new content to an element of a person's cognition.
    </p>

    <p>
      This page lists the various physical effects which can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <Columns>
      <Column>
        <Panel
          title="Enhancements"
          :icon="['far', 'arrow-up']"
        >
          <PanelEffectList
            :tags="['physical', 'enhancement']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          :icon="['far', 'arrow-down']"
        >
          <PanelEffectList
            :tags="['physical', 'suppression']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Alterations"
          :icon="['far', 'arrow-down']"
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
          :icon="['far', 'lightbulb']"
        >
          <PanelEffectList
            :tags="['cardiovascular']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Cerebrovascular"
          image="/icons/psychological.svg"
        >
          <PanelEffectList
            :tags="['cerebrovascular']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Bodily"
          :icon="['far', 'infinity']"
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
