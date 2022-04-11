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
              <Icon
                filename="edit.svg"
                style="height: 1em; width: 1em; display: inline-block;"
              />
              (sort: {{ profile.sortOrder }})
            </nuxt-link>
          </td>
          <td>
            <a
              class="delete"
              @click="deleteProfile(profile._id)"
            >
              <Icon
                filename="times.svg"
                style="height: 1em; width: 1em;"
                color="red"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  computed: {
    profiles() {
      return this.$store.state.profiles.list;
    }
  },
  async fetch({ store }) {
    await store.dispatch("profiles/get");
  },
  methods: {
    async deleteProfile(id) {
      await this.$store.dispatch("profiles/delete", id);

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
