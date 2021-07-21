<template>
  <div class="pageContent admin people">
    <h1> People </h1>
    <add-person
      @submit="newPerson"
    />
    <person 
      v-for="person in people"
      :key="person._id"
      :person="person" 
      @delete="deletePerson"
      @update="updatePerson"
      @saveMeta="saveMeta"
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
        await this.$axios.post('/api/persons', { person });
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    },
    async updatePerson(person) {
      try {
        await this.$axios.put(`/api/persons/${person._id}`, { person });
        this.$fetch();
      } catch (error) {
        console.log(error);
      }
    },
    async saveMeta(person) {
      try {
        await this.$axios.$put(`/api/persons/meta/${person._id}`, { person });
      } catch (error) {
        console.log(error);
      }
    },
    async deletePerson(person) {
      try {

        this.$toasted.show('Really delete?', {
          action: [{
              text: 'Yes, delete!',
              onClick: async (e, toastObject) => {
                await this.$axios.delete(`/api/persons/${person._id}`);
                toastObject.goAway(0);
                this.$fetch();
              }
            },
            {
              text: 'No, keep!',
              onClick: (e, toastObject) => toastObject.goAway()
            }]
        });


      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>