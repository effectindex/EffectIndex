<template>
  <div class="action">
    <h4 
      v-show="title"
      class="actionTitle"
    >
      {{ title }}
    </h4>
    <ul class="actionList">
      <li 
        v-for="effect in effects"
        :key="effect._id"
        class="effectTitle"
      >
        <nuxt-link :to="`/effects/${effect.url}`">
          {{ effect.name }}
        </nuxt-link>
        <ul 
          v-if="effect.subarticles && effect.subarticles.length"
          class="subarticleList"
        >
          <li 
            v-for="(subarticle, index) in effect.subarticles"
            :key="index"
            class="subarticleListItem"
          >
            <nuxt-link :to="`/effects/${effect.url}?s=${subarticle.id}`">
              {{ subarticle.title }}
            </nuxt-link>
          </li>
        </ul>
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
  padding: 1em 0.5em;
}

.action:not(:last-child) {
  border-bottom: 1px solid #DDD;
}
.actionList {
  color: #AAA;
  padding: 0;
  padding-left: 1em;
  margin: 0;
  font-size: 13pt;
  columns: 250px;
}

.subarticleList {
  padding-left: 1em;
  margin: 0;
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
  line-height: 1.5em;
  margin-bottom: 0.25em;
}

.actionList:first-child .categoryTitle {
  border-top: 0;
}

</style>