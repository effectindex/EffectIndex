<template>
  <article-editor
    :article="article"
  />
</template>

<script>
import ArticleEditor from '@/components/articles/ArticleEditor';

export default {
  components: {
    ArticleEditor
  },
  data () {
    return {
      article: undefined
    }; 
  },
  async fetch() {
    try {
      const { id } = this.$route.params;
      const result = await this.$axios.get(`/api/articles/admin/${id}`);
      const { article } = result.data;
      this.article = article;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>