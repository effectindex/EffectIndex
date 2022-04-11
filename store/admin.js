export const state = () => ({
  users: [],
  invitations: []
});

export const mutations = {
  set_user_list(state, users) {
    state.users = users;
  },
  set_invitations(state, invitations) {
    state.invitations = invitations;
  },
};

export const actions = {
  async getAllUsers({ commit }) {
    try {
      const users = await this.$axios.$get("/api/users");
      commit("set_user_list", users);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getUser(_, id) {
    try {
      const { user } = await this.$axios.$get("/api/users/" + id);
      return { user };
    } catch (error) {
      throw new Error(error);
    }
  },
  async register(_, user) {
    try {
      const { user: registeredUser } = await this.$axios.$post("api/users/register", { user });
      return { user: registeredUser };
    } catch (error) {
      if ("response" in error && "data" in error.response) 
        throw new Error(error.response.data.error.message);
      else throw new Error(error);
    }
  },
  async deleteUser({ dispatch }, id) {
    try {
      let response = await this.$axios.$delete("/api/users/" + id);
      dispatch("getAllUsers");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateUser({ dispatch }, { user }) {
    try {
      let response = await this.$axios.$post("/api/users/" 
        + user._id, { user });
      await dispatch("getAllUsers");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getInvitations({ commit }) {
    try {
      const invitations = await this.$axios.$get("/api/invitations");
      commit("set_invitations", invitations);
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteInvitation({ dispatch}, id) {
    try {
      await this.$axios.$delete("/api/invitations/" + id);
      await dispatch("getInvitations");
    } catch (error) {
      throw new Error(error);
    }
  },
  async generateInvitation(_, expiration) {
    try {
      let { invitation } = await this.$axios.$post(
        "/api/invitations/generate",
        { expiration }
      );
      return { invitation };
    } catch (error) {
      throw new Error(error);
    }
  },
};