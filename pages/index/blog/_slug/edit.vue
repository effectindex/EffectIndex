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
        let post = await app.$axios.$get('/api/blog/' + params.slug);
        return post;
    },
    methods: {
        async submitPost(p) {
            console.log(p);
            let {post: submittedPost} = await this.$axios.$post('/api/blog/' + p.slug, p);
            if (submittedPost) {
                this.$router.push('/blog');
            }
        }
    },
    middleware: ['auth']
}

</script>