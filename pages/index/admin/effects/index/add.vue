<template>
  <div class="pageContent">
    <hr>
    <effect-editor @new-effect="submitEffect" />
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
    async submitEffect(effect) {
      let returnedEffect = await this.$store.dispatch("submitEffect", effect);

      this.$notify({
        title: 'Effect Submitted.',
        text: 'The new effect has been successfully submitted.'
      });

      this.$router.push("/admin/effects/list");
    }
  }
};
</script>