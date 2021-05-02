<template>
  <article-editor
    v-show="!$fetchState.pending"
    class="pageContent"
    :article="article"
    :people="people"
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
      article: undefined,
      people: []
    }; 
  },
  async fetch() {
    try {
      const { id } = this.$route.params;
      const { article } = await this.$axios.$get(`/api/articles/admin/${id}`);
      const { people } = await this.$axios.$get(`/api/persons`);

      this.article = article;
      this.people = people;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>