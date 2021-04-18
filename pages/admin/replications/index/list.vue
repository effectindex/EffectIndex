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
          style="padding: 0.5em; cursor: pointer;"
          @click="clearFilter"
        > 
          <Icon
            filename="times.svg"
            color="red"
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
              <Icon
                filename="arrow-down.svg"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('title', 'ascending')"
            >
              <Icon
                filename="arrow-up.svg"
              />
            </a>
          </td>
          <td>
            <a 
              class="sortArrow"
              @click="sortBy('featured', 'descending')"
            >
              <Icon
                filename="arrow-down.svg"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('featured', 'ascending')"
            >
              <Icon
                filename="arrow-up.svg"
              />
            </a>
          </td>
          <td>
            Artist 
            <a 
              class="sortArrow"
              @click="sortBy('artist', 'descending')"
            >
              <Icon
                filename="arrow-down.svg"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('artist', 'ascending')"
            >
              <Icon
                filename="arrow-up.svg"
              />
            </a>
          </td>
          <td>
            Type 
            <a 
              class="sortArrow"
              @click="sortBy('type', 'descending')"
            >
              <Icon
                filename="arrow-down.svg"
              />
            </a>
            <a 
              class="sortArrow"
              @click="sortBy('type', 'ascending')"
            >
              <Icon
                filename="arrow-up.svg"
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
        </tr>
      </thead>
      <tbody>
        <replication-table-row 
          v-for="replication in sortedReplications"
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
import { debounce, sortBy } from 'lodash';
import Icon from '@/components/Icon';

export default {
  name: 'ReplicationManagementList',
  components: {
    ReplicationTableRow,
    Icon
  },
  data() {
    return {
      filter: "",
      focused: false,
      thumbs: false,
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
    effects() {
      return this.$store.state.effects;
    },
    filteredEffects() {
      return this.effects.filter((effect) => effect.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);;
    },
    filteredReplications() {
      if (!this.filter) return this.replications;
    
      let effectIds = this.filteredEffects.map(effect => effect._id);

      let filteredReplications = this.replications.filter(
        replication => replication.associated_effects.some(
          associated_effect => effectIds.includes(associated_effect)
      ));

      return filteredReplications;
    },
    sortedReplications() {
      const { column, direction } = this.options.sortBy;
      if (column && direction) {
        const sorted = sortBy(this.replications, [column.toLowerCase()]);
        return direction === 'ascending' ? sorted : sorted.reverse();
      } else return this.replications;

    }
  },
  async fetch({ store }) {
    await store.dispatch("getReplications");
    await store.dispatch("getEffects");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
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
}

.inputContainer {
  display: inline-block;
  position: relative;
}

.icon {
  height: 0.8em;
  width: 0.8em;
  opacity: 0.6;
  display: inline-block;
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

thead td {
  white-space: nowrap;
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