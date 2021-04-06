<template>
  <div class="relatedReports">
    <p>This effect seems to be mentioned within the following trip reports:</p>
    <related-report-item
      v-for="report in limitedReports"
      :key="report._id"
      :report="report"
    />
    <button 
      v-if="(sortedReports.length > maxReports) && !expanded"
      class="expandButton whiteButton"
      @click="toggleExpanded"
    >
      Show {{ sortedReports.length - maxReports }} more reports...
    </button>
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
    },
    maxReports: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      expanded: false
    };
  },
  computed: {

    sortedReports() {
      const featured = this.reports.filter( report => report.featured );
      const unfeatured = this.reports.filter( report => !report.featured );
      return [...featured, ...unfeatured];
    },

    limitedReports() {
      return this.expanded ? this.sortedReports : this.sortedReports.slice(0, this.maxReports);
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  }
};
</script>