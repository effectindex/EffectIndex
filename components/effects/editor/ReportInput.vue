<template>
  <div class="reportInput">
    <div class="searchContainer">
      <input 
        v-model="term"
        class="effectEditor__input"
        @keyup="changeInput"
      >
      <ul 
        v-show="results.length > 0"
        class="reportList"
      >
        <li 
          v-for="result in results.slice(0, 5)"
          :key="result._id"
        >
          <a @click="addSelection(result._id)">
            <span class="title"> {{ result.title }} </span> -
            <span class="name"> {{ result.subject.name }} </span>
          </a>
        </li>
      </ul>
    </div>
    <ul
      v-show="selectedReports.length > 0"
      class="selectedReportList"
    >
      <li 
        v-for="report in selectedReports"
        :key="report._id"
        class="selectedReportItem"
      >
        <div class="reportInfo">
          <span class="title"> {{ report.title }} </span>
          <span class="separator"> by </span>
          <span class="name"> {{ report.subject.name }} </span>
        </div>
        <div class="reportControls">
          <a 
            @click="removeSelection(report._id)"
          >
            <Icon 
              filename="times-circle.svg" 
              color="red"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      term: "",
      results: [],
      reports: [],
      selected: this.value ? this.value : []
    };
  },
  computed: {
    selectedReports () {
      return this.reports.filter( report => this.selected.includes(report._id) );
    }
  },
  async fetch() {
    try {
      const { reports } = await this.$axios.$get('/api/reports');
      this.reports = reports;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async changeInput(e) {
      const { term } = this;
      try {
        const { results } = await this.$axios.$post('/api/reports/search', { term });
        this.results = (Array.isArray(results)) ? results : [];
      } catch (error) {
        console.log(error);
      }
    },

    addSelection (id) {
      if (!this.selected.includes(id)) {
        this.selected = [...this.selected, id];
        this.term = "";
        this.results = [];
        this.$emit('input', this.selected);
      }
    },

    removeSelection (id) {
      this.selected = this.selected.filter( selectedId => selectedId !== id);
      this.$emit('input', this.selected);
    }
  },
};
</script>

<style scoped>
  .searchContainer {
    position: relative;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  .reportList {
    z-index: 100;
    position: absolute;
    min-width: 350px;
    top: 100%;
    left: 0;
    background-color: white;
    padding: 1em;
    opacity: 0.9;
  }

  .icon {
    height: 15px;
    width: 15px;
    display: inline-block;
  }

  .selectedReportItem {
    display: flex;
    align-items: center;
    margin-top: 0.25em;
  }


  .reportInfo {
    margin-right: 1em;
  }

  .selectedReportItem .title {
    font-weight: bold;
  }

  .selectedReportItem .name {
    font-style: italic;
  }
</style>