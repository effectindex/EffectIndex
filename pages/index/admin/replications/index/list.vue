<template>
  <div class="pageContent">
    <hr>
    <label for="effectFilter" > Filter by Effect:
      <div class="inputContainer">
        <input
          type="text"
          class="filterInput"
          @input="debouncedInput"
          @focus="toggleFocus"
          @blur="toggleFocus"> <a @click="clearFilter"> (clear) </a>
        <div 
          v-show="focused"
          class="filterListContainer">
          <ul
            class="filterList"> 
            <li 
              v-for="effect in filteredEffects"
              :key="effect._id"> {{ effect.name }} </li>
          </ul>
        </div>
      </div>
    </label>
    <table class="replicationTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Artist </td>
          <td> Type </td>
        </tr>
      </thead>
      <tbody>
        <replication-table-row 
          v-for="replication in filteredReplications"
          :key="replication._id"
          :replication="replication"
          @deleteReplication="deleteReplication" />
      </tbody>
    </table>
  </div>
</template>

<script>
import ReplicationTableRow from "@/components/replications/ReplicationTableRow.vue";
import debounce from 'debounce';

export default {
  components: {
    ReplicationTableRow
  },
  data() {
    return {
      filter: "",
      focused: false
    };
  },
  computed: {
    replications() {
      return this.$store.state.replications;
    },
    filteredEffects() {
      let effects = this.$store.state.effects;
      let foundEffects = effects.filter((effect) => effect.name.toLowerCase().indexOf(this.filter) > -1);
      return foundEffects;
    },
    filteredReplications() {
      let filter = this.filter.toLowerCase();
      let replications = this.$store.state.replications;
      if (!filter.length) return replications;

      let effectIds = this.filteredEffects.map((effect) => effect._id);

      let matchedReplications = replications.filter((replication) =>
        replication.associated_effects.some((associated_effect) =>
          (effectIds.indexOf(associated_effect) > -1)));
      
      return matchedReplications;
    }
  },
  async asyncData({ store }) {
    await store.dispatch("getReplications");
    await store.dispatch("getEffects");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
    deleteReplication(id) {
      this.$store.dispatch("deleteReplication", id);
    },
    clearFilter() {
      this.filter = "";
    },
    selectEffectName(name) {
      console.log(name);
      this.filter = name;
    },
    toggleFocus() {
      this.focused = !this.focused;
    },
    debouncedInput: debounce(function(e) {
      this.filter = e.target.value;
    }, 300)
  }
};
</script>

<style scoped>
.replicationList {
  padding: 0;
  list-style: none;
}

.replicationTable {
  width: 100%;
  max-width: 800px;
}

.inputContainer {
  display: inline-block;
  position: relative;
}

.filterListContainer {
  background-color: #FFFFFF;
  padding: 1em;
  min-width: 300px;
  max-height: 200px;
  position: absolute;
  overflow: hidden;
  left: 0;
}

.filterList {
  list-style: none;
  padding: 0;
}

thead {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

table {
  margin-top: 1.5em;
}


.filterInput {
  height: 30px;
  padding: 0.25em;
  margin-left: 1em;
  font-size: 16px;
  border: 1px solid #ccc;
}
</style>