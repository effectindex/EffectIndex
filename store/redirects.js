export const state = () => ({
  list: []
});

export const mutations = {
  set(state, redirects) {
    state.list = redirects;
  }
};

export const actions = {
  async get({ commit }) {
    try {
      const { redirects } = await this.$axios.$get('/api/redirects');
      commit("set_redirects", redirects);
      return { redirects };
    } catch (error) {
      console.log(error);
    }
  }
};