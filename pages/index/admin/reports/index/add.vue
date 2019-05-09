<template>
  <div class="pageContent">
    <hr>
    <report-editor
      @new-report="submitReport"
    />
  </div>
</template>

<script>
  import ReportEditor from "@/components/reports/editor/ReportEditor.vue";

  export default {
    components: {
      ReportEditor
    },
    methods: {
      async submitReport(report) {
        try {
          let result = this.$store.dispatch("submitReport", report);

          this.$notify({
            title: 'Report Submitted.',
            text: 'The report has been successfully submitted.'
          });

          this.$router.push("/admin/reports/list");
        } catch (error) {
          console.log(error);
        }
      }
    },
    middleware: ["auth"]
  };
</script>