<template>
  <div class="role-input">
    <h3> Roles: </h3>
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
    <h3> Available Roles: </h3>
    <ul class="add-roles">
      <li
        v-for="(role, index) in filteredRoles"
        :key="index"
      >
        <a @click="giveRole(role)"> {{ role }} </a>
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
  computed: {
    filteredRoles() {
      return this.availableRoles.filter(role => !this.value.includes(role));
    }
  },
  methods: {
    addRole() {
      if (this.selectedRole) {
        this.$emit('input', [...this.value, this.selectedRole]);
      }
    },
    removeRole(index) {
      this.$emit('input', this.value.filter((role, i) => index !== i));
    },
    giveRole(role) {
      if (!this.value.includes(role)) {
        this.$emit('input', [...this.value, role]);
      }
    }
  }
};
</script>

<style scoped>
.icon {
  height: 1em;
  width: 1em;
}

ul.add-roles {
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.add-roles li {
  display: block;
  cursor: pointer;
  margin-right: 1em;
  white-space: nowrap;
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