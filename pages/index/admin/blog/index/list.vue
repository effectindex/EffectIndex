<template>
  <div class="pageContent">
    <hr>
    <h4> Blog Posts </h4>
    <table>
      <thead>
        <tr>
          <td> Title </td>
          <td> Date </td>
          <td />
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="post in blogPosts"
          :key="post._id"
        >
          <td>
            <nuxt-link :to="'/blog/' + post.slug">
              {{ post.title }}
            </nuxt-link>
          </td>
          <td> {{ formatDate(post.datetime) }} </td>
          <td style="width: 30px;"> 
            <nuxt-link :to="'/admin/blog/' + post.slug">
              <Icon
                filename="edit.svg"
                style="height: 1em; width: 1em;"
              />
            </nuxt-link> 
          </td>
          <td style="width: 30px;"> 
            <a 
              style="cursor: pointer;"
              @click="deletePost(post._id)"
            >
              <Icon
                filename="times.svg"
                style="height: 1em; width: 1em;"
                color="red"
              /> </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fecha from 'fecha';
import Icon from '@/components/Icon';

export default {
    components: {
      Icon
    },
    scrollToTop: true,
    computed: {
      blogPosts() {
        return this.$store.state.blogPosts;
      }
    },
    async fetch ( { store } ) { await store.dispatch('getBlogPosts'); },
    methods: { 
      async deletePost( id ) { this.$store.dispatch('deleteBlogPost', id); },
      formatDate: (date) => fecha.format(new Date(date), 'MMMM D, YYYY hh:mm:ss')
    },
};
</script>

<style scoped>
  .replicationList {
      padding: 0;
      list-style: none;
  }

  .replicationTable {
      width: 100%;
      max-width: 800px;
  }

  thead {
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
  }

  td {
      padding: 0.5em;
  }
</style>