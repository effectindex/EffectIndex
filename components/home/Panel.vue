<template>
  <div class="frontpagePanel">
    <div class="frontpagePanelTitleContainer">
      <h1 class="frontpagePanelTitle">
        {{ title }}
      </h1>
      <Icon
        v-show="icon"
        :filename="icon"
        class="panelIcon"
      />
    </div>
    <div class="frontpagePanelContent">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: undefined
    }
  }
};
</script>