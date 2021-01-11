<template>
  <div class="people__addPerson">
    <a 
      class="people__addPersonButton"
      @click="toggleExpanded"
    >
      {{ expanded ? '-' : '+' }} Add Person
    </a>
    <person-details
      v-show="expanded"
      @submit="handleSubmit"
      @update="handleUpdate"
    />
  </div>
</template>

<script>
import PersonDetails from './PersonDetails';

export default {
  components: {
    PersonDetails
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
    handleSubmit(person) {
      this.$emit('submit', person);
    },
    handleUpdate(person) {
      this.$emit('update', person);
    }
  }
};
</script>

<style scoped>

  .people__addPersonButton {
    display: inline-block;
    background-color: #529426;
    color: white;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    width: 125px;
  }

  .people__addPersonButton:hover {
    color: white;
    background-color: #3f751c;
  }
</style>