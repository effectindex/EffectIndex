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
          :key="report._id"
        >
          <td> 
            <nuxt-link :to="'/reports/' + report.slug">
              {{ report.title }}
            </nuxt-link>
          </td>
          <td> {{ report.subject ? report.subject.name : '' }} </td>
          <td>
            <span 
              v-for="tag in report.tags"
              :key="tag"
              class="reportTag"
            >
              {{ tag }}
            </span>
          </td>
          <td>
            <nuxt-link :to="'/admin/reports/' + report._id">
              <fa
                :icon="['far', 'edit']"
                class="fa"
                style="cursor: pointer; padding-right: 2em;"
              /> 
            </nuxt-link> 
            <a @click="deleteReport(report._id)"> 
              <fa
                :icon="['far', 'times']"
                class="fa"
                style="color: red; cursor: pointer;"
              />
            </a>
          </td>
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
  },
  methods: {
    async deleteReport(id) {
      await this.$store.dispatch('deleteReport', id);

      this.$notify({
        title: 'Report Deleted.',
        text: 'The report has been deleted.'
      });

    }
  }
};
</script>

<style>
.reportListTable {
  width: 100%;
}
</style>