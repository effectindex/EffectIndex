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
          :key="post._id" >
          <td> <nuxt-link :to="'/blog/' + post.slug"> {{ post.title }} </nuxt-link> </td>
          <td> {{ formatDate(post.datetime) }} </td>
          <td> <nuxt-link :to="'/admin/blog/' + post.slug"> <i class="fa fa-edit" /> </nuxt-link> </td>
          <td> 
            <a 
              style="color: red; cursor: pointer;"
              @click="deletePost(post._id)"> <i class="fa fa-times" /> </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import EffectTableRow from '@/components/effects/EffectTableRow.vue';
  import fecha from 'fecha';

  export default {
      components: { EffectTableRow },
      scrollToTop: true,
      computed: {
        blogPosts() {
          return this.$store.state.blogPosts;
        }
      },
      methods: { 
        async deletePost( id ) { this.$store.dispatch('deleteBlogPost', id); },
        formatDate: (date) => fecha.format(new Date(date), 'MMMM D, YYYY hh:mm:ss')
      },
      async fetch ( { store } ) { await store.dispatch('getBlogPosts'); }
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
      min-width: 200px;
      padding: 0.5em;
  }
</style>