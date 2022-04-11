<template>
  <ul class="effectInput">
    <li 
      v-for="effect in effects"
      :key="effect._id"
      class="effectInputItem"
    >
      <input 
        type="checkbox"
        :checked="selectedEffects.includes(effect._id)"
        @change="toggleSelection(effect._id)"
      >
      {{ effect.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      effects: [],
      selectedEffects: this.value
    };
  },
  async fetch () {
    try {
      const results = await this.$axios.get('/api/effects');
      const { effects } = results.data;
      this.effects = effects;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    toggleSelection(id) {
      this.selectedEffects = this.selectedEffects.includes(id) ?
      this.selectedEffects.filter(effectId => effectId !== id) :
      [...this.selectedEffects, id];
      this.$emit('input', this.selectedEffects);
    }
  }
};
</script>

<style scoped>
  .effectInput {
    list-style: none;
    columns: 4;
    padding-left: 0;
  }

  .effectInputItem {
    margin: 2px 0;
  }
</style>