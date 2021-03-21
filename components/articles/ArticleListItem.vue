<template>
  <li class="article-list-item">
    <div class="column-container">
      <div class="left-side">
        <div class="titles">
          <h3>
            <nuxt-link :to="`/articles/${article.slug}`">
              {{ article.title }}
            </nuxt-link>
            <icon
              v-show="article.featured"
              filename="star.svg"
            />
          </h3>
          <h4> {{ article.subtitle }} </h4>
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
        <p v-show="article.short_description">
          {{ article.short_description }}
        </p>
      </div>
      <div
        v-show="article.social_media_image"
        class="right-side"
      >
        <img :src="article.social_media_image">
      </div>
    </div>
    <div class="bottom">
      <div class="authors">
        <author-info
          v-for="author in article.authors"
          :key="author._id"
          :author="author"
          :social-media="false"
        />
      </div>
      <div class="tags">
        <tag
          v-for="(tag, index) in article.tags"
          :key="index"
          :value="tag"
        />
      </div>
    </div>
  </li>
</template>

<script>
import AuthorInfo from './AuthorInfo';
import Tag from '@/components/articles/Tag';
import Icon from '@/components/Icon';

import fecha from "fecha";

export default {
  components: {
    AuthorInfo,
    Tag,
    Icon
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
        return Math.round(raw.length / 1200);
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
    padding: 0.5em;
    margin: 1em 0;
    background-color: #fbfbfb;
    border: 1px solid #E8E8E8;
    border-bottom: 1px solid #D8D8D8;
  }

  .column-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }

  img {
    max-width: 100%;
  }

  .icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-left: 1em;
    opacity: 0.7;
  }

  .bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }


  .article-list-item p {
    padding: 1em 0;
    font-style: italic;
  }

  .left-side {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-side {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }



  .titles {
    line-height: 1.5em;
  }

  .titles h3 {
    display: flex;
    align-items: center;
  }

  .titles h3, .titles h4 {
    margin: 0;
    text-transform: none;
    letter-spacing: unset;
  }


  .titles h4 {
    text-transform: none;
    letter-spacing: unset;
    color: #AAA;
  }

  .info {
    color: #777;
    margin: 0.5em 0;
  }

  .authors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .publication-date, .read-time {
    display: inline-block;
  }

  @media(max-width: 1000px) {
    .column-container {
      flex-direction: column;
      padding: 1em 0;
    }

    img {
      max-width: 100%;
    }

    .right-side {
      flex-direction: row;
      justify-content: center;
      align-self: center;
      max-width: 500px;
      padding: 0;
    }

  .bottom {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  }

</style>