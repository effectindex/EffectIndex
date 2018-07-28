<template>
  <div class="sectionHeaderContainer">
    <h4> {{ title }} </h4>
    <span class="visibilityToggle">
      <a @click="toggleVisibility(name)">
        ({{ visibility ? 'hide' : 'show' }}) </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    visibility: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleVisibility(name) {
      this.$emit('toggle', name);
    }
  }
};
</script>