<template>
  <div class="frontpagePanel">
    <h1 class="frontpagePanelTitle"> {{ title }} </h1>
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
    }
  }
};
</script>