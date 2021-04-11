<template>
  <div class="panel">
    <div
      v-if="title"
      class="panel-header"
    >
      <h4> {{ title }} </h4>
      <Icon
        v-if="icon"
        :filename="icon"
      />
    </div>
    <div class="panel-content">
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
  .icon {
    height: 24px;
    width: 24px;
    opacity: 0.75;
  }

  .panel {
    border: 1px solid #DDD;
  }

  .panel:not(:last-child) {
    margin-bottom: 10px;
  }

  .panel-header {
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

  .panel-header h4 {
    margin: 0;
  }

  .panel-content > * {
    margin: 0;
  }

  .panel-content {
    margin: 0.5em;
  }

  .panel-content >>> ul {
    margin: 1em 0;
  }

  .panel-content >>> ul li {
    margin: 0.25em;
  }

  .panel-content >>> h1, .panel-content >>> h2, .panel-content >>> h3, .panel-content >>> h4 {
    margin: 0.5em 0;
  }
</style>