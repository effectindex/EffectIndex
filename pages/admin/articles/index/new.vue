<template>
  <div class="pageContent">
    <hr>
    <article-editor
      @new-post="submitPost"
    />
  </div>
</template>

<script>
  import ArticleEditor from '@/components/articles/ArticleEditor.vue';

  export default {
    components: {
      ArticleEditor
    },
    methods: {
      async submitPost(article) {
        const results = await this.$axios.post('/api/articles', { article });
        console.log(results);
      }
    },
    middleware: ['auth']
  };
</script>