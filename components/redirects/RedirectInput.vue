<template>
  <li class="redirect-list-item">
    <form
      class="redirect-input"
      @submit.prevent="handleSubmit"
    >
      <div class="redirect-input-fields">
        <input
          v-model="from"
          placeholder="Redirect from"
          type="text"
        >
        <div class="redirect-separator">
          &#129046;
        </div>
        <input
          v-model="to"
          placeholder="Redirect to"
          type="text"
        >
      </div>
      <button class="submit-redirect-button">
        Add
      </button>
    </form>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        from: undefined,
        to: undefined
      };
    },
    methods: {
      handleSubmit(e) {
        const { from, to } = this;
        const redirect = { from, to };
        this.$emit('submit', redirect);
      },
      clearFields() {
        this.from = undefined;
        this.to = undefined;
      }
    }
  };
</script>

<style scoped>
  .redirect-input {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }

  .redirect-input-fields {
    display: flex;
  }

  input[type="text"] {
    flex: 1;
    padding: 7.5px;
    font-size: 18px;
    border: 1px solid #CCC;
  }

  button {
    background-color: #F3F3F3;
    border: 1px solid #CCC;
    transition: all 0.25s ease;
    cursor: pointer;
  }

  button:hover {
    background-color: #DDD;
  }

  .redirect-input-fields {
    flex: 1;
  }

  .redirect-separator {
    margin: 0 10px;
    text-align: center;
    color: #AAA;
    font-size: 30px;
    line-height: 30px;
  }

  .submit-redirect-button {
    width: 150px;
    margin-left: 15px;
  }
</style>