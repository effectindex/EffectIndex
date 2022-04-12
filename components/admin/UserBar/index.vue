<template>
  <nav class="user-bar">
    <div class="user-bar-content">
      <user-info :user="$auth.user" />
      <user-menu :user="$auth.user" />
    </div>
  </nav>
</template>

<script>
import UserInfo from './UserInfo';
import UserMenu from './UserMenu';

export default {
  components: {
    UserInfo,
    UserMenu
  }
};
</script>

<style scoped>
  .user-bar {
    background-color: rgb(61, 153, 145);
    color: white;
    padding: 5px 10px;
    position: sticky;
    top: 0;
    z-index: 6;
  }

  .user-bar-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
</style>