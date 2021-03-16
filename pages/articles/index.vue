<template>
  <div class="pageContent">
    <h1> Articles </h1>
    <ul class="article-list">
      <article-list-item
        v-for="article in articles"
        :key="article._id"
        :article="article"
      />
    </ul>
  </div>
</template>

<script>
import ArticleListItem from '@/components/articles/ArticleListItem';

export default {
  components: {
    ArticleListItem
  },
  data() {
    return {
      articles: undefined
    };
  },
  async fetch() {
    try {
      const { articles } = await this.$axios.$get('/api/articles');
      this.articles = articles;
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    const { article } = this;
    return {
      title: article.name,
      meta: [
        { name: 'description', hid: 'description', content: article.short_description },
        { name: 'og:title', hid: 'og:title', content: `Effect Index - ${article.title}` },
        { name: 'og:description', hid: 'og:description', content: article.short_description },
        { name: 'og:image', hid: 'og:image', content: article.social_media_image },
        { name: 'twitter:title', hid: 'twitter:title', content: `Effect Index - ${article.title}` },
        { name: 'twitter:description', hid: 'twitter:description', content: article.short_description },
        { name: 'twitter:image', hid: 'twitter:image', content: article.social_media_image },
      ]
    };
  }
};
</script>

<style scoped>
  .article-list {
    list-style: none;
    padding-left: 0;
  }
</style>