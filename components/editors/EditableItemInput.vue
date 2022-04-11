<template>
  <div class="editable-item-input">
    <div
      class="inputs"
      :class="{ active, error }"
    >
      <input
        v-show="active"
        ref="nameInput"
        v-model="itemName"
        class="name-input"
        :placeholder="namePlaceholder"
        :readonly="mode === 'display'"
        @keydown.enter="save"
      >
      <span
        v-show="!active"
        class="name"
      > {{ itemName }} </span>
      (<input
        v-if="active"
        v-model="itemId"
        class="id-input"
        :readonly="mode === 'display'"
        :placeholder="idPlaceholder"
        @keydown.enter="save"
      ><span v-else>{{ itemId }}</span>)
    </div>
    <div
      v-if="mode === 'display'"
      class="controls"
    >
      <a @click="edit"> <Icon
        color="black"
        filename="edit.svg"
      /> </a>
      <a @click="moveUp"> <Icon
        color="grey"
        filename="arrow-up.svg"
      /> </a>
      <a @click="moveDown"> <Icon
        color="grey"
        filename="arrow-down.svg"
      /> </a>
      <a @click="deleteItem"> <Icon
        color="red"
        filename="times.svg"
      /> </a>
    </div>
    <div
      v-else
      class="controls"
    >
      <a @click="save"> <Icon
        filename="check.svg"
        color="green"
      /> </a>
      <a @click="cancel">
        <Icon
          filename="times-circle.svg"
          color="grey"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

  export default {
    components: {
      Icon
    },
    props: {
      name: {
        type: String,
        default: undefined
      },
      id: {
        type: String,
        default: undefined
      },
      namePlaceholder: undefined,
      idPlaceholder: undefined
    },
    data() {
      return {
        mode: this.name && this.id ? 'display' : 'edit',
        itemName: this.name,
        itemId: this.id,
        error: false
      };
    },
    computed: {
      active() {
        return this.mode === 'edit';
      }
    },
    mounted() {
      if (this.mode === 'edit') {
        this.$refs.nameInput.focus();
      }
    },
    methods: {
      edit() {
        this.mode = 'edit';
        this.$refs.nameInput.focus();
      },
      cancel() {
        this.mode = 'display';
        this.itemName = this.name;
        this.itemId = this.id;
        this.error = false;

        if (!this.itemName && !this.itemId) {
          this.$emit('delete');
        }
      },
      save() {
        const { itemName, itemId } = this;
        if (itemName && itemId) {
          this.mode = 'display';
          this.error = false;
          this.$emit('change', { name: itemName, id: itemId });
        } else {
          this.error = true;
        }
      },
      moveUp() {
        this.$emit('moveUp');
      },
      moveDown() {
        this.$emit('moveDown');
      },
      deleteItem() {
        this.$emit('delete');
      }
    }
  };
</script>

<style scoped>
  .editable-item-input {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .editable-item-input:hover .controls {
    opacity: 1;
  }

  .name {
    color: black;
  }

  .icon {
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }

  .inputs {
    flex: 1;
    color: #AAA;
  }

  .controls {
    margin-left: 15px;
    display: flex;
    opacity: 0;
    transition: opacity 0.1s ease;
    align-items: center;
  }

  input {
    border: 1px solid transparent;
    font-size: 18px;
    flex: 1;
  }

  :not(.active) > .name-input {
    font-weight: bold;
  }

  :not(.active) > .id-input {
    color: #AAA;
  }

  input:not(:last-child) {
    margin-right: 20px;
  }

  .active input {
    border: 1px solid #CCC;
  }

  .error input {
    border: 3px solid red;
  }
</style>