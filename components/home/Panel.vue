<template>
  <div class="frontpagePanel">
    <div class="frontpagePanelHeader">
      <div class="frontpagePanelTitleContainer">
        <h1 class="frontpagePanelTitle">
          {{ title }}
        </h1>
        <div class="frontpagePanelDescription">
          {{ description }}
        </div>
      </div>
      <Icon
        v-show="icon"
        :filename="icon"
        class="frontpagePanelIcon"
      />
    </div>
    <div class="content">
      <slot 
        name="content"
        class="content"
      />
    </div>
    <div class="stub">
      <slot 
        name="stub"
      />
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
    description: {
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

<style scoped>
  .frontpagePanel {
    display: flex;
    flex-direction: column;
    border: 1px solid #DDD;
    background-color: rgb(252, 252, 252);
  }

  .frontpagePanel:not(:last-child) {
    margin-bottom: 1em;
  }

  .frontpagePanelHeader {
    border-bottom: 1px solid #DDD;
    background-color: #F0F0F0;
    padding: 5px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .frontpagePanelDescription {
    font-size: 14px;
    color: #777;
    font-style: italic;
  }

  .frontpagePanelTitleContainer {
    flex: 1;
    padding-right: 20px;
  }

  .frontpagePanelTitleContainer h1 {
    padding: 0;
  }

  .frontpagePanelTitle {
    margin: 0;
    margin-top: -3px;
    font-size: 16pt;
  }

  .frontpagePanelIcon {
    height: 30px;
    width: 30px;
    opacity: 0.6;
  }

  .frontpagePanel .stub {
    font-size: 12pt;
    color: #666;
    border-top: 1px solid #DDD;
    background-color: #F4F4F4;
    padding: 4px 12px;
  }

  .frontpagePanel .content {
    display: flex;
    align-items: center;
  }
</style>