<template>
  <div class="featuredArticle">
    <div class="articleTitle">
      <nuxt-link :to="`/articles/${article.slug}`">
        {{ article.title }}
      </nuxt-link>
    </div>
    <div class="articleAuthors">
      by {{ authors }}
    </div>
    <div class="articleInfo">
      <div class="publicationDate">
        {{ publicationDate }}
      </div>
      <div class="separator">
        ·
      </div>
      <div class="articleLength">
        {{ readTime }} min read
      </div>
    </div>
    <p class="articleDescription">
      {{ article.short_description }}
    </p>
  </div>
</template>

<script>
import fecha from 'fecha';

export default {
  props: {
    article: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    publicationDate() {
      if (this.article) {
        const publicationDate = this.article.publication_date;
        return publicationDate ? fecha.format(new Date(publicationDate), "dddd, MMMM DD YYYY") : undefined;
      } else {
        return undefined;
      }
    },
    readTime() {
      if (this.article && this.article.body && this.article.body.length) {
        const { length } = this.article.body;
        return Math.round(length / 1200);
      } else {
        return 'Unknown';
      }
    },
    authors () {
      const { authors } = this.article;
      let str = '';
      if (authors) {
          authors.forEach((author, index) => {
            str += author.full_name;
            if (index < authors.length - 2) {
              str += ', ';
            } else if (index < authors.length - 1) {
              str += ' and ';
            }
          });
      }
      return str;
    },
  }
};
</script>