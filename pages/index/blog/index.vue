<template>
  <div class="pageContent blog">
    <blog-post 
      v-for="post in blogPosts"
      :key="post._id"
      :post="post"
      @delete-post="deletePost"
    /> 
  </div>
</template>

<script>
import BlogPost from "@/components/blog/Post.vue";

export default {
  components: {
    BlogPost
  },
  scrollToTop: true,
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getBlogPosts");
  },
  methods: {
    async deletePost(id) {
      this.$store.dispatch("deleteBlogPost", id);
    }
  },
  head () {
    return { title: "Blog" };
  }
};
</script>


<style>
.blogPost {
  padding-bottom: 2em;
  margin-bottom: 3em;
  border-bottom: 1px solid #ddd;
}

.blogPost:last-of-type {
  border-bottom: 0;
}
</style>