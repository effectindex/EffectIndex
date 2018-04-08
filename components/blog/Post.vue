<template>

    <div class="blogPost">
        <h4 class="blogPost__date"> {{ formatDate(post.datetime) }} </h4>
        <h1 class="blogPost__title"> {{ post.title }} </h1>
        <div class="blogPost__body"> 
            <vue-markdown> {{ post.body }} </vue-markdown>
        </div>
    </div>

</template>

<script>
import * as moment from 'moment';
import VueMarkdown from 'vue-markdown';

export default {
    methods: {
        formatDate(date) {
            return moment(date).format('LLL');
        }
    },
    components: {
        VueMarkdown
    },
    props: ['post']
}

</script>

<style scoped>
    .blogPost {
        margin-bottom: 3em;
    }

    .blogPost__date {
        color: #999999;
        font-size: 18px;
    }
</style>