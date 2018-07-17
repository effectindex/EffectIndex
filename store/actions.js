export default {
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
    return post;
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
    let { effect: updatedEffect } = await this.$axios.$post(
      "/api/effects/" + effect.id,
      effect
    );
    await dispatch("getEffects");
    return updatedEffect;
  },
  async deleteEffect({ dispatch }, id) {
    let { effect: deletedEffect } = await this.$axios.$delete(
      "/api/effects/" + id
    );
    dispatch("getEffects");
    return deletedEffect;
  },
  async getEffect({ commit }, snakeName) {
    let { effect } = await this.$axios.$get("/api/effects/" + snakeName);
    return { effect };
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
  // Invitations
  async getInvitations({ commit }) {
    try {
      let invitations = await this.$axios.$get("/api/invitations/");
      commit("set_invitations", invitations);
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
  // Reports 
  async getReports({ commit }) {
    try {
      let { reports } = await this.$axios.$get("/api/reports/");
      commit("set_reports", reports);
    } catch (error) {
      throw new Error(error);
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
      let response = await this.$axios.$put("/api/reports/" + report._id, { report });
      await dispatch("getReports");
    } catch (error) {
      throw new Error(error);
    }
  },
  async submitReport({ dispatch }, report) {
    try {
      let response = await this.$axios.$post("/api/reports/", { report });
      await dispatch("getReports");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
};
