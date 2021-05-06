export const state = () => ({
  list: []
});

export const mutations = {
  set(state, profiles) {
    state.list = profiles;
  },
};

export const actions = {
  async get({ commit }) {
    try {
      const { profiles } = await this.$axios.$get("/api/profiles");
      commit("set", profiles);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getProfileByName(_, name) {
    try {
      const { profile } = await this.$axios.$get("/api/profiles/user/" + name);
      return { profile };
    } catch (error){
      throw new Error(error);
    }
  },
  async getProfileById(_, id) {
    try {
      const { profile } = await this.$axios.$get("/api/profiles/" + id);
      return { profile };
    } catch (error) {
      throw new Error(error);
    }
  },
  async submit({ dispatch }, { profile }) {
    try {
      const response = await this.$axios.$post("/api/profiles/", { profile });
      await dispatch("get");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async update({ dispatch }, { profile }) {
    try {
      const response = await this.$axios.$put("/api/profiles/" + profile._id, { profile });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async delete({ dispatch }, id) {
    try {
      await this.$axios.$delete("/api/profiles/" + id);
      await dispatch("get");
    } catch (error) {
      throw new Error(error);
    }
  },
};