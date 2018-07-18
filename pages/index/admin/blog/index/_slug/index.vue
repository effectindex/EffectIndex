<template>
  <div>
    <hr>
    <post-editor 
      :post="post"
      @edit-post="submitPost" />
  </div>
</template>

<script>
  import PostEditor from '@/components/blog/PostEditor.vue';

  export default {
    components: {
      PostEditor
    },
    async asyncData ({ store, params }) {
      let { post } = await store.dispatch('getSingleBlogPost', params.slug);
      return { post };
    },
    methods: {
      async submitPost(post) {
        post._id = this.post._id;
        await this.$store.dispatch('updateBlogPost', post);
        this.$router.push('/blog');
      }
    },
    middleware: ['auth']
  };
</script>