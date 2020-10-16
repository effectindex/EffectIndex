<template>
  <Panel
    icon="file-signature.svg"
    title="Featured Reports"
  >
    <template v-slot:content>
      <div class="featuredReports">
        <featured-report
          v-for="report in featuredReports"
          :key="report.id"
          :title="report.title"
          :author="report.subject.name"
          :slug="report.slug"
          :substances="report.substances"
        />
      </div>
    </template>
    <template v-slot:stub>
      For more, see the <nuxt-link to="/reports/">
        reports section.
      </nuxt-link>
    </template>
  </Panel>
</template>

<script>
import Panel from '@/components/home/Panel';
import FeaturedReport from '@/components/home/FeaturedReport';
import { shuffle } from 'lodash';

export default {
  components: {
    FeaturedReport,
    Panel
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
  .reportsContainer {
    padding: 12px;
  }

  .featuredReports {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
  }

  .featuredReport {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid #EEE;
  }

  .featuredReport:not(:last-child) {
    margin-bottom: 0.5em; 
  }

  .featuredReport:last-child {
    border-bottom: none;
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
</style>
