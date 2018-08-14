<template>
  <li
    :id="'cite-' + from"
    @click="$emit('click')">
    <div class="citation__contents">
      <a 
        v-if="!no || (Number(no) === 1)"
        :href="'#ref-' + from"> 
        <fa
          :icon="['far', 'angle-double-up']"
          style="height: 1em;" /> </a>
      <span v-else> 
        <fa
          :icon="['far', 'angle-double-up']"
          style="height: 1em;" />
        <a 
          v-for="num in Number(no)"
          :key="num"
          :href="'#ref-' + from + '-' + num">[{{ num }}]</a> 
      </span>
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    from: {
      type: String,
      default: undefined
    },
    no: {
      type: String,
      default: undefined
    }
  }
};
</script>