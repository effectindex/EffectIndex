<template>
  <div class="pageContent">
    <h1> Trip Reports </h1>

    <p>The Trip Reports section of Effect Index exists to showcase our collection of high quality, consistently formatted trip reports which describe the subjective expereinces our contributors undergo while under the influence of various hallucinogenic substances.</p>
    <p>These reports adhere to the standardized terminology of the Subjective Effect Index and include quantitative data from a subjective effect tracking survey. They are analyzed to provide information which document all of the various subjective effects of specific compounds through the use of a standardized formal methodology.</p>
    <div class="reportItemContainer">
      <report-item
        v-for="report in reports"
        :key="report._id"
        :report="report"
        :profile-name="hasProfile(report.subject.name)" />
    </div>
  </div>
</template>

    <table class="tripReports__listTable">
      <thead class="tripReports__listTableHead">
        <tr>
          <td> Title </td>
          <td> Author </td>
          <td> Substance(s) </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="report in reports"
          :key="report._id">
          <td>
            <nuxt-link :to="'/reports/' + report.slug"> {{ report.title }} </nuxt-link>
          </td>
          <td> {{ report.subject.name }} </td>
          <td>
            <span
              v-for="(substance, index) in report.substances"
              :key="index">
              {{ substance.name + spacer(index, report.substances.length) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

<script>
import reportItem from "@/components/reports/reportList__item";

export default {
  components: {
    reportItem
  },
  async fetch({ store }) {
    await store.dispatch("getReports");
    await store.dispatch("getProfiles");
  },
  computed: {
    reports() {
      return this.$store.state.reports;
    },
    profileNames() {
      return this.$store.state.profiles.map(profile => profile.username);
    }
  },
  methods: {
    hasProfile(name) {
      return this.profileNames[this.profileNames.indexOf(name)];
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
p:last-of-type {
  padding-bottom: 1em;
}
</style>