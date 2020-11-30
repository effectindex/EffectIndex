<template>
  <div class="pageContent article">
    <admin-toolbar 
      v-if="$auth.hasScope('editor')"
      :item-id="article._id"
      item-url="/admin/articles"
    />
    <h1> {{ article.title }} </h1>
    <rendered-vcode
      :body="article.body.parsed"
    />
  </div>
</template>

<script>
import RenderedVcode from '@/components/vcode/rendered';
import AdminToolbar from '@/components/AdminToolbar';

export default {
  components: {
    RenderedVcode,
    AdminToolbar
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