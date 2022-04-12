<template>
  <div class="personInput">
    <select
      v-model="selected"
      @change="changed"
    >
      <option
        v-for="person in people"
        :key="person._id"
        :value="person._id"
      >
        {{ personName(person) }}
      </option>
    </select>

    <button @click="clear">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type:  String,
      default: undefined
    }
  },
  data() {
    return {
      people: [],
      selected: this.value
    };
  },
  async fetch() {
    try {
      /* Will only respond with public profiles */
      const { people } = await this.$axios.$get('/api/persons');
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    changed() {
      this.$emit('input', this.selected);
    },
    clear() {
      this.selected = undefined;
      this.$emit('clear');
    },
    personName(person) {
      const { full_name, alias } = person;
      return `${full_name ? full_name : ''}${full_name && alias ? ' ' : ''}${alias ? '\"' + alias + '\"' : ''}`;
    }
  }
};
</script>

<style> 
.personInput button {
  padding: 0.5em;
  margin: 0;
}
</style>