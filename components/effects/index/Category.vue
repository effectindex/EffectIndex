<template>
  <div
    class="categoryContainer"
  >
    <h3 class="categoryTitle">
      <nuxt-link 
        v-if="page"
        :to="page"
      >
        {{ title }} 
      </nuxt-link>
      <template v-else>
        {{ title }}
      </template>
      <Icon
        v-if="icon"
        :filename="icon"
        class="panelIcon"
      />
    </h3>
    <div class="actionContainer">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  props: {
    page: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
};
</script>


<style scoped>
.categoryContainer {
  flex: 1;
  min-width: 250px;
  margin: 0 auto 1em auto; 
  border: 1px solid #DDD;
  background-color: rgb(253, 253, 253);
}

.categoryContainer:last-child {
  margin-bottom: 0;
}

.categoryTitle {
  display: flex;
  font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14pt;
  margin: 0;
  text-align: left;
  padding: 0.5em;
  background-color: rgb(240, 240, 240);
  border-bottom: 1px solid #DDD;
  letter-spacing: 1px;
}

@media(max-width: 500px) {
  .categoryContainer {
    margin: 0.5em auto;
    border: 1px solid #DDD;
  }

  .categoryContainer:last-child {
    border: 1px solid #DDD;
  }

}


</style>