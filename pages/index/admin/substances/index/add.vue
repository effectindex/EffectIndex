<template>
  <div class="pageContent">
    <hr>
    <substance-editor @new-substance="submitSubstance" />
  </div>
</template>

<script>
import SubstanceEditor from "@/components/substances/editor/SubstanceEditor";

export default {
  components: {
    SubstanceEditor
  },
  middleware: ["auth"],
  methods: {
    async submitSubstance(substance) {
      let returnedSubstance = await this.$store.dispatch("submitSubstance", substance);

      this.$notify({
        title: 'Substance Submitted.',
        text: 'The new substance has been successfully submitted.'
      });

      this.$router.push("/admin/substances/list");
    }
  }
};
</script>
