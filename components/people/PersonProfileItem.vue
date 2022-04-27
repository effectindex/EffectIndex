<template>
  <li class="peopleListItem">
    <figure>
      <figcaption class="roleInfo">
        <span class="name"> {{ person.role }} </span>
      </figcaption>
      <nuxt-link :to="person.profile_url ? `/people/${person.profile_url}` : '/people'">
        <img
          v-if="person.profile_image"
          :src="'/' + person.profile_image"
          :alt="`Profile image of ${person.full_name || person.alias}`"
        >
      </nuxt-link>
      <figcaption class="personInfo">
        <span class="name"> {{ person.full_name || person.alias }} </span>
      </figcaption>
    </figure>
  </li>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: undefined
    }
  }
};
</script>

<style scoped>

.roleInfo {
  text-align: left;
  font-size: 21px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  color: #4a4a4a;
  margin: 0 0 0.5em 0;
}

li.peopleListItem {
  border-radius: 10px;
  width: 275px;
  margin: 10px;
}

li.peopleListItem figure {
  text-align: center;
}

li.peopleListItem img {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

li.peopleListItem figcaption {
  font-family: 'Proxima Nova', sans-serif;
}
</style>
