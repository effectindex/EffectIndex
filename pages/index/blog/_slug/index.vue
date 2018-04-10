<template>

<div class="blog">
        <div style="text-align: right;" v-if="$auth.loggedIn">
            <nuxt-link to="/blog/new"> ... submit a new blog post </nuxt-link>
        </div>

        <blog-post v-if="post" :post="post" /> 

        <nuxt-link to="/blog"> ... back </nuxt-link>
</div>

</template>

<script>
    import BlogPost from '@/components/blog/Post.vue';

    export default {
        components: {
            BlogPost
        },
        async asyncData ( {app, params} ) {
            let { post } = await app.$axios.$get('/api/blog/' + params.slug);
            return { post };
        }
    }
</script>


<style>
    .blogPost {
        padding-bottom: 2em;
        margin-bottom: 3em;
        border-bottom: 1px solid #DDD;
    }

    .blogPost:last-of-type {
        border-bottom: 0;
    }
</style>