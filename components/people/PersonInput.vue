<template>
  <div class="personInput">
    <select
      :value="value ? value._id : ''"
      @change="handleChange"
    >
      <option
        :selected="!value"
        disabled
        hidden
        value=""
      />
      <option
        v-for="p in people"
        :key="p._id"
        :value="p._id"
        :selected="value === p._id"
      >
        {{ p.full_name }} 
        <template v-if="p.alias">
          ({{ p.alias }})
        </template>
      </option>
    </select>
    <a @click="clearPerson"> Clear </a>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      people: []
    };
  },
  async fetch() {
    try {
      const { people } = await this.$axios.$get('/api/persons');
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    handleChange(e) {
      const { value } = e.target;
      const person = this.people.find(person => person._id === value);
      this.$emit('input', person);
    },
    clearPerson() {
      this.$emit('input', undefined);
    }
  }
};
</script>

<style scoped>
.personInput, .personInput select, .personInput option {
    outline: none;
}

.personInput select {
  padding: 0.5em;
  background-color: transparent;
  border: 1px solid #AAA;

}

.personInput option {
  background-color: transparent;
}
</style>