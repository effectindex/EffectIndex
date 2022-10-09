<template>
  <div
    class="panel"
    :style="{ width }"
  >
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
    },
    width: {
      type: String,
      default: 'auto'
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
  .panel-header > h4 {
    font-family: "Proxima Nova",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 20px; 
    color: #3d9991;
    letter-spacing: 1px;
  }
  .panel-content > * {
    margin: 0;
  }
  .panel-content {
    margin: 0;
  }
  .panel-content >>> ul {
    margin: 0;
    padding-left: 0;
  }
  .panel-content >>> h4 {
    font-size: 20px;
    margin: 0;
    padding: 0.5em 0 0 0.8em;
    text-transform: uppercase;
  }
  .panel-content >>> h4:not(:first-child) {
    border-top: 1px solid #ddd;
  }
  .panel-content >>> ul ul {
    margin: 0;
  }
  .panel-content >>> ul li {
    margin: 0.5em 0 0.5em 2em;
    font-weight: 300;
  }
  .panel-content >>> ul li::marker {
    color: #ddd;
  }
  .panel-content >>> h1, .panel-content >>> h2, .panel-content >>> h3, .panel-content >>> h4 {
    margin: 0.5em 0;
  }
</style>