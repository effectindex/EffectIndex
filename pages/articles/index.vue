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
    <article-view-selector
      :selected="viewMode"
      @selectView="changeView"
    />
    <ul
      v-if="sortedArticles && (viewMode === 'publishDate')"
      class="article-list"
    >
      <article-list-item
        v-for="article in sortedArticles"
        :key="article._id"
        :article="article"
      />
    </ul>
    <div v-else-if="viewMode === 'author'">
      <div
        v-for="author in sortedAuthors"
        :key="author._id"
        class="author-articles"
      >
        <author-info :author="author" />
        <ul class="article-list">
          <article-list-item
            v-for="article in articlesByAuthor(author._id)"
            :key="article._id"
            :short="true"
            :article="article"
          />
        </ul>
      </div>
    </div>
    <ul
      v-else-if="viewMode === 'title'"
      class="article-list"
    >
      <article-list-item
        v-for="article in articlesSortedByTitle"
        :key="article._id"
        :article="article"
      />
    </ul>
  </div>
</template>

<script>
import ArticleListItem from '@/components/articles/ArticleListItem';
import ArticleViewSelector from '@/components/articles/ArticleViewSelector';
import AuthorInfo from '@/components/articles/AuthorInfo';
import Icon from '@/components/Icon';

export default {
  components: {
    ArticleListItem,
    ArticleViewSelector,
    Icon,
    AuthorInfo
  },
  data () {
    return {
      articles: undefined,
      authors: undefined,
      viewMode: 'publishDate', // publishDate, author, title
      sortDirection: false // true -> asc, false -> desc
    };
  },
  computed: {
    sortedAuthors () {
      return this.sortDirection ? this.authors : this.authors.slice().reverse();
    },
    sortedArticles () {
      const { articles } = this;
      if (articles) return this.sortDirection ? articles : articles.slice().reverse();
      else return undefined;
    },
    articlesSortedByTitle() {
      const byTitle = this.articles.slice().sort(
        (a, b) => {
          return a.title.toLowerCase() < b.title.toLowerCase();
        });
      
      return this.sortDirection ? byTitle : byTitle.reverse();
    }
  },
  async fetch() {
    try {
      const { articles, authors } = await this.$axios.$get('/api/articles');
      this.articles = articles;
      this.authors = authors;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    changeView(viewMode) {
      if (viewMode === this.viewMode) this.sortDirection = !this.sortDirection;
      else this.viewMode = viewMode;
    },
    articlesByAuthor(id) {
      return this.articles.filter(article => article.authors.some(articleAuthor => articleAuthor._id === id));
    }
  }
};
</script>

<style scoped>
  .article-list {
    list-style: none;
    padding-left: 0;
  }

  .author-articles:not(:last-child) {
    margin-bottom: 25px;
    padding-bottom: 25px;
  }
  .articleViewSelector {
    margin-bottom: 25px;
  }
</style>