<template>
  <div class="pageContent">
    <Icon
      filename="file-invoice.svg"
      class="categoryIcon"
    />
    <h1> Articles </h1>
    <p class="intro">
      This index contains a range of articles on a variety of different topics, each of which are relevant to the field of Subjective Effect Documentation or psychonautics as a whole.
    </p>
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
import Icon from '@/components/Icon';

export default {
  components: {
    ArticleListItem,
    Icon
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
  }
};
</script>

<style scoped>
  .article-list {
    list-style: none;
    padding-left: 0;
  }

  .intro {
  
  }
</style>