export const state = () => ({
  list: [],
  fetched: false
});

export const mutations = {
  set(state, redirects) {
    state.list = redirects;
    state.fetched = true;
  }
};

export const actions = {
  async get({ commit }) {
    try {
      const { redirects } = await this.$axios.$get('/api/redirects');
      commit("set", redirects);
    } catch (error) {
      console.log(error);
    }
  }
};