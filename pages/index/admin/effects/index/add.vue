<template>
  <div class="pageContent">
    <hr>
    <effect-editor @new-effect="submitEffect" />
  </div>
</template>

<script>
import EffectEditor from "@/components/effects/EffectEditor";

export default {
  components: {
    EffectEditor
  },
  middleware: ["auth"],
  methods: {
    async submitEffect(effect) {
      let returnedEffect = await this.$store.dispatch("submitEffect", effect);
      this.$router.push("/admin/effects/list");
    }
  }
};
</script>