<template>
  <div class="pageContent">
    <hr>
    <label for="effectFilter" > 
      <span style="font-style: italic;"> Filter by Effect: </span>
      <div class="inputContainer">
        <input
          :value="filter"
          type="text"
          class="filterInput"
          @input="debouncedInput"
          @focus="focus"
          @blur="blur">
        <a 
          style="font-style: italic;"
          @click="clearFilter"> (clear) </a>
        <div 
          :class="{ active: (focused && filter) }"
          class="filterListContainer">
          <ul
            class="filterList"> 
            <li 
              v-for="effect in filteredEffects.slice(0, 5)"
              :key="effect._id"> <a @click="selectEffectName(effect.name)"> {{ effect.name }} </a> </li>
            <li 
              v-show="filteredEffects.length > 5"
              style="font-weight: bold;"> ... </li>
          </ul>
        </div>
      </div>
    </label>
    <table class="replicationTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Artist </td>
          <td> Thumbnail </td>
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
      let replications = this.$store.state.replications;
      let filter = this.filter.toLowerCase();
      if (!this.filter) return replications;
    
      let effectIds = this.filteredEffects.map((effect) => effect._id);

      let matchedReplications = replications.filter((replication) =>
        replication.associated_effects.some((associated_effect) =>
          effectIds.indexOf(associated_effect) > -1));
      
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
      this.filter = name.toLowerCase();
    },
    focus() {
      this.focused = true;
    },
    blur() {
      setTimeout(() => this.focused = false, 100);
    },
    debouncedInput: debounce(function(e) {
      this.filter = e.target.value;
    }, 150)
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
  background-color: #F5F5F5;
  padding: 0 1em;
  margin-left: 20px;
  min-width: 300px;
  max-height: 0;
  transition: all 0.25s ease-out;
  position: absolute;
  overflow: hidden;
  border: 1px solid #EEE;
  border-top: 0;
  left: 0;
  filter: opacity(0);
}

.active {
  max-height: 300px;
  filter: opacity(0.9);
}

.filterList {
  list-style: none;
  padding: 0;
}

.filterList > li {
  cursor: pointer;
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
  box-sizing: border-box;
  height: 30px;
  padding: 0.25em;
  margin-left: 20px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ccc;
}
</style>