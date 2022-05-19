<template>
  <div class="pageContent">
    <h1> The Team </h1>
    <people-profile-list :people="people" />
  </div>
</template>

<script>
import PeopleProfileList from "@/components/people/PeopleProfileList";

export default {
  components: {
    PeopleProfileList
  },
  data() {
    return {
      people: []
    };
  },
  head() {
    return {
      title: "People"
    };
  },
  async fetch() {
    try {
      const {people} = await this.$axios.$get('/api/persons/featured');
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  },
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
