import { debounce } from 'lodash';

export default {
  // Menu
  togglePullout({ commit }) {
    commit("toggle_pullout");
  },
  // Blog Posts
  async deleteBlogPost({ dispatch }, id) {
    let deleted = await this.$axios.$get("/api/blog/" + id + "/delete");
    dispatch("getBlogPosts");
  },
  async getBlogPosts({ commit }) {
    let { posts } = await this.$axios.$get("/api/blog");
    commit("set_blog_posts", posts);
  },
  async getSingleBlogPost({ commit }, slug) {
    let { post } = await this.$axios.$get("/api/blog/" + slug);
    return { post };
  },
  async submitBlogPost({ dispatch }, post) {
    try {
      let { post: submittedPost } = await this.$axios.$post("/api/blog", post);
      dispatch("getBlogPosts");
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateBlogPost({ dispatch }, post) {
    let { post: updatedPost } = await this.$axios.$post(
      "/api/blog/" + post._id,
      post
    );
    dispatch("getBlogPosts");
    return updatedPost;
  },
  // Effects
  async getEffects({ commit }) {
    try {
      let { effects } = await this.$axios.$get("/api/effects");
      commit("set_effects", effects);
    } catch (error) {
      throw new Error(error);
    }
  },
  async submitEffect({ dispatch }, effect) {
    try {
      let { effect: submittedEffect } = await this.$axios.$post(
        "/api/effects",
        { effect }
      );
      return submittedEffect;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateEffect({ dispatch }, effect) {
    try {
    let { effect: updatedEffect } = await this.$axios.$post(
      "/api/effects/" + effect.id,
      effect
    );
    await dispatch("getEffects");
    return updatedEffect;
  } catch (error) {
    throw new Error(error);
  }
    
  },
  async deleteEffect({ dispatch }, id) {
    let { effect: deletedEffect } = await this.$axios.$delete(
      "/api/effects/" + id
    );
    dispatch("getEffects");
    return deletedEffect;
  },
  async getEffect({ commit }, name) {
    try {
      let { effect } = await this.$axios.$get("/api/effects/" + name);
      return { effect };
    } catch (error) {
      throw new Error(error);
    }
  },
  // Replications
  async getReplications({ commit }) {
    try {
      let { replications } = await this.$axios.$get("/api/replications");
      commit("set_replications", replications);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReplication({}, name) {
    try {
      let { replication } = await this.$axios.$get("/api/replications/" + name);
      return { replication };
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReplicationsByArtist({}, artist) {
    try {
      let { replications } = await this.$axios.$get("/api/replications/byartist/" + artist);
      return { replications };
    } catch (error) {
      throw new Error(error);
    }
  },
  async submitReplication({ dispatch }, replication) {
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
  async updateReplication({ dispatch }, replication) {
    try {
      let { replication: updatedReplication } = await this.$axios.$post(
        "/api/replications/" + replication.id,
        { replication }
      );
      await dispatch("getReplications");
      return updatedReplication;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteReplication({ dispatch }, id) {
    try {
      let { replication: deletedReplication } = await this.$axios.$delete(
        "/api/replications/" + id
      );
      await dispatch("getReplications");
      return deletedReplication;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReplication({ commit }, snakeName) {
    try {
      let { replication } = await this.$axios.$get(
        "/api/replications/" + snakeName
      );
      return { replication };
    } catch (error) {
      throw new Error(error);
    }
  },
  // Gallery
  async getGallery({ commit }) {
    try {
      let { replications, replicated_effects } = await this.$axios.$get(
        "/api/replications/gallery"
      );
      commit("set_gallery", { replications, replicated_effects });
    } catch (error) {
      throw new Error(error);
    }
  },
  setGallerySelectedEffect({ commit }, effectId) {
    commit("set_gallery_selected_effect", effectId);
  },
  // Users
  async getAllUsers({ commit }) {
    try {
      let userList = await this.$axios.$get("/api/users/");
      commit("set_admin_user_list", userList);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getUser({}, id) {
    try {
      let { user } = await this.$axios.$get("/api/users/" + id);
      return { user };
    } catch (error) {
      throw new Error(error);
    }
  },
  async register({}, user) {
    try {
      let { user: registeredUser } = await this.$axios.$post("api/users/register", { user });
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
  // Invitations
  async getInvitations({ commit }) {
    try {
      let invitations = await this.$axios.$get("/api/invitations/");
      commit("set_invitations", invitations);
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteInvitation({ dispatch}, id) {
    try {
      let response = await this.$axios.$delete("/api/invitations/" + id);
      await dispatch("getInvitations");
    } catch (error) {
      throw new Error(error);
    }
  },
  async generateInvitation({}, expiration) {
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
  // Profiles
  async getProfiles({ commit }) {
    try {
      let { profiles } = await this.$axios.$get("/api/profiles/");
      commit("set_profiles", profiles);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getProfileByName({}, name) {
    try {
      let { profile } = await this.$axios.$get("/api/profiles/user/" + name);
      return { profile };
    } catch (error){
      throw new Error(error);
    }
  },
  async getProfileById({}, id) {
    try {
      let { profile } = await this.$axios.$get("/api/profiles/" + id);
      return { profile };
    } catch (error) {
      throw new Error(error);
    }
  },
  async submitProfile({ dispatch }, { profile }) {
    try {
      let response = await this.$axios.$post("/api/profiles/", { profile });
      await dispatch("getProfiles");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateProfile({ dispatch }, { profile }) {
    try {
      let response = await this.$axios.$put("/api/profiles/" + profile._id, { profile });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteProfile({ dispatch }, id) {
    try {
      let response = await this.$axios.$delete("/api/profiles/" + id);
      await dispatch("getProfiles");
    } catch (error) {
      throw new Error(error);
    }
  },
  // Reports 
  async getReports({ commit }) {
    try {
      let { reports } = await this.$axios.$get("/api/reports/");
      commit("set_reports", reports);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReportById({ commit }, id) {
    try {
      let { reportData, sectionVisibility } = await this.$axios.$get("/api/reports/" + id);
      return { reportData, sectionVisibility };
    } catch (error) {
      throw new Error(error);
    }
  },
  async getReportBySlug({ commit }, slug) {
    try {
      let { report } = await this.$axios.$get("/api/reports/slug/" + slug);
      return { report };
    } catch (error) {
      return undefined;
    }
  },
  async deleteReport({ dispatch }, id) {
    try {
      let response = await this.$axios.$delete("/api/reports/" + id);
      await dispatch("getReports");
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateReport({ dispatch }, report) {
    try {
      let response = await this.$axios.$put("/api/reports/" + report.reportData._id, report);
      await dispatch("getReports");
    } catch (error) {
      throw new Error(error);
    }
  },
  async submitReport({ dispatch }, reportData) {
    try {
      let response = await this.$axios.$post("/api/reports/", reportData);
      await dispatch("getReports");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  // Server 
  async restartServer({ dispatch }) {
    try {
      let response = await this.$axios.$get("/api/server/restart");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  // Search
  search: debounce(async function({ commit }, query) {
    try {
      let results = await this.$axios.$post("/api/search", {query});
      commit("set_search_results", results);
    } catch (error) {
      throw new Error(error);
    }
  }, 200),
  changeSearch({ commit, dispatch }, query) {
    commit("change_search_input", query);
    dispatch("search", query);
  }
};
