<template>
  <div class="role-input">
    <div class="add-roles">
      <select v-model="selectedRole">
        <option
          v-for="(role, index) in availableRoles"
          :key="index"
        >
          {{ role }}
        </option>
      </select>
      <button @click="addRole">
        Add Role
      </button>
    </div>
    <ul
      v-if="value"
      class="user-role-list"
    >
      <li
        v-for="(role, index) in value"
        :key="index"
        class="role-list-item"
      >
        <span class="role"> {{ role }} </span>
        <a @click="removeRole(index)">
          <icon
            filename="times.svg"
            color="red"
          />
        </a>
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
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedRole: undefined,
      availableRoles: ['admin', 'editor', 'reports', 'effects', 'replications', 'articles', 'effects-moderator', 'reports-moderator', 'replications-moderator', 'articles-moderator']
    };
  },
  methods: {
    addRole() {
      if (this.selectedRole) {
        this.$emit('input', [...this.value, this.selectedRole]);
      }
    },
    removeRole(index) {
      this.$emit('input', this.value.filter((role, i) => index !== i));
    }
  }
};
</script>

<style scoped>
.icon {
  height: 1em;
  width: 1em;
}

.role-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #CCC;
  border-radius: 10px;
  text-align: center;
  padding: 5px 10px;
  margin: 0.5em 0;
}

.role-list-item:not(:first-child) {
  margin-right: 1em;
}

.role-list-item a {
  cursor: pointer;
}

.role-list-item .role {
  display: inline-block;
  margin-right: 0.5em;
}

.role {
  padding-bottom: 2px;
}

.add-roles {
  display: flex;
  align-items: center;
}

.add-roles select {
  height: 30px;
  border: 1px solid #CCC;
  font-size: 18px;
}

.add-roles button {
  height: 30px;
  border: 1px solid #CCC;
  margin-left: 1em;
}

.user-role-list {
  display: flex;
  list-style: none;
  padding-left: 0;
  flex-wrap: wrap;
}

.user-role-list li {
  margin-right: 1em;
}
</style>