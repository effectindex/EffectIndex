<template>
  <div class="report__textBox">
    <h2 
      :style="{ backgroundColor: headerColour }"
      class="report__textBoxHeader"
    > 
      <fa 
        :icon="icon" 
        class="fa icon"
      />
      {{ header }}
    </h2>
    <!-- eslint-disable-next-line -->
    <div class="report__textBoxText" v-html="$md.render(text)"
    />
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
      type: Array,
      default: () => (["fas", "user"])
    }
  }
};
</script>