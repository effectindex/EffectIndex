<template>
  <div class="pageContent">
    <hr>
    <post-editor
      @new-post="submitPost"
    />
  </div>
</template>

<script>
  import PostEditor from '@/components/blog/PostEditor.vue';

  export default {
    components: {
      PostEditor
    },
    methods: {
      async submitPost(post) {
        this.$store.dispatch('blog/submitPost', post).then(this.$router.push('/blog/'));
      }
    },
    middleware: ['auth']
  };
</script>