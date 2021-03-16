<template>
  <div class="byline">
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
    <div class="authors">
      <author-info
        v-for="author in article.authors"
        :key="author._id"
        :author="author"
      />
    </div>
  </div>
</template>

<script>
import fecha from "fecha";
import AuthorInfo from './AuthorInfo';

export default {
  components: {
    AuthorInfo
  },

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
      if (this.article && this.article.body && this.article.body.raw) {
        const { raw } = this.article.body;
        return Math.round(raw.length / 800);
      } else {
        return 'Unknown';
      }
    }
  }
};
</script>

<style scoped>

.authors {
  display: flex;
  flex-direction: row;
}

.articleInfo {
  display: flex;
  flex-direction: row;
  color: #999;
  margin-bottom: 1em;
}

.articleInfo .publicationDate {
  margin-right: 5px;
}

.articleInfo .articleLength {
  margin-left: 5px;
}
</style>