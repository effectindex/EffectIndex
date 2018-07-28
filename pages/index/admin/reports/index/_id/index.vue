<template>
  <div class="pageContent">
    <hr>
    <report-editor
      :report="reportData"
      :visibility="sectionVisibility"
      @edit-report="updateReport" />
  </div>
</template>

<script>
import ReportEditor from '@/components/reports/ReportEditor';

export default {
  components: {
    ReportEditor
  },
  methods: {
    async updateReport(report) {
      try {
        let response = await this.$store.dispatch('updateReport', report);
        if (response) {
          let { reportData, sectionVisibility } = await store.dispatch('getReportById', this.reportData._id);
          this.reportData = reportData;
          this.sectionVisibility = sectionVisibility;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async asyncData({ params, store }) {
    try {
      let { reportData, sectionVisibility } = await store.dispatch('getReportById', params.id);
      return { reportData, sectionVisibility };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>