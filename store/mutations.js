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
      state.effects = effects;
    },
    set_gallery (state, data) {
      state.gallery.replications = data.replications;
      state.gallery.replicated_effects = data.replicated_effects;
      if (data.replicated_effects && data.replicated_effects.length > 0 && !state.gallery.selected_effect) {
        state.gallery.selected_effect = data.replicated_effects[0]._id;
      }
    },
    set_gallery_selected_effect (state, effectId) {
      state.gallery.selected_effect = effectId;
    },
    set_replications (state, replications) {
      state.replications = replications;
    },
    set_admin_user_list (state, userlist) {
      state.admin.userlist = userlist;
    }
};