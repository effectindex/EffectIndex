<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ""
    }
  }
};
</script>