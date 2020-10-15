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

        this.$toasted.show(
          'The substance has been successfully submitted.',
          {
            duration: 2000,
            type: 'success'
          }
        );


      this.$router.push("/admin/substances/list");
    }
  }
};
</script>
