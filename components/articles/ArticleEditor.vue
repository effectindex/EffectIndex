<template>
  <div class="articleEditor">
    <input
      v-model="article.title"
      type="text"
      placeholder="Title"
      class="articleEditor__titleInput"
    >

    <input
      v-model="article.subtitle"
      type="text"
      placeholder="Subtitle"
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
      <h2> Authors </h2>
      <author-input
        v-model="article.authors"
        :people="people"
      />

      <h2> Publication Status </h2>
      <publication-status
        :publication-status="article.publication_status"
        @input="article.publication_status = $event"
      />

      <h2> Publication Date </h2>
      <publication-date
        :publication-date="article.publication_date"
        @input="article.publication_date = $event"
      />

      <h2> Citations </h2>
      <citation-input
        v-model="article.citations"
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

      <div>
        <div class="pinOptions">
          <label for="featured"> Featured? </label>
          <input
            v-model="article.featured"
            type="checkbox"
            name="featured"
          >
        </div>
        <div class="pinOptions pinnedRight">
          <label for="frontpage"> Frontpage? </label>
          <input
            v-model="article.frontpage"
            type="checkbox"
            name="frontpage"
          >
        </div>
      </div>
    </div>
    <button @click="submitArticle">
      {{ isNew ? 'Save' : 'Update' }}
    </button>
  </div>
</template>

<script>
import VcodeEditor from '@/components/vcode/editor';
import PublicationStatus from './PublicationStatus';
import TagInput from '@/components/editors/TagInput';
import AuthorInput from '@/components/editors/PeopleInput';
import PublicationDate from './PublicationDate';
import CitationInput from '@/components/editors/CitationInput';

export default {
  components: {
    VcodeEditor,
    PublicationStatus,
    PublicationDate,
    TagInput,
    AuthorInput,
    CitationInput
  },
  props: {
    article: {
      type: Object,
      default: () => ({
        title: undefined,
        subtitle: undefined,
        authors: [],
        citations: [],
        body: {
          raw: '\n\n\n\n'
        },
        publication_status: 'unlisted',
        publication_date: undefined,
        short_description: undefined,
        social_media_image: undefined,
        tags: undefined,
        featured: undefined
      })
    },
    people: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
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
    async submitArticle() {
      try {
        if (this.isNew) {
          const submission = {...this.article};
          delete submission.body.parsed;
          const {article} = await this.$axios.$post('/api/articles', {article: submission});
          this.$router.push(`/articles/${article.slug}`);
        } else {
          const {_id} = this.article;
          const submission = {...this.article};
          delete submission.body.parsed;
          const {article} = await this.$axios.$post(`/api/articles/${_id}`, {article: submission});

          this.$router.push(`/articles/${article.slug}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleMore() {
      this.more = !this.more;
    }
  }
};
</script>

<style>

.articleEditor h2 {
  display: block;
  font-weight: normal;
  font-size: 20px;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 1em 0 0.25em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.articleEditor input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
}

.articleEditor input[type="date"] {
  border: 1px solid #CCC;
  font-family: unset;
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

.articleEditor select {
  width: 250px;
  height: 30px;
  border: 1px solid #CCC;
}

.articleEditor textarea {
  width: 100%;
  min-height: 150px;
  border: 1px solid #CCC;
}

.articleEditor button {
  padding: 10px;
  font-size: 16px;
  background-color: #F0F0F0;
  border: 1px solid #CCC;
  margin: 20px 0;
  width: 150px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.articleEditor button:hover {
  background-color: #CCC;
}

.pinOptions {
  display: inline-block;
}

.pinnedRight {
  margin-left: 20px;
}
</style>
