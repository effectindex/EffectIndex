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

          this.$toasted.show(
            'The report has been successfully added.',
            {
              duration: 2000,
              type: 'success'
            }
          );


          this.$router.push("/admin/reports/list");
        } catch (error) {
          console.log(error);
        }
      }
    },
    middleware: ["auth"]
  };
</script>