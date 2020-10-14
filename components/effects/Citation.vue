<template>
  <li
    :id="'cite-' + from"
    @click="$emit('click')"
  >
    <div class="citation__contents">
      <a 
        v-if="!no || (Number(no) === 1)"
        :href="'#ref-' + from"
      > 
        <Icon
          filename="angle-double-up.svg"
          style="height: 1em;"
        /> </a>
      <span v-else> 
        <Icon
          filename="angle-double-up.svg"
          style="height: 1em;"
        />
        <a 
          v-for="num in Number(no)"
          :key="num"
          :href="'#ref-' + from + '-' + num"
        >[{{ num }}]</a> 
      </span>
      <slot />
    </div>
  </li>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
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