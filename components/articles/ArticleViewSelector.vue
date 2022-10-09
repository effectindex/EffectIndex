<template>
  <div class="articleViewSelector">
    <a 
      :class="{selected: (selected === 'publishDate')}"
      tabindex="0"
      @keypress.enter="by('publishDate')"
      @click="by('publishDate')"
    > publish date </a>
    <a
      :class="{selected: (selected === 'author')}"
      tabindex="0"
      @keypress.enter="by('author')"
      @click="by('author')"
    > author </a>
    <a 
      :class="{selected: (selected === 'title')}"
      tabindex="0"
      @keypress.enter="by('title')"
      @click="by('title')"
    > title </a>
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