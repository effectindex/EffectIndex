<template>
  <div
    class="categoryContainer"
  >
    <h3 class="categoryTitle">
      {{ title }}  sadfsdfsd
      <Icon
        v-show="icon"
        :filename="icon"
        class="icon"
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
    Icon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Array],
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
};
</script>


<style>
.icon {
  height: 1em;
  width: 1em;
}

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

.icon {
  margin: 0 5px;
  height: 1.1em;
}

.categoryTitle {
  display: flex;
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