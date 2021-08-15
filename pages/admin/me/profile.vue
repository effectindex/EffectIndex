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
  head() {
    return {
      title: "Your Profile"
    };
  },
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
      try {
        await this.$axios.$post('/api/persons/me', { person });
        this.$toasted.show('Your profile was successfully updated.', { duration: 2000, type: 'success' });
      } catch (error) {
        console.log(error);
        this.$toasted.show('There was an error updating your profile.', { duration: 2000, type: 'error' });
      }
    },
    async saveProfile(person) {
      try {
        await this.$axios.$post('/api/persons/me', { person });
        this.$toasted.show('Your profile was successfully saved.', { duration: 2000, type: 'success' });
      } catch(error) {
        console.log(error);
        this.$toasted.show('There was an error saving your profile.', { duration: 2000, type: 'error' });
      }
    }
  }
};
</script>
