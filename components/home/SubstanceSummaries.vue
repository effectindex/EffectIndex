<template>
  <div class="substanceSummariesContainer">
    <div class="substanceSummaries">
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
    </div>
    <div class="substanceSummariesStub">
      For more, see the <nuxt-link to="/substances/">
        Substance Index.
      </nuxt-link>
    </div>
  </div>
</template>

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

  .substanceSummariesStub {
    width: 100%;
    font-size: 12pt;
    color: #666;
    border-top: 1px solid #DDD;
    background-color: #F4F4F4;
    line-height: 1.2em;
    padding: 4px 12px;
  }
</style>