<template>
  <div class="redirect-details">
    <div class="redirect-details-info">
      <div class="redirect-from">
        <span class="domain">https://www.effectindex.com/</span>{{ from }}
      </div>
      <div class="redirect-separator">
        &#129046;
      </div>
      <div class="redirect-to">
        <span class="domain">https://www.effectindex.com/</span>{{ to }}
      </div>
    </div>
    <div
      class="redirect-details-controls"
    >
      <a
        class="edit-button"
        @click="edit"
      > Edit </a>
      <a
        class="delete-button"
        @click="deleteRedirect" 
      > Delete </a> 
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
  methods: {
    edit () {
      this.$emit('edit');
    },
    deleteRedirect () {
      this.$emit('delete');
    }
  }
};
</script>

<style scoped>
  .redirect-details {
    display: flex;
    padding: 5px 0;
  }

  .redirect-details-info {
    flex: 1;
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }

  .redirect-details-controls {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }

  .redirect-separator {
    width: 20px;
    margin: 0 1em;
    color: #888;
  }

  .delete-button {
    color: red;
  }

  .domain {
    color: #BBB;
  }

  a {
    cursor: pointer;
  }
</style>