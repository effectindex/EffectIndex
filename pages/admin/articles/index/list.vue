<template>
  <div>
    <hr>
    <table style="width: 100%;">
      <thead>
        <tr>
          <td> Title </td>
          <td> Author </td>
          <td> Tags </td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="article in articles"
          :key="article._id"
        >
          <td> 
            <nuxt-link :to="'/articles/' + article.slug">
              {{ article.title }}
            </nuxt-link>
          </td>
          <td> {{ article.author ? article.author.name : '' }} </td>
          <td>
            <span 
              v-for="tag in article.tags"
              :key="tag"
              class="articleTag"
            >
              {{ tag }}
            </span>
          </td>
          <td style="display: flex;">
            <nuxt-link :to="'/admin/articles/' + article._id">
              <Icon
                filename="edit.svg"
                style="cursor: pointer; height: 1em; width: 1em; padding-right: 2em;"
              /> 
            </nuxt-link> 
            <a @click="deleteArticle(article._id)"> 
              <Icon
                filename="times.svg"
                style="height: 1em; width: 1em; cursor: pointer;"
                color="red"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  data() {
    return {
      articles: undefined
    };
  },
  async fetch() {
    try {
      const results = await this.$axios.get('/api/articles/admin');
      const { articles } = results.data;
      this.articles = articles;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async deleteArticle(id) {
      try {
        const result = await this.$axios.delete(`/api/articles/${id}`);

        this.$toasted.show(
          'The report has been successfully deleted.',
          {
            duration: 2000,
            type: 'success'
          }
        );

        this.$fetch();

      } catch (error) {
        console.log(error);
      }


    }
  }
};
</script>
