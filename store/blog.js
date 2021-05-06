
export const state = () => ({
  posts: []
});

export const mutations = {
  set_posts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async deletePost({ dispatch }, id) {
    await this.$axios.$get("/api/blog/" + id + "/delete");
    dispatch("getPosts");
  },
  async getPosts({ commit }) {
    let { posts } = await this.$axios.$get("/api/blog");
    commit("set_posts", posts);
  },
  async getPost(_, slug) {
    let { post } = await this.$axios.$get("/api/blog/" + slug);
    return { post };
  },
  async submitPost({ dispatch }, post) {
    try {
      await this.$axios.$post("/api/blog", post);
      dispatch("getPosts");
    } catch (error) {
      throw new Error(error);
    }
  },
  async updatePost({ dispatch }, post) {
    let { post: updatedPost } = await this.$axios.$post(
      "/api/blog/" + post._id,
      post
    );
    dispatch("getPosts");
    return updatedPost;
  }
};


