export const state = () => ({
  results: [],
  input: ""
});

export const mutations = {
  set_results(state, results) {
    if (typeof results === 'object') {
      const { articles, effects, reports, total_results } = results;
      state.results = {
        articles,
        effects,
        reports,
        total_results
      };
    } else {
      state.results = {
        articles: [],
        effects: [],
        reports: [],
        total_results: 0
      };
    }
  },
  change_input(state, input) {
    if (input) state.input = input;
  },
  clear_input(state) {
    state.input = "";
  },
};

export const actions = {
  async search({ commit }, query) {
    try {
      const results = await this.$axios.$post("/api/search", { query });
      commit("set_results", results);
    } catch (error) {
      throw new Error(error);
    }
  },
  changeSearch({ commit }, query) {
    commit("change_input", query);
  }
};