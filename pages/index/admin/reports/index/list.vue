<template>
  <div>
    <hr>
    <h3> Reports </h3>
    <table class="reportListTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Author </td>
          <td> Tags </td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="report in reports"
          :key="report._id">
          <td> 
            <nuxt-link :to="'/admin/reports/' + report._id"> {{ report.title }} </nuxt-link>
          </td>
          <td> {{ report.subject ? report.subject.name : '' }} </td>
          <td>
            <span 
              v-for="tag in report.tags"
              :key="tag"
              class="reportTag">
              {{ tag }}
            </span>
          </td>
          <td> <i class="fa fa-times" /> </td>
          <td> <i class="fa fa-edit" /> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    reports () {
      return this.$store.state.reports;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getReports");
  }
};
</script>

<style>
.reportListTable {
  width: 100%;
}
</style>