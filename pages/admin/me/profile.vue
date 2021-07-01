<template>
  <div class="pageContent">
    <h1> Your Profile </h1>
    <person-details 
      :person="person"
      @update="updateProfile"
      @submit="saveProfile"
    />
  </div>
</template>

<script>
import PersonDetails from '@/components/people/PersonDetails';

export default {
  components: {
    PersonDetails
  },
  async asyncData({ $axios }) {
    try {
      const { person } = await $axios.$get('/api/persons/me');

      return { person: person ? person : undefined };

    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateProfile(person) {
      await this.$axios.$post('/api/persons/me', { person });
    },
    async saveProfile(person) {
      try {
        await this.$axios.$post('/api/persons/me', { person });
      } catch(error) {
        console.log(error);
      }
    }
  }
};
</script>