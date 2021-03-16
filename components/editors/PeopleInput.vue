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
        (Remove)
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

<style scoped>
  .peopleInput .controlsContainer {
    display: flex;
    align-items: center;
  }

 .peopleInput .controlsContainer button {
   padding: 0.25em;
   width: 50px;
   margin: 0 10px;
 }

 .peopleInput .person {
   font-weight: bold;
 }

 .peopleInput .person button {
   width: 100px;
   padding: 0.25em;
   margin: 0;
   color: red;
   border: none;
   background-color: transparent;
 }


</style>