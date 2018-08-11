<template>
  <div class="action">
    <h4 
      v-show="title"
      class="actionTitle"> {{ title }} </h4>
    <ul class="actionList">
      <li 
        v-for="effect in effects"
        :key="effect._id"
        class="effectTitle">
        <nuxt-link :to="`/effects/${effect.url}`"> {{ effect.name }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined
    },
    effects: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

.action {
  padding: 0.5em;
  margin: 0.5em 0 1em 0;
}

.actionList {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 13pt;
  columns: 250px;
}

.actionTitle {
  font-size: 13pt;
  font-family: 'Titillium Web',-apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  color: #444;
  margin: 0;
  margin-bottom: 0.5em;
}

.effectTitle {
  margin: 0;
  padding: 0;
}

.actionList:first-child .categoryTitle {
  border-top: 0;
}

</style>