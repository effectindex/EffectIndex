<template>
  <div class="redirect-edit">
    <div class="redirect-edit-details">
      <input
        v-model="changeFrom"
        placeholder="Redirect from"
        type="text"
      >
      <div class="redirect-separator">
        &#129046;
      </div>
      <input
        v-model="changeTo"
        placeholder="Redirect to"
        type="text"
      >
    </div>
    <div
      class="redirect-edit-controls"
    >
      <button
        style="color: green;"
        @click="update"
      >
        Update
      </button>
      <div style="width: 10px;" />
      <button
        style="color: #AAA;"
        @click="cancel"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    from: {
      type: String,
      default: 'unknown'
    },
    to: {
      type: String,
      default: 'unknown'
    }
  },
  data() {
    return {
      changeFrom: undefined,
      changeTo: undefined
    };
  },
  mounted () {
    this.changeFrom = this.from;
    this.changeTo = this.to;
  },
  methods: {
    update () {
      const { changeFrom, changeTo } = this;
      this.$emit('update', { from: changeFrom, to: changeTo });
    },

    cancel () {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
  .redirect-edit {
    display: flex;
  }

  .redirect-edit-details {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  .redirect-edit-controls {
    display: flex;
    width: 150px;
    margin-left: 15px;
    align-items: center;
  }

  .redirect-separator {
    margin: 0 10px;
    text-align: center;
    color: #AAA;
    font-size: 30px;
    line-height: 30px;
  }

  .domain {
    color: #BBB;
  }

  input {
    flex: 1;
  }

  input[type="text"] {
    flex: 1;
    padding: 7.5px;
    font-size: 18px;
    border: 1px solid #CCC;
  }

  button {
    flex: 1;
    background-color: #F3F3F3;
    border: 1px solid #CCC;
    transition: all 0.25s ease;
    cursor: pointer;
    height: 25px;
  }

  button:hover {
    background-color: #DDD;
  }
</style>