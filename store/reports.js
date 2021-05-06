export const state = () => ({
  list: []
});

export const mutations = {
  set(state, reports) {
    state.list = reports;
  },
};

export const actions = {
  async get({ commit }) {
    try {
      const { reports } = await this.$axios.$get("/api/reports");
      commit("set", reports);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReportById({ commit }, id) {
    try {
      const { reportData, sectionVisibility } = await this.$axios.$get("/api/reports/" + id);
      return { reportData, sectionVisibility };
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReportBySlug({ commit }, slug) {
    try {
      const { report } = await this.$axios.$get("/api/reports/slug/" + slug);
      return { report };
    } catch (error) {
      return undefined;
    }
  },
  async delete({ dispatch }, id) {
    try {
      const response = await this.$axios.$delete("/api/reports/" + id);
      await dispatch("get");
    } catch (error) {
      throw new Error(error);
    }
  },
  async update({ dispatch }, report) {
    try {
      const response = await this.$axios.$put("/api/reports/" + report.reportData._id, report);
      await dispatch("get");
    } catch (error) {
      throw new Error(error);
    }
  },
  async submit({ dispatch }, reportData) {
    try {
      const response = await this.$axios.$post("/api/reports/", reportData);
      await dispatch("get");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};