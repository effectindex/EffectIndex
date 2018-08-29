<template>
  <div class="searchBox">

    <div class="inputContainer">
      <div class="spyglass">
        <fa 
          :icon="['far', 'search']" />
      </div>
      <input 
        ref="searchInput"
        :value="searchInput"
        type="text"
        placeholder="Search"
        class="searchInput"
        @input="changeSearchInput">
      <div 
        class="clearButton"
        @click="clear">
        <fa 
          :icon="['far', 'times-circle']" />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    searchInput() {
      return this.$store.state.search_input;
    }
  },
  created() {
    let subscription = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'set_search_results' && state.search_results.length) {
        this.$router.push('/search');
      }
    });
  },
  methods: {
    changeSearchInput(e) {
      this.$store.dispatch('changeSearch', e.target.value);
    },
    clear() {
      this.$store.commit('clear_search_input');
      this.$refs.searchInput.focus();
    }
  },
};
</script>

<style scoped>

  input {
    font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    width: 100%;
    border: none;
  }

  .inputContainer {
    position: relative;
    max-width: 600px;
    border: 1px solid #CCCCCC;
    padding: 6px;
  }

  .searchInput {
    font-size: 16pt;
    padding: 4px;
    max-width: 75%;
    margin-left: 33px;
  }

  .clearButton {
    position: absolute;
    right: 8px;
    top: calc(50% - 12px);
    opacity: 0.6;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .spyglass {
    position: absolute;
    left: 8px;
    top: calc(50% - 12px);
    opacity: 0.4;

    height: 25px;
    width: 25px;
  }

  .clearButton:hover {
    opacity: 0.9;
  }

  .searchBox {
    margin: 0.5em 1em;
    float: right;
  }

  @media(max-width: 400px) {
    .searchBox {
      float: none;
      margin: 1em auto;
    }
  }
</style>