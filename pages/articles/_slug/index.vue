<template>
  <div class="pageContent article">
    <admin-toolbar 
      v-if="$auth.hasScope('editor')"
      :item-id="article._id"
      item-url="/admin/articles"
    />
    <h1 class="title">
      {{ article.title }}
    </h1>
    <h2 class="subtitle">
      {{ article.subtitle }}
    </h2>

    <byline :article="article" />

    <div class="body">
      <rendered-vcode
        :body="article.body.parsed"
      />
    </div>

    <div class="authors">
      <author-info
        v-for="author in article.authors"
        :key="author._id"
        :author="author"
      />
    </div>

    <div
      v-if="hasCitations"
      class="citations"
    >
      <hr>
      <h3> References </h3>
      <citation-list :citations="article.citations" />
    </div>
  </div>
</template>

<script>
import RenderedVcode from '@/components/vcode/rendered';
import AdminToolbar from '@/components/AdminToolbar';
import Byline from '@/components/articles/Byline';
import CitationList from '@/components/CitationList';
import AuthorInfo from '@/components/articles/AuthorInfo.vue';

export default {
  components: {
    RenderedVcode,
    AdminToolbar,
    Byline,
    CitationList,
    AuthorInfo
  },
  data() {
    return {
      article: {
        title: undefined,
        body: {
          parsed: undefined
        },
        _id: undefined
      }
    };
  },
  computed: {
    hasCitations() {
      const { article } = this;
      if (article) {
        return Array.isArray(article.citations) && article.citations.length;
      } else {
        return undefined;
      }
    }
  },
  async fetch() {
    try {
      const { slug } = this.$route.params;
      const result = await this.$axios.get(`/api/articles/${slug}`);
      const { article } = result.data;
      this.article = article;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.article .body p {
  font-size: 20px;
  line-height: 1.5em;
}

.article .body {
  margin-bottom: 2em;
}

.article .title {
  font-size: 35px;
}

.article .subtitle {
  color: #999;
  font-weight: normal;
}

</style>