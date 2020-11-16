<template>
  <div>
    <div class="buttonContainer">
      <input 
        v-model="type"
        type="radio"
        name="articleType"
        value="viscidcode"
        @change="handleChange"
      >
      <label for="viscidcode"> Viscidcode </label>
    </div>

    <div class="buttonContainer">
      <input 
        v-model="type"
        type="radio"
        name="articleType"
        value="markdown"
        @change="handleChange"
      >
      <label for="markdown"> Markdown Only </label>
    </div>

    <div class="buttonContainer">
      <input 
        v-model="type"
        type="radio"
        name="articleType"
        value="html"
        @change="handleChange"
      >
      <label for="html"> Raw HTML </label>
    </div>
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
  
  data () {
    return {
      type: {
        type: String,
        default: undefined
      }
    };
  },

  methods: {
    handleChange(e) {
      this.$emit('input', this.type);
    }
  }
};
</script>

<style scoped>
label {
  margin-left: 5px;
}
</style>