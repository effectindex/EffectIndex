<template>
    <div class="blogPost">
        <div class="blogPost__admin" v-if="$auth.loggedIn">
            <nuxt-link class="blogPost__edit" :to="'/admin/blog/' + post.slug"> Edit </nuxt-link>    
            <a class="blogPost__delete" @click="$emit('delete-post', post._id)"> Delete </a>
        </div>
        <h4 class="blogPost__date"> 
            <nuxt-link :to="'/blog/' + post.slug + '/'"> {{ formatDate(post.datetime) }} </nuxt-link> </h4>
        <h1 class="blogPost__title"> <nuxt-link :to="'/blog/' + post.slug + '/'"> {{ post.title }} </nuxt-link>  </h1>
        <div class="blogPost__body" v-html="$md.render(post.body)" /> 
    </div>
</template>

<script>
import * as moment from 'moment';
export default {
    methods: {
        formatDate(date) {
            return moment(date).format('LLL');
        }
    },
    props: ['post', 'loggedIn']
}

</script>

<style scoped>
    .blogPost__date {
        color: #999999;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
    }

    .blogPost__date a {
        color: #AAA;
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