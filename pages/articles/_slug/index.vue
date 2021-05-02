<template>
  <div class="pageContent">
    <article
      v-show="!$fetchState.pending"
      class="article"
    >
      <client-only>
        <admin-toolbar 
          v-if="$auth.hasScope('editor')"
          :item-id="article._id"
          item-url="/admin/articles"
        />
      </client-only>

      <h1 class="title">
        {{ article.title }}
      </h1>
      <h2 class="subtitle">
        {{ article.subtitle }}
      </h2>

      <byline :article="article" />

      <hr style="margin: 2em 0;">

      <div class="body">
        <vcode
          :body="article.body"
        />
      </div>
      
      <div
        v-if="hasSection('citations')"
        class="citations"
      >
        <hr>
        <h3> References </h3>
        <citation-list :citations="article.citations" />
      </div>

      <div
        v-if="hasSection('tags')"
        class="tags"
      >
        <hr>
        <h3> Tags </h3>
        <tag
          v-for="tag in article.tags"
          :key="tag"
          :value="tag"
        />
      </div> 
    </article>
  </div>
</template>

<script>
import AdminToolbar from '@/components/AdminToolbar';
import Byline from '@/components/articles/Byline';
import CitationList from '@/components/CitationList';
import Tag from '@/components/articles/Tag';

export default {
  components: {
    AdminToolbar,
    Byline,
    CitationList,
    Tag
  },
  data() {
    return {
      article: () => ({
        title: undefined,
        subtitle: undefined,
        _id: undefined,
        citations: [],
        tags: [],
        body: {
          parsed: []
        }
      })
    };
  },
  async fetch() {
    try {
      const { slug } = this.$route.params;
      const { article } = await this.$axios.$get(`/api/articles/${ slug }`);
      this.article = article;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    hasSection(name) {
      const { article } = this;
      if (name in article) {
        const section = article[name];
        if (Array.isArray(section) && (section.length > 0)) return true;
        if ((typeof section === "string") && (section.length > 0)) return true;
      }
      return false;
    }
  },
  head() {
    function names(authors) {
      if (Array.isArray(authors) && authors.length) {
        let title = '- ';
        authors.forEach((author, index) => {
          title += author.full_name;
          if (index < authors.length - 1) title += ', ';
        });
        return title;
      } else return '';
    }

    const { article } = this;
    if (article) {
      return {
        title: `${article.title} ${names(article.authors)}`,
        meta: [
          { name: 'description', hid: 'description', content: article.short_description },
          { name: 'og:title', hid: 'og:title', content: `${article.title} ${names(article.authors)} - EffectIndex` },
          { name: 'og:description', hid: 'og:description', content: article.short_description },
          { name: 'og:image', hid: 'og:image', content: article.social_media_image },
          { name: 'twitter:title', hid: 'twitter:title', content: `${article.title} ${names(article.authors)} - EffectIndex` },
          { name: 'twitter:description', hid: 'twitter:description', content: article.short_description },
          { name: 'twitter:image', hid: 'twitter:image', content: article.social_media_image },
        ]
      };
    }
  }
};
</script>

<style>
.article > .title {
  font-size: 30px;
  font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, "Segoe UI";
}

.article > .subtitle {
  color: #999;
  font-weight: normal;
  letter-spacing: unset;
  font-size: 25px;
}

.article .body p {
  line-height: 1.5em;
}

.article ul li {
  color: black;
  margin: 1em 0;
}

.article h1.title {
  font-size: 35px;
  margin-bottom: 0;
}

.article h2, .article h3, .article h4 {
  margin: 1em 0;
}

.article h2 {
  font-size: 32px;
  letter-spacing: 1px;
}

.article h3 {
  font-size: 28px;
  text-transform: none;
}

.article h4 {
  font-size: 24.5px;
  text-transform: none;
  letter-spacing: unset;
}



</style>