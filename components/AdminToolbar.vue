<template>
  <div class="adminToolbar">
    <nuxt-link
      class="item"
      :to="`${itemUrl}/${itemId}`"
    >
      <Icon 
        filename="edit.svg"
        style="height: 1em; width: 1em;"
      />
      <span class="itemDescription"> Edit Article </span>
    </nuxt-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    itemId: {
      type: String,
      default: undefined
    },
    itemUrl: {
      type: String,
      default: undefined
    }

  }
};
</script>

<style scoped>

  .adminToolbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .icon {
    margin-right: 10px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>