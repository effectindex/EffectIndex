<template>
  <div class="table-of-contents-input">
    <div class="new-item-input-container">
      <input
        v-model="name"
        placeholder="Item name"
        class="new-item-name-input"
        @keypress.enter="addItem"
      >
      <input
        v-model="id"
        placeholder="Item ID"
        class="new-item-id-input"
        @keypress.enter="addItem"
      >
      <button @click="addItem">
        Add
      </button>
    </div>
    <ol class="item-list">
      <table-of-contents-item
        v-for="(item, index) in items"
        :key="item.name"
        :item="item"
        :index="index + 1"
        @change="i => changeItem(index, i)"
        @delete="i => deleteItem(index)"
        @moveUp="moveItemUp(index)"
        @moveDown="moveItemDown(index)"
      />
    </ol>
  </div>
</template>

<script>
import TableOfContentsItem from './TableOfContentsItem';

export default {
  components: {
    TableOfContentsItem
  },
  props: {
    value: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      name: undefined,
      id: undefined,
      items: this.value
    };
  },
  methods: {
    addItem() {
      const { name, id } = this;
      const item = {
        name,
        id,
        children: []
      };
      this.items = [...this.items, item];
      this.name = undefined;
      this.id = undefined;
      this.changed();
    },
    changeItem(itemIndex, changedItem) {
      this.items = this.items.map((item, i) => (i === itemIndex) ? changedItem : item
      );
      this.changed();
    },
    deleteItem(index) {
      this.items = this.items.filter((_, i) => index !== i);
      this.changed();
    },
    moveItemUp(index) {
      if (index > 0) {
        const arr = this.items.slice();
        const temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp;
        this.items = arr;
      }
      this.changed();
    },
    moveItemDown(index) {
      if (index < this.items.length - 1) {
        const arr = this.items.slice();
        const temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        this.items = arr;
      }
      this.changed();
    },
    changed() {
      this.$emit('input', this.items);
    }
  }
};
</script>

<style scoped>

  .item-list {
    margin-top: 1em;
  }

  .new-item-input-container {
    display: flex;
    flex-direction: row;
  }

  .new-item-name-input, .new-item-id-input {
    padding: 10px;
    border: 1px solid #CCC;
  }

  .new-item-name-input {
    flex: 2;
  }

  .new-item-id-input {
    flex: 1;
    margin-left: 10px;
  }

  button {
    height: unset;
    margin: unset;
    margin-left: 10px;
    background-color: #DFD;
  }
</style>

