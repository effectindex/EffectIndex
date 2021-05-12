<template>
  <ul class="role-list">
    <li
      v-for="(role, key) in roles"
      :key="key"
    >
      {{ role }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    roles: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.role-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>