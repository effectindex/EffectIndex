export default {
    // Blog Posts
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
    // Effects
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
    async getEffect({ commit }, snakeName) {
      let { effect } = await this.$axios.$get('/api/effects/' + snakeName);
      return { effect };
    },
    // Replications
    async getReplications({ commit }) {
      try {
        let { replications } = await this.$axios.$get('/api/replications');
        commit ('set_replications', replications);
      } catch (error) {
        throw new Error(error)
      }
    },
    async submitReplication({ dispatch }, replication) {
        try {
            let {replication: submittedReplication} = await this.$axios.$post('/api/replications', {replication});
            return submittedReplication;
        } catch (error) {
            throw new Error(error);
        }
    },
    async updateReplication({ dispatch }, replication) {
      let { replication: updatedReplication } = await this.$axios.$post('/api/replications/' + replication.id, {replication});
      dispatch('getReplications');
      return updatedReplication;
    },
    async deleteReplication({ dispatch }, id) {
      let { replication: deletedReplication } = await this.$axios.$delete('/api/replications/' + id);
      dispatch ('getReplications');
      return deletedReplication;
    },
    async getReplication({ commit }, snakeName) {
      let { replication } = await this.$axios.$get('/api/replications/' + snakeName);
      return { replication };
    },    
};