<template>
  <div class="pageContent">
    <h1>
      Search
      <Icon
        filename="search.svg"
        class="categoryIcon"
      />
    </h1>

    <div class="inputContainer">
      <input
        ref="searchInput"
        :value="searchInput"
        type="text"
        class="searchInput"
        @input="changeSearchInput"
      >
      <div
        v-show="searchInput.length"
        class="clearButton"
        @click="clear"
      >
        <Icon
          filename="times-circle.svg"
          style="height: 1.25em; width: 1.25em;"
        />
      </div>
    </div>

    <div
      v-show="results"
      class="searchResults"
    >
      <hr>

      <div
        v-if="effectResults"
        class="effectResults"
      >
        <h1> Effects - {{ effectResults.length + (effectResults.length > 1 ? ' results' : ' result') }} </h1>
        <effect-result
          v-for="effect in effectResults"
          :key="effect._id"
          :effect="effect"
        />
      </div>

      <ul
        v-if="articleResults"
        class="articleResults"
      >
        <h1>
          Articles - {{ articleResults.length + (articleResults.length > 1 ? ' results' : ' result') }}
        </h1>
        <article-list-item
          v-for="article in articleResults"
          :key="article._id"
          :article="article"
        />
      </ul>

      <div
        v-if="reportResults"
        class="effectResults"
      >
        <h1> Reports - {{ reportResults.length + (reportResults.length > 1 ? ' results' : ' result') }} </h1>
        <report-result
          v-for="report in reportResults"
          :key="report._id"
          :report="report"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EffectResult from "@/components/search/EffectResult";
import ReportResult from "@/components/search/ReportResult";
import ArticleListItem from "@/components/articles/ArticleListItem";
import Icon from '@/components/Icon';
import { debounce } from "lodash";

export default {
  components: {
    EffectResult,
    ReportResult,
    ArticleListItem,
    Icon
  },
  scrollToTop: true,
  computed: {
    results() {
      return this.effectResults || this.reportResults || this.articleResults;
    },

    effectResults() {
      return this.$store.state.search.results.effects;
    },

    reportResults() {
      return this.$store.state.search.results.reports;
    },

    articleResults() {
      return this.$store.state.search.results.articles;
    },

    searchInput() {
      return this.$store.state.search.input;
    }
  },
  head() {
    return {
      title: "Search"
    };
  },
  async fetch({ store, route }) {
    if (route.query.q) {
      await store.dispatch('search/search', route.query.q);
      store.commit('search/change_input', route.query.q);
    }
  },
  watchQuery: ['q'],
  mounted() {
    this.$refs.searchInput.focus();
  },
  destroyed() {
    this.$store.commit('search/clear_input');
  },
  methods: {
    changeSearchInput(e) {
      this.$store.commit('search/change_input', e.target.value);
      this.performSearch();
    },

    performSearch: debounce(function() {
      this.$store.dispatch('search/search', this.searchInput);
    }, 400, {trailing: true}),

    clear() {
      this.$store.commit('search/clear_input');
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
    max-width: 92%;
  }

  .searchInput:focus {
    outline: none;
  }

  .clearButton {
    position: absolute;
    right: 8px;
    top: calc(50% - 12px);
    opacity: 0.4;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .clearButton:hover {
    opacity: 0.7;
  }

  .articleResults {
    list-style: none;
    padding-left: 0;
    font-size: unset;
  }

</style>
