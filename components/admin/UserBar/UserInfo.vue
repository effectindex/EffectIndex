<template>
  <div class="user-info">
    <div class="username">
      <nuxt-link to="/admin/me">
        {{ user.username }}
      </nuxt-link>
    </div>
    <div class="logout">
      <a @click="() => $auth.logout()"> (logout) </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: undefined
    }
  }
};
</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: row;
}

.user-info .username a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0 5px;
}

.user-info .logout {
  opacity: 0.7;
}

.user-info .logout a {
  cursor: pointer;
}

.user-info .logout a:hover {
  color: #DDD;
}
</style>