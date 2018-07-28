<template>
  <div class="pageContent">
    <hr>
    <report-editor
      @new-report="submitReport" />
  </div>
</template>

<script>
  import ReportEditor from "@/components/reports/ReportEditor.vue";

  export default {
    components: {
      ReportEditor
    },
    methods: {
      async submitReport(report) {
        try {
          let result = this.$store.dispatch("submitReport", report);
          this.$router.push("/admin/reports/");
        } catch (error) {
          console.log(error);
        }
      }
    },
    middleware: ["auth"]
  };
</script>