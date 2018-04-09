<template>

<div class="blog">
        <div style="text-align: right;" v-if="$auth.loggedIn">
            <nuxt-link to="/blog/new"> ... submit a new blog post </nuxt-link>
        </div>

        <blog-post v-for="post in posts" :key="post._id" :post="post" /> 
</div>

</template>

<script>
    import BlogPost from '@/components/blog/Post.vue';

    export default {
        components: {
            BlogPost
        },
        data () {
            return {
                body: '',
                title: ''
            }
        },
        async asyncData ({ app }) {
            let { posts } = await app.$axios.$get('/api/blog');
            return { posts };
        }
    }
</script>


<style scoped>
    .admin {
        background-color: white;
        height: 100vh;
    }

    li {
        color: rgba(26, 26, 26, .7);
        margin-bottom: 0.25em;
    }

    ul {
        margin-bottom: 1em;
    }
</style>