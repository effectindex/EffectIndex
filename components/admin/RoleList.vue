<template>
  <ul class="role-list">
    <li
      v-for="(role, key) in roles"
      :key="key"
    >
      <!-- eslint-disable-next-line -->
      {{ role }}{{ key < (roles.length - 1) ? ',&nbsp;' : ' ' }}
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

.role-list li {
  display: inline-block;
}
</style>