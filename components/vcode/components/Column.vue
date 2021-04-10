<template>
  <div class="column">
    <div
      v-if="title"
      class="column-header"
    >
      <h4> {{ title }} </h4>
      <Icon
        v-if="icon"
        :filename="icon"
      />
    </div>
    <div class="column-content">
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
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>
  h4 {
    margin: 0;
  }

  .icon {
    height: 24px;
    width: 24px;
    opacity: 0.75;
  }

  .column {
    border: 1px solid #DDD;
  }

  .column-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 14pt;
      margin: 0;
      padding: 0.5em;
      background-color: rgb(240, 240, 240);
      border-bottom: 1px solid #DDD;
      letter-spacing: 1px;
  }

  .column-content {
    margin: 0.5em;
  }

  .column-content >>> ul {
    margin: 0;
  }

  .column-content >>> ul li {
    margin: 0.25em;
  }

  .column-content >>> h1, .column-content >>> h2, .column-content >>> h3, .column-content >>> h4 {
    margin: 0.5em 0;
  }
</style>