<template>
  <div 
    class="section log">
    <div class="inputContainer">
      <label> Time
        <input 
          v-model="time"
          class="itemTimeInput">
      </label>
      <label class="descriptionLabel"> Description
        <textarea
          v-model="description"
          class="itemDescriptionInput" />
      </label>
    </div>
    <button 
      class="addButton"
      @click="addItem"> Add </button>
    <button 
      class="clearButton"
      @click="clear"
    > Clear </button>
    <table class="logTable">
      <tbody>
        <tr 
          v-for="(item, index) in value"
          :key="index">
          <td class="itemTime"> {{ item.time }} </td>
          <td class="itemDescription"> {{ item.description }} </td>
          <td class="itemControlContainer"> 
            <a
              class="itemControl"
              style="cursor: pointer;"
              @click="moveItemUp(index)"> <i class="fa fa-arrow-up" /> </a>
            <a
              class="itemControl"
              style="cursor: pointer;"
              @click="moveItemDown(index)"> <i class="fa fa-arrow-down" /> </a>
            <a
              class="itemControl"
              @click="removeItem(index)">
              <i 
                style="color: red;"
                class="fa fa-times" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
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
      time: "",
      description: ""
    };
  },
  methods: {

    clear() {
      this.time = "";
      this.description = "";
    },

    addItem() {
      let list = [ ...this.value ];

      list.push({ time: this.time, description: this.description });

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

.itemTime {
  width: 50px;
  font-weight: bold;
}

.itemControlContainer {
  min-width: 25px;
}

.itemControl {
  display: inline-block;
  margin: 0 0.5em;
  cursor: pointer;
}

.logTable {
  color: #333;
  border: 1px dashed #BBB;
  margin: 1em 0;
  border-collapse: collapse;
  table-layout: fixed;
}

.logTable tr {
  border-top: 1px dashed #CCC;
}

.logTable tr:first-of-type {
  border-top: none;
}

.itemDescription {
  max-width: 600px;
  word-wrap: break-word;
}

.logTable td {
  padding: 0.75em;
}

</style>