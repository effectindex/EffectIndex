export const state = () => ({
  selected_effect_id: "",
  replications: [],
  replicated_effects: []
});

export const mutations = {
  set(state, data) {
    state.replications = data.replications;
    state.replicated_effects = data.replicated_effects;
    if (
      data.replicated_effects &&
      data.replicated_effects.length > 0 &&
      !state.selected_effect_id
    ) {
      state.selected_effect_id = data.replicated_effects[0]._id;
    }
  },
  set_selected_effect(state, id) {
    state.selected_effect_id = id;
  },
};

export const actions = {
  async get({ commit }) {
    try {
      let { replications, replicated_effects } = await this.$axios.$get(
        "/api/replications/gallery"
      );
      commit("set", { replications, replicated_effects });
    } catch (error) {
      throw new Error(error);
    }
  },
  setSelectedEffect({ commit }, id) {
    commit("set_selected_effect", id);
  },
};