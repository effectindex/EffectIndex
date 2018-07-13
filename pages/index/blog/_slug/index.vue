<template>

  <div class="pageContent blog">
    <div
      v-if="$auth.loggedIn"
      style="text-align: right;">
      <nuxt-link to="/blog/new"> ... submit a new blog post </nuxt-link>
    </div>

    <blog-post 
      v-if="post"
      :post="post"
      @delete-post="deletePost" /> 

    <nuxt-link to="/blog"> ... back </nuxt-link>
  </div>

</template>

<script>
import BlogPost from "@/components/blog/Post.vue";

export default {
  components: {
    BlogPost
  },
  methods: {
    async deletePost(id) {
      this.$store
        .dispatch("deleteBlogPost", id)
        .then(this.$router.push("/blog/"));
    }
  },
  async asyncData(app) {
    let slug = app.route.params.slug;
    let post = await app.store.dispatch("getSingleBlogPost", slug);
    return { post };
  }
};
</script>


<style scoped>
.blogPost {
  padding-bottom: 2em;
  margin-bottom: 3em;
  border-bottom: 1px solid #ddd;
}

.blogPost:last-of-type {
  border-bottom: 0;
}
</style>