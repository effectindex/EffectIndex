<template>
  <div class="pageContent tripReports">
    <fa
      :icon="['far', 'file-signature']"
      class="fa categoryIcon"
    /> 
    <h1> Trip Reports </h1>

    <p>The <strong>trip reports section</strong> of Effect Index exists to showcase our collection of high quality, consistently formatted trip reports which describe the subjective expereinces our contributors undergo while under the influence of various hallucinogenic substances.</p>
    <p>These reports adhere to the standardized terminology of the Subjective Effect Index and include quantitative data from a <a href="https://docs.google.com/forms/u/0/d/1VdkmHgkng78fPrpqIFd7qDti5B7ml_oD8ZFiHbid8w0/edit?usp=forms_home&ths=true"> subjective effect tracking survey</a>. They are analyzed to provide information which document all of the various subjective effects of specific compounds through the use of a standardized formal methodology.</p>
    <view-selector
      :selected="viewMode.name"
      @selectView="selectView"
    />

    <div v-if="viewMode.name === 'substance'">
      <div
        v-for="(substance, index) in sortedSubstances.filter(substance => substance !== 'Combinations')"
        :key="index"
        class="report__substanceList"
      >
        <h3> {{ substance }} </h3>
        <div class="report__reportItemContainer">
          <report-item
            v-for="report in filterReportsBySubstance(substance)"
            :key="report._id"
            :report="report"
            :profile-name="hasProfile(report.subject.name)"
          />
        </div>
      </div>

      <div 
        v-if="sortedSubstances.indexOf('Combinations') > 0"
        class="report__substanceList"
      >
        <h3> Combinations </h3>
        <div class="report__reportItemContainer">
          <report-item
            v-for="report in filterReportsBySubstance('Combinations')"
            :key="report._id"
            :report="report"
            :profile-name="hasProfile(report.subject.name)"
          />
        </div>        
      </div>
    </div>

    <div v-else-if="viewMode.name === 'title'">
      <report-item
        v-for="report in reportsByTitle"
        :key="report._id"
        :report="report"
        :profile-name="hasProfile(report.subject.name)"
      />
    </div>

    <div v-else-if="viewMode.name === 'author'">
      <div
        v-for="(author, index) in sortedAuthors"
        :key="index"
        class="report__substanceList"
      >
        <h3>
          <nuxt-link
            v-if="hasProfile(author)"
            :to="'/profiles/' + author"
          >
            {{ author }}
          </nuxt-link>
          <span v-else> {{ author }} </span>
        </h3>
        <div class="report__reportItemContainer">
          <report-item
            v-for="report in filterReportsByAuthor(author)"
            :key="report._id"
            :report="report"
            :profile-name="hasProfile(report.subject.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reportItem from "@/components/reports/reportList__item";
import viewSelector from "@/components/reports/reportList__viewSelector";
import { sortBy } from "lodash";

export default {
  reportCache: [],
  components: {
    reportItem,
    viewSelector
  },
  data() {
    return {
      viewMode: {
        name: "substance",
        direction: true
      }
    };
  },
  computed: {
    reports() {
      return this.$store.state.reports;
    },
    profileNames() {
      return this.$store.state.profiles.map(profile => profile.username);
    },
    substances() {
      let substanceList = new Set();
      this.reports.forEach(report => {
        if (report.substances.length > 1) substanceList.add("Combinations");
        else
          report.substances.forEach(substance =>
            substanceList.add(substance.name)
          );
      });
      return Array.from(substanceList);
    },
    authors() {
      let authorList = new Set();
      this.reports.forEach(report => {
        authorList.add(report.subject.name);
      });
      return Array.from(authorList);
    },
    sortedSubstances() {
      let sorted = sortBy(this.substances);
      return this.viewMode.direction ? sorted : sorted.reverse();
    },
    sortedAuthors() {
      let sorted = sortBy(this.authors);
      return this.viewMode.direction ? sorted : sorted.reverse();
    },
    reportsByTitle() {
      let sorted = sortBy(this.reports, ["title"]);
      return this.viewMode.direction ? sorted : sorted.reverse();
    },
    reportsByTripDate() {
      let sorted = sortBy(this.report, report => report.subject.trip_date);
      return this.viewMode.direction ? sorted : sorted.reverse();
    }
  },
  async fetch({ store }) {
    await store.dispatch("getReports");
    await store.dispatch("getProfiles");
  },
  methods: {
    hasProfile(name) {
      return this.profileNames[this.profileNames.indexOf(name)];
    },
    filterReportsBySubstance(name) {
        return name === 'Combinations' ?
        this.reports.filter((report) => Array.isArray(report.substances) && report.substances.length > 1) : 
        this.reports.filter((report) => Array.isArray(report.substances) && report.substances.find((substance) => substance.name === name));
    },
    filterReportsByAuthor(author) {
      return this.reports.filter(report => report.subject.name === author);
    },
    selectView(view) {
      if (this.viewMode.name === view)
        this.viewMode.direction = !this.viewMode.direction;
      else this.viewMode.name = view;
    }
  },
  head() {
    return {
      title: "Trip Reports"
    };
  }
};
</script>

<style>
.tripReports p:last-of-type {
  padding-bottom: 1em;
}

.report__substanceList {
  margin: 2em 0;
}

.report__substanceList:first-child {
  margin-top: 0;
}
</style>