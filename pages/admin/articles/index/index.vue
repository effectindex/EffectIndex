<template>
  <div>
    <hr>
    <table style="width: 100%;">
      <thead>
        <tr style="font-weight: bold;">
          <td> Author </td>
          <td> Date Published </td>
          <td> Title </td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="article in articles"
          :key="article._id"
        >
          <td>
            <span
              v-for="(author, index) in article.authors"
              :key="index"
            > {{ author.full_name || author.alias }} </span>
          </td>
          <td>
            {{ formatDate(article.publication_date) }}
          </td>
          <td> 
            <nuxt-link :to="'/articles/' + article.slug">
              {{ article.title }}
            </nuxt-link>
          </td>
          <td style="display: flex; justify-content: flex-end;">
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
import fecha from "fecha";

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
    formatDate(date) {
      return date ? fecha.format(new Date(date), "dddd, MMMM DD YYYY") : undefined;
    },
    async deleteArticle(id) {
      try {
        
        this.$toasted.show('Really delete?', {
          action: [{
              text: 'Yes, delete!',
              onClick: async (e, toastObject) => {
                try {
                  await this.$axios.delete(`/api/articles/${id}`);
                  toastObject.goAway(0);
                  this.$toasted.show(
                    'The report has been successfully deleted.',
                    {
                      duration: 2000,
                      type: 'success'
                    }
                  );
                  this.$fetch();
                } catch (error) {
                  if (error.response) {
                    this.$toasted.show(error.response.data.message, 
                    {
                      duration: 2000,
                      type: 'error'
                    });
                  } else {
                    console.log(error);
                  }
                }
              }
            },
            {
              text: 'No, keep!',
              onClick: (e, toastObject) => toastObject.goAway()
            }]
        });        
      } catch (error) {
        console.log(error);
      }


    }
  }
};
</script>
