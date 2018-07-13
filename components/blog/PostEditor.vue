<template>
  <div class="postEditor">
    <div>
      <label> Title 
        <input
          v-model="title"
          class="postEditor__inputTitle">
      </label>
    </div>
    <div>
      <textarea
        v-model="body" 
        class="postEditor__inputBody" />
    </div>
    <div class="postEditor__inputPostButtonContainer">
      <nuxt-link
        class="postEditor__cancelLink"
        to="/admin/blog/list"> Cancel </nuxt-link>
      <button 
        class="postEditor__inputPostButton"
        @click="submitPost()"> {{ post ? 'Update' : 'Post' }} </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
      default: () => null
    }
  },
  data() {
    return {
      body: this.post ? this.post.body : "",
      title: this.post ? this.post.title : ""
    };
  },
  methods: {
    submitPost() {
      this.$emit(this.post ? "edit-post" : "new-post", {
        title: this.title,
        body: this.body,
        slug: this.post ? this.post.slug : null
      });
    }
  },
  middleware: ["auth"]
};
</script>

<style>
.postEditor__inputTitle {
  width: 100%;
  height: 50px;
  font-size: 25px;
  padding: 10px;
}

.postEditor__inputBody {
  width: 100%;
  margin-top: 2em;
  min-height: 500px;
  font-size: 18px;
  font-family: "titillium web";
  padding: 10px;
}

.postEditor__inputBody,
.postEditor__inputTitle {
  border: 1px solid #aaaaaa;
}

.postEditor__inputPostButtonContainer {
  text-align: right;
}

.postEditor__inputPostButton {
  background-color: transparent;
  border: 1px solid #ccc;
  font-size: 18px;
  width: 100px;
  padding: 1em;
  margin-top: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.postEditor__inputPostButton:hover {
  opacity: 1;
}

.postEditor__cancelLink {
  padding-right: 2em;
}
</style>