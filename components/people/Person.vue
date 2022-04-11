<template>
  <div class="person">
    <div class="info">
      <span :class="{ expanded }">
        {{ person.full_name }}
      </span>
      <div class="controls">
        <a @click="editPerson">
          <icon
            style="display: inline-block; height: 1em; width: 1em;"
            color="black"
            filename="edit.svg"
          />
        </a>
        <a @click="deletePerson">
          <icon
            style="display: inline-block; height: 1em; width: 1em;"
            color="red"
            filename="times.svg"
          />
        </a>
      </div>
    </div>
    <person-details
      v-show="expanded"
      :person="person"
      @update="updatePerson"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import PersonDetails from './PersonDetails.vue';

export default {
  components: {
    Icon,
    PersonDetails
  },
  props: {
    person: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    deletePerson() {
      this.$emit('delete', this.person);
    },
    updatePerson() {
      this.$emit('update', this.person);
      this.expanded = false;
    },
    editPerson() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style scoped>
  .info {
    display: flex;
    flex-direction: row;
    height: 25px;
  }

  .info .expanded {
    font-weight: bold;
    font-size: 1.5em;
  }

  .person .controls {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .person .controls a {
    height: 1em;
    opacity: 0.6;
    cursor: pointer;
    margin-right: 1em;
  }

  .person .controls a:hover {
    opacity: 1;
  }
</style>