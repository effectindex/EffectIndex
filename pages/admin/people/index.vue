<template>
  <div class="pageContent admin people">
    <h1> People Management </h1>
    <add-person
      @submit="newPerson"
    />
    <person 
      v-for="person in people"
      :key="person._id"
      :person="person" 
      @delete="deletePerson"
      @update="updatePerson"
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
    async newPerson(person) {
      try {
        let result = await this.$axios.post('/api/persons', { person });
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    },
    async updatePerson(person) {
      try {
        let result = await this.$axios.put(`/api/persons/${person._id}`, { person });
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    },
    async deletePerson(person) {
      try {
        let result = await this.$axios.delete(`/api/persons/${person._id}`);
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>