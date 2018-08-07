<template>
  <div class="pageContent">
    <h1> Trip Reports </h1>
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
import reportItem from '@/components/reports/reportList__item';

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
      return this.$store.state.profiles.map((profile) => profile.username);
    }
  },
  methods: {
    hasProfile(name) {
      return this.profileNames[this.profileNames.indexOf(name)];
    }
  },
  head() {
    return {
      title: 'Trip Reports'
    };
  }
};
</script>

<style>

</style>