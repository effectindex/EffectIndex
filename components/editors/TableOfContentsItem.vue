<template>
  <li class="table-of-contents-item">
    <div class="table-of-contents-item-input-container">
      <editable-item-input
        :id="id"
        :name="name"
        id-placeholder="Item ID"
        name-placeholder="Item name"
        @change="changeItem"
        @delete="deleteItem"
        @moveUp="moveItemUp"
        @moveDown="moveItemDown"
      />
      <a @click="addChild"> <Icon
        color="green"
        filename="plus.svg"
      /> </a>
    </div>
    <ul
      class="subitems"
    >
      <li
        v-for="(subitem, i) in children"
        :key="subitem.name"
        class="subitem"
      >
        <div class="subitem-index">
          {{ index }}.{{ i + 1 }}
        </div>
        <editable-item-input
          :id="subitem.id"
          :name="subitem.name"
          id-placeholder="Subitem ID"
          name-placeholder="Subitem name"
          @change="(c) => changeChild(i, c)"
          @delete="deleteChild(i)"
          @moveUp="moveChildUp(i)"
          @moveDown="moveChildDown(i)"
        />
      </li>
    </ul>
  </li>
</template>

<script>
import EditableItemInput from './EditableItemInput';
import Icon from '@/components/Icon';

export default {
  components: {
    EditableItemInput,
    Icon
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        name: undefined,
        id: undefined,
        children: []
      })
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      mode: 'display',
      id: this.item.id,
      name: this.item.name,
      children: this.item.children
    };
  },
  methods: {
    addSubitem () {
      const { id, name } = this;
      if (id && name) {
        this.$emit('value', [...this.item.children], { id, name });
      }
    },
    edit () {
      this.mode = 'editing';
    },
    cancelEdit () {
      this.mode = 'display';
    },
    changeItem(item) {
      this.name = item.name;
      this.id = item.id;
      this.changed();
    },
    moveItemUp() {
      this.$emit('moveUp');
    },
    moveItemDown() {
      this.$emit('moveDown');
    },
    moveChildUp(index) {
      if (index > 0) {
        const arr = this.children.slice();
        const temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp;
        this.children = arr;
        this.changed();
      }
    },
    moveChildDown(index) {
      if (index < this.children.length - 1) {
        const arr = this.children.slice();
        const temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        this.children = arr;
        this.changed();
      }
    },
    deleteItem () {
      this.$emit('delete');
      this.changed();
    },
    addChild() {
      this.children = [...this.children, []];
      this.changed();
    },
    deleteChild(index) {
      this.children = this.children.filter((_, i) => i !== index);
      this.changed();
    },
    changeChild(index, updated) {
      this.children = this.children.map((old, i) => i === index ? updated : old);
      this.changed();
    },
    changed() {
      const { name, id, children } = this;
      this.$emit('change', { name, id, children });
    }
  }
};
</script>

<style scoped>

.table-of-contents-item {
    margin-bottom: 0.25em;
}

.table-of-contents-item-input-container {
  display: flex;
  align-items: center;
}

.icon {
  height: 24px;
  width: 24px;
}

.subitems {
  list-style: none;
  margin: 0;
  padding: 0;
}

.subitem-index {
  margin: 0 5px;
}

li {
  margin: 0;
}

.subitems li {
  display: flex;
  align-items: center;
}

button {
  padding: 5px 10px;
  margin: 0;
  margin-left: 20px; 
  width: auto;
}

input {
  padding: 5px;
  border: 1px solid #CCC;
  flex: 1;
  font-size: 20px;
}

</style>