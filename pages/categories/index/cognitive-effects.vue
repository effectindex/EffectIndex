<template>
  <div class="pageContent">
    <h1>
      <nuxt-link to="/categories/">
        Effect Categories
      </nuxt-link> -
      Cognitive Effects
      <Icon
        filename="user.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      <b>Cognitive effects</b> are subjective effects that directly alter or introduce new content to an element of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive enhancements that can occur under the influence of certain psychoactive compounds.
    </p>
    <hr>
    <Columns>
      <Column>
        <Panel
          title="Amplifications"
          page="/categories/cognitive-amplifications"
          :icon="'arrow-up.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'amplification']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Suppressions"
          page="/categories/cognitive-suppressions"
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
          page="/categories/novel-cognitive-states"
          :icon="'lightbulb.svg'"
        >
          <PanelEffectList
            :tags="['cognitive', 'novel']"
            :effects="effects"
          />
        </Panel>
        <Panel
          title="Psychological States"
          page="/categories/psychological-states"
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
          page="/categories/transpersonal-states"
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
