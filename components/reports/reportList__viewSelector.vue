<template>
  <div>
    <a 
      :class="{selected: (selected === 'substance')}"
      tabindex="0"
      @keypress.enter="by('substance')"
      @click="by('substance')"
    > substance </a>
    <a
      :class="{selected: (selected === 'title')}"
      tabindex="0"
      @keypress.enter="by('title')"
      @click="by('title')"
    > title </a>
    <a 
      :class="{selected: (selected === 'author')}"
      tabindex="0"
      @keypress.enter="by('author')"
      @click="by('author')"
    > author </a>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: ""
    }
  },
  methods: {
    by(view) {
      this.$emit('selectView', view);
    }
  },
};
</script>

<style scoped>
a {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  margin-right: 1em;
  text-transform: uppercase;
}

.selected {
  font-weight: bold;
}
</style>