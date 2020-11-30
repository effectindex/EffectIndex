<template>
  <div class="articleEditor">
    <input 
      v-model="article.title"
      type="text"
      placeholder="Title"
      class="articleEditor__titleInput"
    >

    <h2> Body </h2>
    <vcode-editor 
      v-model="article.body.raw"
    />
    <div class="articleEditor__showMore">
      <span v-if="!more"> <a @click="toggleMore"> Show more </a> </span>
      <span v-else> <a @click="toggleMore"> Show less </a> </span>
    </div>
    <div
      v-show="more" 
      class="articleEditor__more"
    >
      <h2> Publication Status </h2>
      <publication-status
        :publication-status="article.publication_status"
        @input="article.publication_status = $event"
      />
      <h2> Short Description </h2>
      <textarea 
        v-model="article.short_description"
        class="articleEditor__shortDescriptionTextarea"
      />
      <h2> Social Media Image </h2>
      <input 
        v-model="article.social_media_image"
        type="text"
        class="articleEditor__socialMediaImageInput"
      >
      <h2> Tags </h2>
      <tag-input
        v-model="article.tags"
      />
    </div>
    <button @click="submitArticle">
      {{ isNew ? 'Save' : 'Update' }}
    </button> 
  </div>
</template>

<script>
import TypeSelector from './TypeSelector';
import VcodeEditor from '@/components/vcode/editor';
import PublicationStatus from './PublicationStatus.vue';
import TagInput from '@/components/editors/TagInput';

export default {
  components: {
    VcodeEditor,
    PublicationStatus,
    TagInput
  },
  props: {
    article: {
      type: Object,
      default: () => ({
        title: undefined,
        body: {
          raw: '\n\n\n\n'
        },
        publication_status: 'draft',
        short_description: undefined,
        social_media_image: undefined,
        tags: undefined
      })
    }
  },
  data () {
    return {
      more: false
    };
  },
  computed: {
    isNew() {
      return !this.article._id;
    }
  },
  methods: {
    async submitArticle () {
      try {
        if (this.isNew) {
          const response = await this.$axios.post('/api/articles', { article: this.article });
          const { article } = response.data;
          this.$router.push(`/articles/${article.slug}`);
        } else {
          const { _id } = this.article;
          this.$axios.post(`/api/articles/${_id}`, { article: this.article });
          this.$router.push(`/articles/${this.article.slug}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleMore () {
      this.more = !this.more;
    }
  }
};
</script>

<style scoped>

h2 {
  display: block;
  font-weight: normal;
  font-size: 20px;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0.25em 0;
  margin-top: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
}

.articleEditor__titleInput {
  font-size: 25px;
}

.articleEditor__socialMediaImageInput {
  font-size: 16px;
}

.articleEditor__showMore {
  text-align: right;
  padding-top: 10px;
}

.articleEditor__showMore a {
  cursor: pointer;
}

select {
  width: 250px;
  height: 30px;
  border: 1px solid #CCC;
}

textarea {
  width: 100%;
  min-height: 150px;
  border: 1px solid #CCC;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #F0F0F0;
  border: 1px solid #CCC;
  margin: 20px 0;
  width: 150px;
  cursor: pointer;
  transition: all 0.25s ease;
}

button:hover {
  background-color: #CCC;
}




</style>