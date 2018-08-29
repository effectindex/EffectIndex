<template>
  <div class="pageContent">
    <h1> Search 
      <fa 
        :icon="['far', 'search']"
        class="fa categoryIcon" />
    </h1>

    <div class="inputContainer">
      <input 
        ref="searchInput"
        :value="searchInput"
        type="text"
        class="searchInput"
        @input="changeSearchInput">
      <div 
        class="clearButton"
        @click="clear">
        <fa 
          :icon="['far', 'times-circle']" />
      </div>
    </div>

    <div
      v-show="results.length"
      class="searchResults">

      <hr>

      <div 
        v-show="effectResults.length"
        class="effectResults">

        <h1> Effects - {{ effectResults.length + (effectResults.length > 1 ? ' results' : ' result') }} </h1>
        <effect-result
          v-for="result in effectResults"
          :key="result._id"
          :effect="result.data" />

      </div>

      <div 
        v-show="reportResults.length"
        class="effectResults">
      
        <h1> Reports - {{ reportResults.length + (reportResults.length > 1 ? ' results' : ' result') }} </h1>
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
    },

    searchInput() {
      return this.$store.state.search_input;
    }
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
  methods: {
    changeSearchInput(e) {
      this.$store.dispatch('changeSearch', e.target.value);
    },
    clear() {
      this.$store.commit('clear_search_input');
      this.$refs.searchInput.focus();
    }
  }
};
</script>

<style scoped>

  input {
    font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    width: 100%;
    border: none;
  }

  .inputContainer {
    position: relative;
    min-width: 250px;
    max-width: 600px;
    border: 1px solid #CCCCCC;
    padding: 6px 12px;
  }

  .searchInput {
    font-size: 16pt;
    padding: 8px;
    max-width: 92%;
  }

  .clearButton {
    position: absolute;
    right: 8px;
    top: calc(50% - 12px);
    opacity: 0.6;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .clearButton:hover {
    opacity: 0.9;
  }

</style>
