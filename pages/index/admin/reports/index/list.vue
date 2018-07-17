<template>
  <div>
    <hr>
    <h3> EffectIndex User List </h3>
    <table class="admin__reportListTable">
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
          <td> {{ report.title }} </td>
          <td> {{ report.author }} </td>
          <td>
            <span 
              v-for="tag in report.tags"
              :key="tag"
              class="reportTag">
              {{ tag }}
            </span>
          </td>
          <td> <i class="fa fa-times" /> </td>
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
