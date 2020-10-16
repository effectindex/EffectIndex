<template>
  <panel
    icon="flask.svg"
    title="Substance Summaries"
  >
    <template v-slot:content>
      <ul class="summaryList">
        <li class="summaryItem">
          <span> The Subjective Effects of Psychedelics: </span> <br>
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
            The Subjective Effects of Dissociatives
          </nuxt-link>
        </li>
        <li class="summaryItem">
          <nuxt-link :to="'/summaries/deliriants'">
            The Subjective Effects of Deliriants
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template v-slot:stub>
      For more, see the <nuxt-link to="/substances/">
        Substance Index.
      </nuxt-link>
    </template>
  </panel>
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
  .summaryList {
    color: #AAA;
    padding: 12px;
    padding-left: calc(12px + 1em);
    margin-bottom: 0;
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