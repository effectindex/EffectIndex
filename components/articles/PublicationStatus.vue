<template>
  <select 
    :value="publicationStatus"
    @change="handleChange"
  >
    <option value="published">
      Published
    </option>
    <option value="unpublished">
      Unpublished
    </option>
    <option value="draft">
      Draft
    </option>
    <option value="unlisted">
      Unlisted
    </option>
  </select>
</template>

<script>
export default {
  props: {
    publicationStatus: {
      type: String,
      default: undefined
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>