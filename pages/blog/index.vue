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
  async fetch({ store }) {
    await store.dispatch("blog/getPosts");
  },
  head () {
    return { title: "Blog" };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blog.posts;
    }
  },
  methods: {
    async deletePost(id) {
      this.$store.dispatch("blog/deletePost", id);
    }
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
