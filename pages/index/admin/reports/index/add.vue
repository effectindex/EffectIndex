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
        this.$store.dispatch("submitReport", report).then(this.$router.push("/admin/reports/"));
      }
    },
    middleware: ["auth"]
  };
</script>