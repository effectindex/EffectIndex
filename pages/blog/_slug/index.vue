<template>
  <div class="pageContent blog">
    <blog-post 
      v-if="post"
      :post="post"
      @delete-post="deletePost"
    /> 

    <nuxt-link to="/blog">
      ... back
    </nuxt-link>
  </div>
</template>

<script>
import BlogPost from "@/components/blog/Post.vue";

export default {
  components: {
    BlogPost
  },
  async asyncData({ store, params, error }) {
    let { post } = await store.dispatch("blog/getPost", params.slug);
    if (!post) error({statusCode: 404, message: 'Blog post not found.'});
    return { post };
  },
  methods: {
    async deletePost(id) {
      this.$store
        .dispatch("blog/deletePost", id)
        .then(this.$router.push("/blog/"));
    }
  },
  head() {
    return {
      title: this.post.title
    };
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