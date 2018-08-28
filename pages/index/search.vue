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

    <div
      v-show="results.length"
      class="searchResults">

      <hr>

      <div 
        v-show="effectResults.length"
        class="effectResults">
        <h1> Effects </h1>
        <search-result
          v-for="(result, index) in effectResults"
          :key="index"
          :type="result.type"
          :name="result.name" />
      </div>

      <div 
        v-show="reportResults.length"
        class="reportResults">
        <search-result
          v-for="(result, index) in reportResults"
          :key="index"
          :type="result.type" />
      </div>
    </div>

  </div>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";

export default {
  components: {
    SearchResult
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
    search() {
      // this.$store.dispatch('search', this.query);
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

</style>
