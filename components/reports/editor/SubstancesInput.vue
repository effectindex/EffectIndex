<template>
  <div class="section substancesInput">
    <label> Name 
      <input
        v-model="substance.name"
        class="reportEditor__inputTitle">
    </label>

    <label> Dose
      <input
        v-model="substance.dose"
        class="reportEditor__inputTitle">
    </label>

    <label> Route of Administration 
      <input
        v-model="substance.roa"
        class="reportEditor__inputTitle">
    </label>

    <div class="reportEditor__tableContainer">
      <table
        v-show="value.length"
        class="reportEditor__substancesTable">
        <thead>
          <tr>
            <td> Substance </td>
            <td> Dose </td>
            <td> RoA </td>
            <td />
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(substanceItem, index) in value"
            :key="index">
            <td> {{ substanceItem.name }} </td>
            <td> {{ substanceItem.dose }} </td>
            <td> {{ substanceItem.roa }} </td>
            <td class="itemControlContainer"> 
              <a
                class="itemControl"
                style="cursor: pointer;"
                @click="moveItemUp(index)">
                <fa 
                  :icon="['far', 'arrow-up']"
                  class="fa" />
              </a>
              <a
                class="itemControl"
                style="cursor: pointer;"
                @click="moveItemDown(index)">
                <fa 
                  :icon="['far', 'arrow-down']"
                  class="fa" />
              </a>
              <a
                class="itemControl"
                @click="removeItem(index)">
                <fa 
                  :icon="['far', 'times']"
                  style="color: red;"
                  class="fa" />
              </a>
            </td>
          </tr> 
        </tbody>
      </table>

      <button 
        class="addButton"
        @click="addItem"> Add </button>
      <button 
        class="clearButton"
        @click="clear"
      > Clear </button>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      substance: {}
    };
  },
  methods: {
    clear() { this.substance = { name: "", dose: "", roa: "" }; },
    addItem() {
      let list = [ ...this.value ];

      list.push(this.substance);

      this.$emit('input', list);

      this.clear();
    },
    removeItem(index) {
      let list = [ ...this.value ];

      list.splice(index, 1);

      this.$emit('input', list);
    },
    moveItemUp(index) {
      let list = [ ...this.value ];

      if (index > 0) {
        let swap = list[index];
        list[index] = list[index - 1];
        list[index - 1] = swap;
      }

      this.$emit('input', list);
    },

    moveItemDown(index) {
      let list = [ ...this.value ];

      if (index < (list.length - 1)) {
        let swap = list[index];
        list[index] = list[index + 1];
        list[index + 1] = swap;
      }

      this.$emit('input', list);
    }
  }
};
</script>

<style scoped>

.reportEditor__tableContainer {
  padding: 1em 0;
}

.itemControlContainer {
  min-width: 25px;
}

.itemControl {
  display: inline-block;
  margin: 0 0.5em;
  cursor: pointer;
}
</style>