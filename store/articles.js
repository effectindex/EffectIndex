export const state = () => ({
  list: []
});

export const mutations = {
  set(state, articles) {
    state.list = articles;
  },
};

export const actions = {
  async get({ commit }) {
    try {
      const { articles } = await this.$axios.$get('/api/articles');
      commit ("set", articles);
    } catch (error) {
      throw new Error(error);
    }
  }
};