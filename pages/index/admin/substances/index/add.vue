<template>
  <div class="pageContent">
    <hr>
    <effect-editor @new-effect="submitSubstance" />
  </div>
</template>

<script>
import EffectEditor from "@/components/effects/editor/EffectEditor";

export default {
  components: {
    EffectEditor
  },
  middleware: ["auth"],
  methods: {
    async submitSubstance(substance) {
      let returnedSubstance = await this.$store.dispatch("submitSubstance", substance);

      this.$notify({
        title: 'Substance Submitted.',
        text: 'The new substance has been successfully submitted.'
      });

      this.$router.push("/admin/substance/list");
    }
  }
};
</script>
