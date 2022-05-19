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
  head() {
    return {
      title: "Modify People"
    };
  },
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
      const { people } = await this.$axios.$get('/api/persons/all');
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async newPerson(person) {
      try {
        await this.$axios.post('/api/persons', { person });
        this.$toasted.show('The person was successfully created.', { duration: 2000, type: 'success' });
        this.$fetch();
      } catch (error) {
        this.$toasted.show('There was an error saving the person. Check console.', { duration: 2000, type: 'error' });
        console.log(error);
      }
    },
    async updatePerson(person) {
      try {
        await this.$axios.put(`/api/persons/${person._id}`, { person });
        this.$toasted.show('The person was successfully updated.', { duration: 2000, type: 'success' });
        this.$fetch();
      } catch (error) {
        this.$toasted.show('There was an error updating the person. Check console.', { duration: 2000, type: 'error' });
        console.log(error);
      }
    },
    async saveMeta(person) {
      try {
        await this.$axios.$put(`/api/persons/meta/${person._id}`, { person });
        this.$toasted.show('Person metadata was successfully saved.', { duration: 2000, type: 'success' });
      } catch (error) {
        this.$toasted.show('Metadata was not successfully saved. Check console.', { duration: 2000, type: 'error' });
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
        this.$toasted.show('There was an error deleting the person. Check console.', { duration: 2000, type: 'error' });
        console.log(error);
      }
    }
  }
};
</script>
