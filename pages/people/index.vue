<template>
  <div class="pageContent">
    <h1> The Team </h1>
    <div
      v-for="(role, index) in roles"
      :key="index"
    >
      <h3> {{ role }} </h3>
      <div
        v-for="person in peopleWithRole(role)"
        :key="person._id"
        class="peopleList"
      >
        <div class="personContainer">
          <nuxt-link :to="person.profile_url ? `/people/${person.profile_url}` : '/people'">
            <img
              v-if="person.profile_image"
              :src="'/' + person.profile_image"
              :alt="`Profile image of ${person.full_name || person.alias}`"
            >
          </nuxt-link> <br>
          <span class="personName"> {{ person.full_name || person.alias }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: []
    };
  },

  computed: {
    roles() {
      const roles = [];
      for (const person of this.people) {
        if (!roles.includes(person.role)) {
          roles.push(person.role);
        }
      }
      return roles;
    }
  },
  async fetch() {
    try {
      const { people } = await this.$axios.$get('/api/persons/featured');
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    peopleWithRole(role) {
      return this.people.filter(person => person.role === role);
    },
  }
};
</script>

<style scoped>
.peopleList {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.personContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personContainer .personName {
  font-weight: bold;
}

.personContainer:not(:first-child) {
  margin-left: 5px;
}
</style>