<template>
  <div>
    <related-report-item
      v-for="report in sortedReports"
      :key="report._id"
      :report="report"
    />
  </div>
</template>

<script>
import RelatedReportItem from "@/components/reports/reportList__item";

export default {
  components: {
    RelatedReportItem
  },
  props: {
    reports: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedReports() {
      const featured = this.reports.filter( report => report.featured );
      const unfeatured = this.reports.filter( report => !report.featured );

      return [...featured, ...unfeatured];
    }
  }
};
</script>