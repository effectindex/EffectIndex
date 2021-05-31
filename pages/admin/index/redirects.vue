<template>
  <div class="pageContent admin redirects">
    <h1> Redirects </h1>
    <ul class="redirects-list">
      <redirect-input
        ref="redirectInput"
        @submit="submitRedirect"
      />
      <redirect-list-item
        v-for="redirect in redirects"
        :key="redirect._id"
        :redirect="redirect"
        @delete="deleteRedirect"
        @update="updateRedirect"
      />
    </ul>
  </div>
</template>

<script>

import RedirectListItem from '@/components/redirects/RedirectListItem';
import RedirectInput from '@/components/redirects/RedirectInput';

export default {
  middleware: ['auth'],
  components: {
    RedirectListItem,
    RedirectInput
  },
  data() {
    return {
      redirects: undefined
    };
  },
  async fetch() {
    try {
      const { redirects } = await this.$axios.$get('/api/redirects');
      this.redirects = redirects;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async submitRedirect(redirect) {
      try {
        await this.$axios.$post('/api/redirects', { redirect });
        this.$refs.redirectInput.clearFields();
        this.$toasted.show('The redirect was successfully added.', { duration: 2000, type: 'success' });
        this.$store.dispatch('redirects/get');
        this.$fetch();
      } catch (error) {
        this.$toasted.show('There was an error adding the redirect.', { duration: 2000, type: 'success' });
        console.log(error);
      }
    },

    async deleteRedirect(id) {
      try {
        await this.$axios.$delete(`/api/redirects/${id}`);
        this.$toasted.show('The redirect was successfully deleted.', { duration: 2000, type: 'success' });
        this.$store.dispatch('redirects/get');
        this.$fetch();
      } catch (error) {
        this.$toasted.show('There was an error deleting the redirect.', { duration: 2000, type: 'success' });
        console.log(error);
      }
    },

    async updateRedirect(redirect) {
      const { _id } = redirect;
      try {
        await this.$axios.$put(`/api/redirects/${_id}`, { redirect });
        this.$toasted.show('The redirect was successfully updated.', { duration: 2000, type: 'success' });
        this.$store.dispatch('redirects/get');
        this.$fetch();
      } catch (error) {
        this.$toasted.show('There was an error updating the redirect.', { duration: 2000, type: 'success' });
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
  .redirects-list {
    width: 100%;
    padding-left: 0;
    list-style: none;
  }
</style>