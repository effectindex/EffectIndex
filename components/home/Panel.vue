<template>
  <div class="frontpagePanel">
    <div class="frontpagePanelTitleContainer">
      <h1 class="frontpagePanelTitle"> {{ title }} </h1>
      <fa 
        v-if="icon"
        :icon="icon"
        class="fa categoryIcon"
        style="font-size: 1.1em; margin: 0.25em;" />
    </div>
    <div class="frontpagePanelContent">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: undefined
    }
  }
};
</script>