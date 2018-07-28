<template>
  <div class="blogPost">
    <div 
      v-if="$auth.loggedIn"
      class="blogPost__admin">
      <nuxt-link 
        :to="'/admin/blog/' + post.slug"
        class="blogPost__edit"> <i class="fa fa-edit" /> </nuxt-link>    
      <a 
        class="blogPost__delete"
        @click="$emit('delete-post', post._id)"> <i class="fa fa-times" /> </a>
    </div>
    <h4 class="blogPost__date"> 
      <nuxt-link 
        :to="'/blog/' + post.slug + '/'"
        style="text-decoration: none;"> {{ formatDate(post.datetime) }} </nuxt-link> </h4>
    <h1 class="blogPost__title">
      <nuxt-link 
        :to="'/blog/' + post.slug + '/'"
        style="text-decoration: none;"> {{ post.title }} </nuxt-link>
    </h1>
    <div 
      class="blogPost__body"
      v-html="$md.render(post.body)" /> 
  </div>
</template>

<script>
import fecha from "fecha";
export default {
  props: {
    post: {
      type: Object,
      default: undefined
    },
    loggedIn: {
      type: String,
      default: ""
    }
  },
  methods: {
    formatDate(date) {
      return fecha.format(new Date(date), "dddd MMMM DD YYYY");
    }
  }
};
</script>

<style scoped>
.blogPost__date {
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
}

.blogPost__date a {
  color: #aaa;
}

.blogPost__title a {
  color: black;
}

.blogPost__admin a {
  padding-right: 0.5em;
  cursor: pointer;
  padding-right: 0.5em;
}

.blogPost__editButton {
  color: rgb(35, 8, 155);
}

.blogPost__delete {
  color: red;
}
</style>