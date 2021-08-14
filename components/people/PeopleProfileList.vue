<template>
  <ul class="roleList">
    <li
      v-for="(role, index) in roles"
      :key="index"
      class="role"
    >
      <h3 v-show="role">
        {{ role }}
      </h3>

      <ul
        class="peopleList"
      >
        <person-profile-item
          v-for="person in filterPeopleByRole(role)"
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
        roles() {
            return [...new Set(this.people.map(person => person.role))];
        }
    },
    methods: {
        filterPeopleByRole(role) {
            return this.people.filter(person => person.role === role);
        },
    }

};
</script>

<style scoped>
    ul.roleList, ul.peopleList {
        list-style: none;
        padding-left: 0;
    }
</style>
