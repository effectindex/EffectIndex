<template>
  <div class="gallery__effectSelectorContainer">
    <ul 
      v-if="effects"
      class="gallery__effectSelector"
    >
      <li
        v-for="effect in effects"
        :key="effect._id"
        class="gallery__effectSelectorItem"
      >
        <a
          :class="(effect._id === selected ? 'active' : '')"
          @click="selectEffect(effect._id)"
        > {{ effect.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    effects: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: ""
    }
  },
  methods: {
    selectEffect(effectId) {
      this.$store.dispatch("gallery/setSelectedEffect", effectId);
      this.$emit('effectSelected');
    }
  }
};
</script>

<style scoped>

.gallery__effectSelector {
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 200px;
}

.gallery__effectSelectorItem {
  cursor: pointer;
  margin-left: 0;
  padding: 2px 0;
}

.gallery__effectSelectorItem:last-of-type {
  border-right: none;
}

.gallery__effectSelectorText {
  font-style: italic;
  padding-left: 1em;
}

.active {
  font-weight: bold;
}
</style>