<template>
  <div class="pageContent">
    <hr>
    <label for="effectFilter"> 
      <span style="font-weight: bold;"> Filter by Effect: </span>
      <div class="inputContainer">
        <input
          :value="filter"
          type="text"
          class="filterInput"
          @input="debouncedInput"
          @focus="focus"
          @blur="blur"
        >
        <a 
          style="color: #BBB; padding: 0.5em;"
          @click="clearFilter"
        > 
          <fa 
            :icon="['far', 'times']"
            class="fa"
          />
        </a>
        <div 
          :class="{ active: (focused && filter) }"
          class="filterListContainer"
        >
          <ul
            class="filterList"
          > 
            <li 
              v-for="effect in filteredEffects.slice(0, 5)"
              :key="effect._id"
            > <a @click="selectEffectName(effect.name)"> {{ effect.name }} </a> </li>
            <li 
              v-show="filteredEffects.length > 5"
              style="font-weight: bold;"
            > ... </li>
          </ul>
        </div>
      </div>
    </label>
    <table class="replicationTable">
      <thead>
        <tr class="replicationTableHeaderRow">
          <td>
            Title 
            <a 
              class="sortArrow"
              @click="sortBy('title', 'descending')"
            >
              <fa 
                :icon="['far', 'arrow-down']"
                class="fa"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('title', 'ascending')"
            >
              <fa 
                :icon="['far', 'arrow-up']"
                class="fa"
              /> </a>
          </td>
          <td>
            Artist 
            <a 
              class="sortArrow"
              @click="sortBy('artist', 'descending')"
            >
              <fa 
                :icon="['far', 'arrow-down']"
                class="fa"
              />  </a>
            <a 
              class="sortArrow"
              @click="sortBy('artist', 'ascending')"
            >
              <fa 
                :icon="['far', 'arrow-up']"
                class="fa"
              /> 
            </a>
          </td>
          <td>
            Thumb
            <input
              v-model="options.thumbs"
              style="display: inline; margin-left: 0.5em;"
              type="checkbox"
            >
          </td>
          <td>
            Type 
            <a 
              class="sortArrow"
              @click="sortBy('type', 'descending')"
            >
              <fa 
                :icon="['far', 'arrow-down']"
                class="fa"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('type', 'ascending')"
            >
              <fa 
                :icon="['far', 'arrow-up']"
                class="fa"
              />
            </a>
          </td>
        </tr>
      </thead>
      <tbody>
        <replication-table-row 
          v-for="replication in filteredReplications"
          :key="replication._id"
          :replication="replication"
          :thumbs="options.thumbs"
          @deleteReplication="deleteReplication"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ReplicationTableRow from "@/components/replications/ReplicationTableRow.vue";
import { debounce } from 'lodash';

export default {
  components: {
    ReplicationTableRow
  },
  data() {
    return {
      filter: "",
      focused: false,
      options: {
        thumbs: false,
        sortBy: {
          column: 'title',
          direction: 'descending'
        }
      }
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
    filteredSubstances() {
      let substances = this.$store.state.substances;
      let foundSubstances = substances.filter((substance) => substance.name.toLowerCase.indexOf(this.filter) > -1);
      return foundSubstances;
    },
    filteredReplications() {
      let replications = this.$store.state.replications;
      let filter = this.filter.toLowerCase();
      if (!this.filter) return this.sortReplications(replications);
    
      let effectIds = this.filteredEffects.map((effect) => effect._id);

      let matchedReplications = replications.filter((replication) =>
        replication.associated_effects.some((associated_effect) =>
          effectIds.indexOf(associated_effect) > -1));

      /* match substances also? */

      return this.sortReplications(matchedReplications);
    }
  },
  async fetch({ store }) {
    await store.dispatch("getReplications");
    await store.dispatch("getEffects");
    await store.dispatch("getSubstances");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
    sortReplications(replicationList) {
      let sortBy = this.options.sortBy;

      let compareFunction = (column, direction) => {
        return function(a, b) {
          a = a[column].toUpperCase();
          b = b[column].toUpperCase();
          
          return (sortBy.direction === 'ascending' ? (a <= b) : (a >= b));
        };
      };

      if (sortBy.column && sortBy.direction) {
        replicationList.sort(compareFunction(sortBy.column));
        return replicationList;
      } else return replicationList;
    },
    sortBy(column, direction) {
      if (column && direction) {
        this.options.sortBy.column = column;
        this.options.sortBy.direction = direction;
      } 
    },
    deleteReplication(id) {
      this.$store.dispatch("deleteReplication", id);

        this.$toasted.show(
          'The replication has been successfully deleted.',
          {
            duration: 2000,
            type: 'success'
          }
        );


    },
    clearFilter() {
      this.filter = "";
    },
    selectEffectName(name) {
      this.filter = name.toLowerCase();
    },
    selectSubstanceName(name) {
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

.sortArrow {
  cursor: pointer;
  color: black;
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

.replicationTableHeaderRow > td{
  padding-bottom: 0.5em;
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