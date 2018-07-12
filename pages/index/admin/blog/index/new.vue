<template>
    <div class="pageContent">
        <hr />
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
            this.$store.dispatch('submitBlogPost', post).then(this.$router.push('/blog/'));
        }
    },
    middleware: ['auth']
}

</script>