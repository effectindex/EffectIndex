export default {
    async deleteBlogPost ( { dispatch }, id ) {
      let deleted = await this.$axios.$get('/api/blog/' + id + '/delete');
      dispatch('getBlogPosts');
    },
    async getBlogPosts({ commit }) {
      let { posts } = await this.$axios.$get('/api/blog');
      commit('set_blog_posts', posts);
    },
    async getSingleBlogPost({ commit }, slug) {
      let { post } = await this.$axios.$get('/api/blog/' + slug);
      return post;
    },
    async submitBlogPost({ dispatch }, post) {
      try {
        let {post: submittedPost} = await this.$axios.$post('/api/blog', post);
        dispatch('getBlogPosts');
      } catch (error) {
        throw new Error(error);
      }
    },
    async updateBlogPost({ dispatch }, post) {
      let { post: updatedPost } = await this.$axios.$post('/api/blog/' + post._id, post);
      dispatch('getBlogPosts');
      return updatedPost;
    },
    async getEffects({ commit }) {
      try {
        let { effects } = await this.$axios.$get('/api/effects');
        commit ('set_effects', effects);
      } catch (error) {
        throw new Error(error)
      }
    },
    async submitEffect({ dispatch }, effect) {
        try {
            let {effect: submittedEffect} = await this.$axios.$post('/api/effects', {effect});
            return submittedEffect;
        } catch (error) {
            throw new Error(error);
        }
    },
    async updateEffect({ dispatch }, effect) {
      let { effect: updatedEffect } = await this.$axios.$post('/api/effects/' + effect.id, effect);
      dispatch('getEffects');
      return updatedEffect;
    },
    async deleteEffect({ dispatch }, id) {
      let { effect: deletedEffect } = await this.$axios.$delete('/api/effects/' + id);
      dispatch ('getEffects');
      return deletedEffect;
    },
    async getEffect({ commit }, name) {
      let { effect } = await this.$axios.$get('/api/effects/' + name);
      return { effect };
    }
};