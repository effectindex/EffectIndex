export const state = () => ({
  list: []
});

export const mutations = {
  set(state, replications) {
    state.list = replications;
  },
};

export const actions = {
  async get({ commit }) {
    try {
      let { replications } = await this.$axios.$get("/api/replications");
      commit("set", replications);
    } catch (error) {
      throw new Error(error);
    }
  },
  async featured({ commit }) {
    try {
      let { replications } = await this.$axios.$get("/api/replications/featured");
      commit("set", replications);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReplication(_, name) {
    try {
      let { replication } = await this.$axios.$get(`/api/replications/${name}`);
      return { replication };
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReplicationsByArtist(_, artist) {
    try {
      let { replications } = await this.$axios.$get(`/api/replications/byartist/${artist}`);
      return { replications };
    } catch (error) {
      throw new Error(error);
    }
  },
  async submit(_, replication) {
    try {
      let { replication: submittedReplication } = await this.$axios.$post(
        "/api/replications",
        { replication }
      );
      return submittedReplication;
    } catch (error) {
      throw new Error(error);
    }
  },
  async update({ dispatch }, replication) {
    try {
      let { replication: updatedReplication } = await this.$axios.$post(
        "/api/replications/" + replication.id,
        { replication }
      );
      await dispatch("get");
      return updatedReplication;
    } catch (error) {
      throw new Error(error);
    }
  }
};