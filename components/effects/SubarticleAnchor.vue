<template>
  <div>
    <h3 
      v-if="!size || size === 'h3'"
      :id="id">
      <slot />
    </h3>
    <h4 
      v-else-if="size === 'h4'"
      :id="id">
      <slot />
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    }
  }
};
</script>
