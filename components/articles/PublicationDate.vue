<template>
  <input
    type="date"
    :value="date"
    @change="handleChange"
  >
</template>

<script>
export default {
  props: {
    publicationDate: {
      type: String,
      default: undefined
    }
  },

  computed: {
    date() {
      return this.publicationDate ? new Date(this.publicationDate).toISOString().substring(0, 10) : undefined;
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style scoped>
  input[type="date"] {
    padding: 0.55em;
  }
</style>