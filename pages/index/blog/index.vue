<template>

<div class="blog">
        <div style="text-align: right;" v-if="$auth.loggedIn">
            <nuxt-link to="/blog/new"> ... submit a new blog post </nuxt-link>
        </div>

        <blog-post v-for="post in $store.state.blogPosts" :key="post._id" :post="post" @delete-post="deletePost" /> 
</div>

</template>

<script>
    import BlogPost from '@/components/blog/Post.vue';

    export default {
        components: {
            BlogPost
        },
        scrollToTop: true,
        methods: { 
            async deletePost( id ) {
                this.$store.dispatch('deleteBlogPost', id);
            },
            async getPosts() {
                this.$store.dispatch('getPosts');
            }
        },
        async asyncData ( { store } ) {
            try {
                await store.dispatch('getBlogPosts');
            } catch (error) {
                console.log(error);
            }
            
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