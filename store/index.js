import Vuex from 'vuex'
import effects from '@/data/effects.json';
import navigation from '@/data/navigation.json';
import gallery from '@/data/gallery.json';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      navbar_pullout: false,
      effects,
      navigation,
      gallery,
      blogPosts: []
    },
    mutations: {
      toggle_navbar (state) {
        state.navbar_pullout = !state.navbar_pullout
      },
      set_blog_posts (state, posts) {
        state.blogPosts = posts;
      },
      set_single_blog_post (state, post) {
        state.singleBlogPost = post;
      }
    },
    actions: {
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
      }
    }
  })
}

export default createStore