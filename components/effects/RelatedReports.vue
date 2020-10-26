<template>
  <div>
    <related-report-item
      v-for="report in reports"
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
  }
};
</script>