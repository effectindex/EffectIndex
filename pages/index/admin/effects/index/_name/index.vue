<template>
  <div class="pageContent">
    <effect-editor
      :effect="effect"
      @edit-effect="submitEffect"
      @update-effect="updateEffect"
    />
  </div>
</template>

<script>
import EffectEditor from "@/components/effects/editor/EffectEditor";

export default {
  components: {
    EffectEditor
  },
  middleware: ["auth"],
  async asyncData({ store, params }) {
    let { effect } = await store.dispatch("getEffect", params.name);
    return { effect };
  },
  methods: {
    async submitEffect(effect) {
      
      let returnedEffect = await this.$store.dispatch("updateEffect", effect);

      this.$notify({
        title: 'Effect Updated.',
        text: 'The effect has succesfully updated.'
      });
      
      this.$router.push("/effects/" + returnedEffect.url);
    },
    async updateEffect(effect) {
      let returnedEffect = await this.$store.dispatch("updateEffect", effect);

      this.$notify({
        title: 'Effect Updated.',
        text: 'The effect has succesfully updated.'
      });
    }
  },
};
</script>