<template>
  <div class="pageContent">
    <h1> Search 
      <fa 
        :icon="['far', 'search']"
        class="fa categoryIcon" />
    </h1>

    <input 
      ref="searchInput"
      v-model="query"
      type="text"
      class="searchInput"
      @input="search">
    <a 
      class="clearButton"
      @click="clear"> (clear) </a>

    <div
      v-show="results.length"
      class="searchResults">

      <hr>

      <div 
        v-show="effectResults.length"
        class="effectResults">

        <h1> Effects </h1>
        <effect-result
          v-for="result in effectResults"
          :key="result._id"
          :effect="result.data" />

      </div>

      <div 
        v-show="reportResults.length"
        class="effectResults">
      
        <h1> Reports </h1>
        <report-result
          v-for="result in reportResults"
          :key="result._id"
          :report="result.data" />

      </div>

    </div>

  </div>
</template>

<script>
import EffectResult from "@/components/search/EffectResult";
import ReportResult from "@/components/search/ReportResult";
import { debounce } from 'lodash';

export default {
  components: {
    EffectResult,
    ReportResult
  },
  data() {
    return {
      query: ''
    };
  },
  computed: {
    results() {
      return this.$store.state.search_results;
    },

    effectResults() {
      return this.$store.state.search_results.filter((result) => result.type === 'effect');
    },

    reportResults() {
      return this.$store.state.search_results.filter((result) => result.type === 'report');
    }
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
  methods: {
    search: debounce(function search() {
      this.$store.dispatch('search', this.query);
    }, 200),
    clear() {
      this.query = '';
      this.$refs.searchInput.focus();
    }
  }
};
</script>

<style scoped>

  input {
    font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
    border: 1px solid #CCCCCC;
    padding: 0.5em 1em;
    font-size: 16px;
    width: 100%;
  }

  .searchInput {
    margin-top: 1em;
  }

  .clearButton {
    font-size: 12pt;
    cursor: pointer;
  }

</style>
