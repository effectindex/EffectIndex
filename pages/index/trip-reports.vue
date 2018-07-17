<template>
  <div>
    <ul>
      <li
        v-for="report in reports"
        :key="report._id"> {{ report.author }} - {{ report.title }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    reports() {
      return this.$store.state.reports;
    }
  },
  async asyncData({ store }) {
    await store.dispatch("getReports");
  }
};
</script>