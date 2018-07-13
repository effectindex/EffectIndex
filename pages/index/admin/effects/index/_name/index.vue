<template>
  <div class="pageContent">
    <effect-editor
      :effect="effect"
      @edit-effect="submitEffect" />
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
      let returnedEffect = await this.$store.dispatch("updateEffect", effect);
      this.$router.push("/effects/" + returnedEffect.url);
    }
  },
  async asyncData(app) {
    let { effect } = await app.$axios.$get("/api/effects/" + app.params.name);
    return { effect };
  }
};
</script>