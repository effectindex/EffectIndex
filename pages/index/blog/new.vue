<template>
    <div class="blog">
            <h1> Submit a Post </h1>
            <div>
                <input class="blog__inputTitle" v-model="title" />
            </div>
            <div>
                <textarea class="blog__inputBody" v-model="body"> </textarea>
            </div>
            <div class="blog__inputPostButtonContainer">
                <button @click="submitPost()" class="blog__inputPostButton"> Post </button>
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            body: '',
            title: ''
        }
    },
    methods: {
        async submitPost() {
            let {post: submittedPost} = await this.$axios.$post('/api/blog', {
                title: this.title,
                body: this.body
            });
            if (submittedPost) {
                this.$router.push('/blog');
            }
        }
    },
    middleware: ['auth']
}

</script>

<style>
    .blog__inputTitle {
        width: 100%;
        height: 50px;
        font-size: 25px;
        padding: 10px;
    }

    .blog__inputBody {
        width: 100%;
        margin-top: 2em;
        min-height: 500px;
        font-size: 18px;
        font-family: 'titillium web';
        padding: 10px;
    }

    .blog__inputBody, .blog__inputTitle {
        border: 1px solid #AAAAAA;
    }
    
    .blog__inputPostButtonContainer {
        text-align: right;
    }

    .blog__inputPostButton {
        height: 50px;
        width: 140px;
        font-size: 20px;
        margin: 1em 0;
    }


</style>