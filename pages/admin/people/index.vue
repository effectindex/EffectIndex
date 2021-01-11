<template>
  <div class="pageContent admin people">
    <h1> People Management </h1>
    <add-person
      @submit="newPerson"
      @update="updatePerson"
    />
    <person 
      v-for="person in people"
      :key="person._id"
      :person="person" 
    />
  </div>
</template>

<script>
import AddPerson from '@/components/people/AddPerson';
import Person from '@/components/people/Person';

export default {
  components: {
    AddPerson,
    Person
  },
  data() {
    return {
      people: undefined
    };
  },
  async fetch() {
    try {
      const results = await this.$axios.get('/api/persons');
      const { people } = results.data;
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    newPerson(person) {
      try {
        let result = this.$axios.post('/api/persons', { person });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    updatePerson(person) {
      try {
        let result = this.$axios.post(`/api/persons/${person._id}`, { person });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>