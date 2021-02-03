<template>
  <div class="peopleInput">
    <div class="controlsContainer">
      <select v-model="selected"> 
        <option
          v-for="person in people"
          :key="person._id"
          :value="person"
        >
          {{ person.full_name }}
        </option>
      </select>
      <button @click="addPerson">
        Add
      </button>
      <button @click="clear">
        Clear
      </button>
    </div>
    <div
      v-for="(person, index) in value"
      :key="index"
      class="person"
    >
      {{ person.full_name }}
      <button @click="removePerson(index)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      default: () => ({})
    },
    value: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      selected: undefined
    };
  },
  methods: {
    addPerson(e) {
      this.$emit('input', [this.selected, ...this.value]);
    },
    removePerson(index) {
      this.$emit('input', this.value.filter((person, i) => index !== i));
    },
    clear() {
      this.$emit('input', []);
    }
  }
};
</script>