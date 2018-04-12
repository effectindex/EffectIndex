<template>
    <div>
        <h1> Edit a Post </h1>
        <post-editor @edit-post="this.submitPost" :post="post" />
    </div>
</template>

<script>
import PostEditor from '@/components/blog/PostEditor.vue'

export default {
    components: {
        PostEditor
    },
    async asyncData ({app, params}) {
        let post = await app.store.dispatch('getSingleBlogPost', params.slug);
        return { post };
    },
    methods: {
        async submitPost(post) {
            post._id = this.post._id;
            await this.$store.dispatch('updateBlogPost', post);
            this.$router.push('/blog');
        }
    },
    middleware: ['auth']
}

</script>