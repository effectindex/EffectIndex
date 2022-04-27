<template>
  <ul class="roleList">
    <li
      v-for="(peopleRow, index) in getPeople"
      :key="index"
      class="role"
    >
      <ul class="peopleList">
        <person-profile-item
          v-for="person in peopleRow"
          :key="person._id"
          :person="person"
        />
      </ul>
    </li>
  </ul>
</template>

<script>
import PersonProfileItem from "./PersonProfileItem";

export default {
  components: {
    PersonProfileItem
  },

  props: {
    people: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    getPeople() {
      // TODO: This should be editable via the website somewhere
      const order = {"Founder": 1, "Developer": 2, "Editor": 3, "Proofreader": 4, "Former Dev": 5};
      let people = this.people;
      people = people.sort(function (a, b) {
        return order[a.role] - order[b.role];
      });

      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < people.length; i += chunkSize) {
        chunks.push(people.slice(i, i + chunkSize));
      }
      return chunks;
    }
  }

};
</script>

<style scoped>
ul.role {
  margin-bottom: 0;
}

ul.roleList, ul.peopleList {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

ul.peopleList > li.peopleListItem {
  display: inline-block;
}
</style>
