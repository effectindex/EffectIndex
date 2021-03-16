<template>
  <li class="article-list-item">
    <div class="left-side">
      <div class="titles">
        <h3>
          <nuxt-link :to="`/articles/${article.slug}`">
            {{ article.title }}
          </nuxt-link>
        </h3>
        <h4> {{ article.subtitle }} </h4>
      </div>
      <div class="authors">
        <author-info
          v-for="author in article.authors"
          :key="author._id"
          :author="author"
        />
      </div>
      <div class="info">
        <div
          v-if="publicationDate"
          class="publication-date"
        >
          {{ publicationDate }} ·
        </div>
        <div class="read-time">
          {{ readTime }} Minute Read
        </div> 
      </div>
    </div>
    <div class="right-side">
      <img :src="article.social_media_image">
    </div>
  </li>
</template>

<script>
import AuthorInfo from './AuthorInfo';
import fecha from "fecha";

export default {
  components: {
    AuthorInfo
  },
  props: {
    article: {
      type: Object,
      default: () => ({
        name: undefined
      })
    }
  },
  computed: {
    readTime() {
      if (this.article && this.article.body && this.article.body.raw) {
        const { raw } = this.article.body;
        return Math.round(raw.length / 800);
      } else {
        return 'Unknown';
      }
    },
    publicationDate() {
      if (this.article) {
        const publicationDate = this.article.publication_date;
        return publicationDate ? fecha.format(new Date(publicationDate), "dddd, MMMM DD YYYY") : undefined;
      } else {
        return undefined;
      }
    }
  }
};
</script>

<style scoped>
  .article-list-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0.5em;
    margin: 1em 0;
    background-color: #fbfbfb;
    border: 1px solid #D8D8D8;
  }

  .left-side {
    flex: 5
  }

  .right-side {
    flex: 2;
    padding-left: 1em;
  }

  img {
    max-width: 100%;
  }

  .titles {
    line-height: 1.5em;
    margin-bottom: 1em;
  }

  .titles h3, .titles h4 {
    margin: 0;
  }

  .titles h4 {
    text-transform: none;
    letter-spacing: unset;
    color: #AAA;
  }

  .info {
    color: #999;
  }

  .authors {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }

  .publication-date, .read-time {
    display: inline-block;
  }
</style>