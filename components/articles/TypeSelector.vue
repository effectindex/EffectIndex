<template>
  <div class="typeSelector">
    <h2> Body Type </h2>

    <input 
      v-model="type"
      type="radio"
      name="articleType"
      value="viscidcode"
      @change="handleChange"
    >
    <label for="viscidcode"> Viscidcode </label>

    <input 
      v-model="type"
      type="radio"
      name="articleType"
      value="markdown"
      @change="handleChange"
    >
    <label for="markdown"> Markdown Only </label>

    <input 
      v-model="type"
      type="radio"
      name="articleType"
      value="html"
      @change="handleChange"
    >
    <label for="html"> Raw HTML </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: undefined
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('input', this.type);
    }
  }
};
</script>