<template>
  <div class="report__textBox">
    <h2 
      :style="{ backgroundColor: headerColour }"
      class="report__textBoxHeader"
    > 
      <Icon
        :filename="icon" 
        style="height: 1em; width: 1.2em;"
      />
      {{ header }}
    </h2>
    <!-- eslint-disable-next-line -->
    <div class="report__textBoxText" v-html="$md.render(text)"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
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
      default: "user.svg"
    }
  }
};
</script>

<style scoped>
  .report__textBoxText {
    white-space: pre-line;
  }
</style>