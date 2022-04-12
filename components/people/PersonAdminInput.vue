<template> 
  <div class="personAdminInput">
    <div class="featuredInput">
      <input
        name="featuredCheck"
        type="checkbox"
        :checked="person.featured"
        @click="toggleFeatured"
      >
      <label for="featuredCheck"> Featured </label>
    </div>
    <div class="roleInput">
      <input
        v-model="role"
        placeholder="Role"
      >
    </div>
    <button @click="savePersonAdminDetails">
      Save
    </button>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      role: this.person.role ? this.person.role : undefined
    };
  },
  watch: {
    person: {
      deep: true,
      handler(person) {
        if (person.role !== this.role) {
          this.role = person.role;
        }
      }
    }
  },
  methods: {
    savePersonAdminDetails() {
      this.$emit('save', { _id: this.person._id, featured: this.person.featured, role: this.role });
    },
    toggleFeatured() {
      this.person.featured = !this.person.featured;
    }
  }
};
</script>

<style scoped>

  .personAdminInput {
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .featuredInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
  }

  .featuredInput label {
    color: #CCC;
    margin-left: 5px;
  }

  .featuredInput input {
    margin: 0 0.25em;
  }
</style>