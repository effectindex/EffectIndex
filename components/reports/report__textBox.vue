<template>
  <div class="report__textBox">
    <h2 
      :style="{ backgroundColor: headerColour }"
      class="report__textBoxHeader"> <i :class="headerIcon" /> {{ header }} </h2>
    <div
      class="report__textBoxText"
      v-html="$md.render(text)" />
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    headerColour: {
      type: String,
      default: "#FFFFFF"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    headerIcon() {
      return this.icon ? 'fa icon fa-' + this.icon : '';
    }
  },
};
</script>