<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script functional>
import vcode from '@/components/vcode/rendered';

export default ({
  mounted() {
    console.log(this.$slots.default);
  }
});

</script>