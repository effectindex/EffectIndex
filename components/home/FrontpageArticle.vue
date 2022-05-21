<template>
  <div v-if="pinnedArticle">
    <ul class="frontpage-article">
      <article-list-item
        :key="pinnedArticle._id"
        :article="pinnedArticle"
        :show-featured-icon="false"
        :show-tags="false"
      />
    </ul>
  </div>
</template>

<script>
import ArticleListItem from '@/components/articles/ArticleListItem';

export default {
  components: {
    ArticleListItem,
  },
  computed: {
    articles() {
      return this.$store.state.articles.list;
    },
    pinnedArticle() {
      const articles = this.articles.filter((article) => article.frontpage);
      console.log(articles);
      return articles[0];
    }
  }
};
</script>

<style scoped>
.frontpage-article {
  list-style: none;
  padding-left: 0;
}
</style>
