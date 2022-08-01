<template>
  <div class="pageContent">
    <hr>
    <report-editor
      :report="reportData"
      :visibility="sectionVisibility"
      @edit-report="updateReport"
    />
  </div>
</template>

<script>
import ReportEditor from '@/components/reports/editor/ReportEditor';

export default {
  components: {
    ReportEditor
  },
  async asyncData({ params, store }) {
    try {
      let { reportData, sectionVisibility } = await store.dispatch('reports/getReportById', params.id);
      return { reportData, sectionVisibility };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      reportData: undefined,
      sectionVisibility: undefined
    };
  },
  methods: {
    async updateReport(report) {
      try {
        let response = await this.$store.dispatch('reports/update', report);

        this.$toasted.show(
          'The report has been successfully updated.',
          {
            duration: 2000,
            type: 'success'
          }
        );


      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
