<template>
    <div>
            <h1> Submit a Post </h1>
            <post-editor @new-post="this.submitPost" />
    </div>
</template>

<script>
import PostEditor from '@/components/blog/PostEditor.vue'

export default {
    components: {
        PostEditor
    },
    methods: {
        async submitPost(post) {
            let {post: submittedPost} = await this.$axios.$post('/api/blog', post);
            if (submittedPost) {
                this.$router.push('/blog');
            }
        }
    },
    middleware: ['auth']
}

</script>