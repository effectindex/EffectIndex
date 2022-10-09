<template>
  <Panel
    icon="flask.svg"
    title="Substance Summaries"
    description="Hallucinogenic substance classes, broken down and described"
  >
    <template
      v-slot:content 
    >
      <ul class="summaryList">
        <li class="summaryItem">
          <span style="color: #333;"> Psychedelics: </span>
          <nuxt-link :to="'/summaries/psychedelics/visual'">
            Visual,
          </nuxt-link>
          <nuxt-link :to="'/summaries/psychedelics/cognitive'">
            Cognitive,
          </nuxt-link>
          <nuxt-link :to="'/summaries/psychedelics/miscellaneous'">
            Miscellaneous
          </nuxt-link>
        </li>
        <li class="summaryItem">
          <nuxt-link :to="'/summaries/dissociatives'">
            Dissociatives
          </nuxt-link>
        </li>
        <li class="summaryItem">
          <nuxt-link :to="'/summaries/deliriants'">
            Deliriants
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template v-slot:stub>
      For more, see the <nuxt-link to="/articles/">
        articles section.
      </nuxt-link>
    </template>
  </Panel>
</template>

<script>
import Panel from '@/components/home/Panel';

export default {
  components: {
    Panel
  }
};
</script>

<style scoped>

  .summaryContent {
    background-image: linear-gradient(to top, #F8F8F8 95%, #DDD 100%);
  }

  .summaryList {
    color: #DDD;
    padding: 12px;
    padding-left: calc(12px + 1em);
    margin: 0;
    width: 100%; 
  }

  .substanceSummaries {
    font-size: 13pt;
  }

  .summaryItem span {
    color: black;
  }

  .summaryItem:not(:first-child) {
    margin-top: 0.5em;
  }
</style>
