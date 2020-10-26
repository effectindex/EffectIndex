<template>
  <div class="relatedEffectsCategory">
    <div class="relatedEffectsCategoryTitleContainer">
      <Icon
        :filename="icon"
        :color="color"
        style="height: 35px; width: 35px;"
      />
      <h2> {{ name }} </h2>
    </div>
    <ul
      class="relatedEffectsCategoryList"
    >
      <li
        v-for="effect in effects"
        :key="effect._id"
      >
        <nuxt-link
          :to="`/effects/${effect.url}`"
          class="relatedEffectsEffect"
        >
          {{ effect.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    effects: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: 'Name'
    },
    icon: {
      type: String,
      default: 'eye.svg'
    },
    color: {
      type: String,
      default: 'black'
    }
  }
};
</script>

<style scoped>
.relatedEffectsCategory {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.relatedEffectsCategoryTitleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 150px;
}

.relatedEffectsCategoryTitleContainer h2 {
  margin-left: 10px;
  font-size: 18px;
  font-weight: normal;
}

.relatedEffectsCategoryList {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5em;
}

.relatedEffects

.relatedEffectsEffect {
  display: inline-block;
  color: white;
  top: 0;
  left: 0;
  background-color: #2e2e2e;
  text-decoration: none;
  margin-right: 10px;
  padding: 6px 12px;
  cursor: pointer;
  opacity: 0.85;
  transition: all 0.2s;
  text-align: center;
  border-radius: 5px;
}

.relatedEffectsEffect:hover {
    background-color: #444;
}
</style>