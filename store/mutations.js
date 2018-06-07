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
    },
    set_gallery (state, data) {
      state.dbgallery.replications = data.replications;
      state.dbgallery.replicated_effects = data.replicated_effects;
      if (data.replications && data.replications.length > 0 && !state.dbgallery.selected_effect) {
        state.dbgallery.selected_effect = data.replications[0]._id;
      }
    },
    set_gallery_selected_effect (state, effectId) {
      state.dbgallery.selected_effect = effectId;
    },
    set_replications (state, replications) {
      state.replications = replications;
    }
};