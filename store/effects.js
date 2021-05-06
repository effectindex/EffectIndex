export const state = () => ({
  list: []
});

export const mutations = {
  set_effects(state, effects) {
    state.list = effects;
  },
};

export const actions = {
  // Effects
  async get({ commit }) {
    try {
      let { effects } = await this.$axios.$get("/api/effects");
      commit("set_effects", effects);
    } catch (error) {
      throw new Error(error);
    }
  },
  async submit(_, effect) {
    try {
      const { effect: submitted } = await this.$axios.$post(
        "/api/effects",
        { effect }
      );
      return submitted;
    } catch (error) {
      throw new Error(error);
    }
  },
  async update({ dispatch }, effect) {
    try {
      let { effect: updatedEffect } = await this.$axios.$post(
        "/api/effects/" + effect.id,
        effect
      );
      await dispatch("get");
      return updatedEffect;
    } catch (error) {
      throw new Error(error);
    }
  },
  async delete({ dispatch }, id) {
    let { effect: deletedEffect } = await this.$axios.$delete(
      "/api/effects/" + id
    );
    dispatch("get");
    return deletedEffect;
  }
};