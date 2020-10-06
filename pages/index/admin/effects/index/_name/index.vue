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

        this.$toasted.show(
          'The effect has been successfully updated.',
          {
            duration: 2000,
            type: 'success'
          }
        );

      
      this.$router.push("/effects/" + returnedEffect.url);
    },
    async updateEffect(effect) {
      let returnedEffect = await this.$store.dispatch("updateEffect", effect);

        this.$toasted.show(
          'The effect has been successfully updated.',
          {
            duration: 2000,
            type: 'success'
          }
        );

    }
  },
};
</script>