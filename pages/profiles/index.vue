<template>
  <div class="pageContent">
    <h1>
      People
      <Icon
        filename="users.svg"
        class="categoryIcon"
      />
    </h1>

    <p> This page lists the profiles of the Effect Index team and various dedicated individuals who have contributed significant amounts of work to this project. </p>

    <ul class="profileList">
      <li
        v-for="profile in profiles"
        :key="profile._id"
        class="profileListItem"
      >
        <nuxt-link :to="'/profiles/' + profile.username">
          <img
            :src="'/img/profiles/cropped/' + profile.profileImageCropped"
            :alt="profile.username"
            class="profileImage"
          >
        </nuxt-link>
        <span class="profile__username"> {{ profile.username }} </span>
      </li>
    </ul>
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
  async asyncData({ store }) {
    await store.dispatch("profiles/get");
  },
  scrollToTop: true,
  head() {
    return {
      title: "Contributors"
    };
  }
};
</script>

<style scoped>

.profileList {
  padding: 0;
  display: flex;
  flex-flow: wrap;
}

.profileListItem {
  flex: 1;
  text-align: center;
  min-width: 200px;
  list-style: none;
  margin: 20px 20px;
  display: inline-block;
  transition: filter 0.25s ease-in-out;
  filter: grayscale(1);
}

.profileListItem:hover {
  filter: grayscale(0);
}

.profile__username {
  display: block;
  font-size: 20px;
  margin-top: 1em;
  letter-spacing: 2px;
  color: #333;
}

.profileImage {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.25em;
}
</style>
