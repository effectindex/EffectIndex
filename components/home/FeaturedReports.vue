<template>
  <div class="featuredReports">
    <div class="reportsContainer">
      <featured-report
        v-for="report in featuredReports"
        :key="report.id"
        :title="report.title"
        :author="report.subject.name"
        :slug="report.slug"
        :substances="report.substances" />
    </div>
    <div class="featuredReportsStub">
      For more, see the <nuxt-link to="/reports/"> reports section</nuxt-link>.
    </div>
  </div>
</template>

<script>
import FeaturedReport from '@/components/home/FeaturedReport';
import { shuffle } from 'lodash';

export default {
  components: {
    FeaturedReport
  },

  computed: {
    reports() {
      return this.$store.state.reports;
    },
    featuredReports() {
      const shuffledReports = shuffle(this.reports.filter((report) => report.featured));
      return shuffledReports.length >= 3 ? shuffledReports.slice(0, 3) : shuffledReports;
    }
  }
};
</script>

<style scoped>

  .featuredReports {
    flex: 1;
  }

  .reportsContainer {
    padding: 12px;
  }

  .featuredReport {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-width: 300px;
    padding: 0.5em;
    border: 1px solid #EEE;
  }

  .featuredReport:not(:last-child) {
    margin-bottom: 0.5em;
  }

  .featuredReport >>> .reportInfo {
    line-height: 1.1em;
    flex: 1;
    padding-right: 6px;
  }

  .featuredReport >>> .reportSubstance {
    flex: 1;
    line-height: 1em;
    padding-left: 6px;
  }

  .featuredReport >>> .reportAuthor {
    font-size: 0.9em;
  }

  .featuredReport >>> .reportSubstanceName {
    font-size: 1em;
  }

  .featuredReport >>> .reportSubstanceDoseRoa {
    font-size: 11pt;
    color: #666;
  }

  .featuredReport:hover {
    background-color: rgb(245, 245, 245);
  }

  .featuredReportsStub {
    padding: 4px 12px;
    color: #666;
    line-height: 1.2em;
    font-size: 12pt;
    background-color: #F4F4F4;
    border-top: 1px solid #DDD;
  }

</style>
