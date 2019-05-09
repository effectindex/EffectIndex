<template>
  <div class="pageContent">
    <substance-editor
      :substance="substance"
      @edit-substance="submitSubstance"
      @update-substance="updateSubstance"
    />
  </div>
</template>

<script>
import SubstanceEditor from "@/components/substances/editor/SubstanceEditor";

export default {
  components: {
    SubstanceEditor
  },
  middleware: ["auth"],
  async asyncData({ store, params }) {
    let { substance } = await store.dispatch("getSubstance", params.name);
    return { substance };
  },
  methods: {
    async submitSubstance(substance) {

      let returnedSubstance = await this.$store.dispatch("updateSubstance", substance);

      this.$notify({
        title: 'Substance Updated.',
        text: 'The substance has succesfully updated.'
      });

      this.$router.push("/substances/" + returnedSubstance.url);
    },
    async updateSubstance(substance) {
      let returnedSubstance = await this.$store.dispatch("updateSubstance", substance);

      this.$notify({
        title: 'Substance Updated.',
        text: 'The substance has succesfully updated.'
      });
    }
  }
};
</script>
