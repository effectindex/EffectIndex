<template>
  <div class="substanceSummaries">
    <ul class="summaryList">
      <li class="summaryItem">
        <span> The Subjective Effects of Psychedelics: </span> <br>
        <nuxt-link :to="'/summaries/psychedelics/visual'"> Visual, </nuxt-link>
        <nuxt-link :to="'/summaries/psychedelics/cognitive'"> Cognitive, </nuxt-link>
        <nuxt-link :to="'/summaries/psychedelics/physical'"> Physical </nuxt-link>
      </li>
      <li class="summaryItem">
        <nuxt-link :to="'/summaries/dissociatives'"> The Subjective Effects of Dissociatives </nuxt-link>
      </li>
      <li class="summaryItem">
        <nuxt-link :to="'/summaries/deliriants'"> The Subjective Effects of Deliriants </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .summaryList {
    color: #AAA;
    padding-left: 1em;
    margin-bottom: 0;
  }

  .substanceSummaries {
    padding: 12px;
    font-size: 13pt;
  }

  .summaryItem span {
    color: black;
  }

  .summaryItem:not(:first-child) {
    margin-top: 0.5em;
  }
</style>