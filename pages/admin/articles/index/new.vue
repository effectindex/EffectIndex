<template>
  <div class="pageContent">
    <hr>
    <article-editor
      :people="people"
      @new-post="submitPost"
    />
  </div>
</template>

<script>
  import ArticleEditor from '@/components/articles/ArticleEditor.vue';

  export default {
    components: {
      ArticleEditor
    },
    data() {
      return {
        people: undefined
      };
    },
    async fetch() {
      try {
        const { people } = await this.$axios.$get(`/api/persons`);
        this.people = people;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      async submitPost(article) {
        const results = await this.$axios.$post('/api/articles', { article });
      }
    },
    middleware: ['auth']
  };
</script>