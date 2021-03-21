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
    <p class="articleDescription">
      {{ article.short_description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: undefined
    }
  },
  computed: {
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
    }
  }
};
</script>