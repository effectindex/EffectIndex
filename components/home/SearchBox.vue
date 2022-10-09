<template>
  <div class="searchBox">
    <div class="inputContainer">
      <div class="spyglass">
        <Icon
          filename="search.svg"
        />
      </div>
      <input 
        ref="searchInput"
        :value="searchInput"
        type="text"
        placeholder="Search"
        class="searchInput"
        @input="changeSearchInput"
      >
      <div 
        v-show="searchInput"
        class="clearButton"
        @click="clear"
      >
        <Icon
          filename="times-circle.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  computed: {
    searchInput() {
      return this.$store.state.search.input;
    }
  },
  created() {
    let subscription = this.$store.subscribe((mutation, state) => {
      const { total_results } = state.search.results;
      if (mutation.type === 'search/set_results' && (total_results > 0)) {
        this.$router.push('/search');
      }
    });
  },
  methods: {
    changeSearchInput(e) {
      this.$store.commit('search/change_input', e.target.value);
      this.performSearch();
    },
    performSearch: debounce(function() {
      this.$store.dispatch('search/search', this.searchInput);
    }, 400, {trailing: true}),
    clear() {
      this.$store.commit('search/clear_input');
      this.$refs.searchInput.focus();
    }
  },
};
</script>

<style scoped>

  .icon {
    height: 1.1em;
    width: 1.1em;
    opacity: 0.3;
  }

  input {
    font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    border: none;
  }

  .inputContainer {
    position: relative;
    max-width: 600px;
    border: 1px solid #DDD;
    padding: 6px;
  }

  .searchInput {
    font-size: 14pt;
    max-width: 75%;
    margin-left: 33px;
  }

  .searchInput:focus {
    outline: none;
  }

  .searchInput::placeholder {
    color: #777;
  }

  .clearButton {
    position: absolute;
    right: 8px;
    top: calc(50% - 12px);
    opacity: 0.4;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .spyglass {
    position: absolute;
    left: 12px;
    top: calc(50% - 10px);
    opacity: 0.4;

    height: 20px;
    width: 20px;
  }

  .clearButton:hover {
    opacity: 0.7;
  }

  .searchBox {
    margin: 0.25em 1em;
    margin-right: 0;
    width: 300px;
    float: right;
  }

  @media(max-width: 550px) {
    .searchBox {
      float: none;
      margin: 1em auto;
      width: 100%;
    }
  }
</style>