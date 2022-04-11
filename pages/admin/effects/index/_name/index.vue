<template>
  <div class="pageContent">
    <client-only>
      <effect-editor
        :effect="effect"
        @edit-effect="submitEffect"
        @update-effect="updateEffect"
      />
    </client-only>
  </div>
</template>

<script>
import EffectEditor from "@/components/effects/editor/EffectEditor";

export default {
  components: {
    EffectEditor
  },
  middleware: ["auth"],
  async asyncData({ $axios, params }) {
    try {
      const { name } = params;
      let { effect } = await $axios.$get(`/api/effects/${name}`);
      return { effect };
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async submitEffect(effect) {
      
      const submitted = await this.$store.dispatch("effects/update", effect);

        this.$toasted.show(
          'The effect has been successfully updated.',
          {
            duration: 2000,
            type: 'success'
          }
        );

      
      this.$router.push("/effects/" + submitted.url);
    },
    async updateEffect(effect) {
      const updated = await this.$store.dispatch("effects/update", effect);

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