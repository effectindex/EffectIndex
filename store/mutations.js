export default {
    toggle_navbar (state) {
      state.navbar_pullout = !state.navbar_pullout
    },
    set_blog_posts (state, posts) {
      state.blogPosts = posts;
    },
    set_single_blog_post (state, post) {
      state.singleBlogPost = post;
    },
    set_effects (state, effects) {
      state.dbeffects = effects;
    }
};