<template>
  <div class="pageContent article">
    <h1> {{ title }} </h1>
    <rendered-vcode
      :body="body.parsed"
    />
  </div>
</template>

<script>
import RenderedVcode from '@/components/vcode/rendered';

export default {
  components: {
    RenderedVcode
  },
  data() {
    return {
      title: undefined,
      body: {
        raw: undefined,
        parsed: undefined
      }
    };
  },
  async fetch() {
    try {
      const { slug } = this.$route.params;
      const result = await this.$axios.get(`/api/articles/${slug}`);
      const { article } = result.data;
      Object.assign(this, article);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>