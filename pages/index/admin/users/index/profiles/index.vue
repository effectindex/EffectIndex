<template>
  <div>
    <hr>
    <table>
      <thead>
        <tr>
          <td> Username </td> <td /> <td />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="profile in profiles"
          :key="profile._id"
        >
          <td>
            <nuxt-link
              :to="'/profiles/' + profile.username"
              class="profileList__username"
            >
              {{ profile.username }}
            </nuxt-link>
          </td>
          <td>
            <nuxt-link
              :to="'/admin/users/profiles/' + profile._id"
            >
              <fa
                :icon="['far', 'edit']"
                class="fa"
              />
              (sort: {{ profile.sortOrder }})
            </nuxt-link>
          </td>
          <td>
            <a
              class="delete"
              @click="deleteProfile(profile._id)"
            >
              <fa
                :icon="['far', 'times']"
                class="fa"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    profiles() {
      return this.$store.state.profiles;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getProfiles");
  },
  methods: {
    async deleteProfile(id) {
      await this.$store.dispatch("deleteProfile", id);

        this.$toasted.show(
          'The profile was successfully deleted. You\'re a horrible person.',
          {
            duration: 2000,
            type: 'success'
          }
        );

    }
  }
};
</script>

<style scoped>
.delete {
  color: red;
}

.profileList {
  margin-top: 1em;
  padding-left: 1em;
}

.profileListItem {
  list-style: none;
  color: black;
  margin-left: 0.25em;
}

.profileList__username {
  font-style: italic;
}
</style>
