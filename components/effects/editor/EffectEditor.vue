<template>
  <div class="effect-editor">
    <div>
      <label> Name </label>
      <input
        v-model="name"
        class="effectEditor__input"
      >
    </div>

    <div>
      <label> Table of Contents </label>
      <table-of-contents-input v-model="toc" />
    </div>

    <div>
      <label> Description </label>
      <vcode-editor
        v-model="description"
        :data="$data"
      />
    </div>

    <div class="effectEditor__showHide">
      <a @click="toggleDetails()"> {{ showDetails ? 'Hide' : 'Show' }} Details </a>
    </div>

    <div v-show="showDetails">
      <div>
        <label> Citations </label>
        <citation-input v-model="citations" />
      </div>

      <div>
        <label> Short Summary </label>
        <textarea
          v-model="summary"
          class="effectEditor__textarea effectEditor__summary"
        />
      </div>

      <div>
        <label> Long Summary </label>
        <vcode-editor
          v-model="long_summary"
        />
      </div>

      <div>
        <label>Analysis</label>
        <vcode-editor
          v-model="analysis"
        />
      </div>

      <div>
        <label>Style Variations</label>
        <vcode-editor
          v-model="style_variations"
        />
      </div>

      <div>
        <label>Personal Commentary</label>
        <vcode-editor
          v-model="personal_commentary"
        />
      </div>

      <div>
        <label> External Links </label>
        <link-input v-model="external_links" />
      </div>

      <div>
        <label> See Also </label>
        <see-also-input v-model="see_also" />
      </div>

      <div>
        <label> Tags </label>
        <tag-input v-model="tags" />
      </div>

      <div>
        <label> Contributors </label>
        <contributor-input v-model="contributors" />
      </div>

      <div>
        <label> Sub-articles </label>
        <subarticle-input v-model="subarticles" />
      </div>

      <div>
        <label> Social Media Image </label>
        {{ (social_media_image ? social_media_image : "") }}<input
          v-model="social_media_image"
          class="effectEditor__input"
        >
      </div>

      <div>
        <label> Gallery Order </label>
        <ol v-if="!gallery_order.length">
          <li
            v-for="(replication, index) in associated_replications"
            :key="replication._id"
          >
            <span> {{ replication.title }} </span> -
            [<a @click="moveReplicationUp(index)">Up</a> | <a @click="moveReplicationDown(index)">
              Down </a> | <a @click="removeReplication(index)"> Remove</a>]
          </li>
        </ol>
        <div v-else>
          <ol>
            <li
              v-for="(replication, index) in combined_order"
              :key="replication._id"
            >
              <span> {{ replication.title }} </span> -
              [<a @click="moveReplicationUp(index)">Up</a> | <a @click="moveReplicationDown(index)">
                Down </a> | <a @click="removeReplication(index)"> Remove</a>]
            </li>
          </ol>
          <br>
          <a @click="resetGalleryOrder"> Reset Order </a>
        </div>
      </div>

      <div>
        <label for="featured">
          Featured
          <input
            id="featured"
            v-model="featured"
            type="checkbox"
          >
        </label>
      </div>
    </div>

    <div class="effectEditor__buttons">
      <button
        style="background-color: #DFD;"
        @click="submitEffect(false)"
      >
        Save
      </button>
      <button
        v-show="effect"
        style="background-color: #DFD;"
        @click="submitEffect(true)"
      >
        Update
      </button>
      <nuxt-link
        :to="'/effects/' + url"
      >
        <button> Cancel </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CitationInput from "@/components/editors/CitationInput";
import LinkInput from "@/components/effects/editor/LinkInput";
import SeeAlsoInput from "@/components/effects/editor/SeeAlsoInput";
import TagInput from "@/components/effects/editor/TagInput";
import ContributorInput from "@/components/effects/editor/ContributorInput";
import SubarticleInput from "@/components/effects/editor/SubarticleInput";
import TableOfContentsInput from "@/components/editors/TableOfContentsInput";
import VcodeEditor from "@/components/vcode/editor";

export default {
  components: {
    CitationInput,
    LinkInput,
    SeeAlsoInput,
    TagInput,
    ContributorInput,
    SubarticleInput,
    VcodeEditor,
    TableOfContentsInput
  },
  props: {
    effect: {
      type: Object,
      default: undefined
    }
  },
  data () {
    const { _id, name, description, citations, url, external_links, 
    see_also, tags, contributors, summary, long_summary, analysis, style_variations,
    personal_commentary, gallery_order, social_media_image, subarticles, featured, toc } = this.effect ? this.effect : {};
    return {
      showDetails: false,
      id: _id,
      name: name ? name : "",
      description: description ? description.raw : "",
      citations: citations ? citations : [],
      url: url ? url : "",
      external_links: external_links ? external_links : [],
      see_also: see_also ? see_also : [],
      tags: tags ? tags : [],
      contributors: contributors ? contributors : [],
      summary: summary ? summary.raw : "",
      long_summary: long_summary ? long_summary.raw : "",
      analysis: analysis ? analysis.raw : "",
      style_variations: style_variations ? style_variations.raw : "",
      personal_commentary: personal_commentary ? personal_commentary.raw : "",
      gallery_order: gallery_order ? gallery_order : [],
      social_media_image: social_media_image ? social_media_image : "",
      subarticles: subarticles ? subarticles : [],
      featured: featured ? featured : false,
      toc: toc ? toc : []
    };
  },
  computed: {
    combined_order() {
      let combined = this.gallery_order || [];

      this.associated_replications.forEach(replication => {
        let foundInOrder = this.gallery_order.find(
          order_item => order_item._id === replication._id
        );
        if (!foundInOrder)
          combined.push({ _id: replication._id, title: replication.title, url: replication.url });
      });

      return combined;
    },
    associated_replications() {
      let replications = this.$store.state.gallery.replications;
      return replications.filter(
        replication => replication.associated_effects.indexOf(this.id) >= 0
      );
    }
  },
  mounted() {
    this.$store.dispatch("gallery/get");
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    submitEffect(update) {
      this.$emit(this.effect ? (update ? "update-effect" : "edit-effect") : "new-effect", {
        id: this.id,
        name: this.name,
        description: this.description,
        citations: this.citations,
        related_substances: this.related_substances,
        external_links: this.external_links,
        see_also: this.see_also,
        tags: this.tags,
        summary: this.summary,
        long_summary: this.long_summary,
        analysis: this.analysis,
        style_variations: this.style_variations,
        personal_commentary: this.personal_commentary,
        contributors: this.contributors,
        gallery_order: this.gallery_order,
        social_media_image: this.social_media_image,
        subarticles: this.subarticles,
        featured: this.featured,
        toc: this.toc
      });
    },
    makeGalleryOrder() {
      this.associated_replications.forEach(replication => {
        this.gallery_order.push({
          _id: replication._id,
          title: replication.title,
          url: replication.url
        });
      });
    },
    resetGalleryOrder() {
      this.gallery_order = [];
    },
    moveReplicationDown(index) {
      if (!this.gallery_order.length) this.makeGalleryOrder();
      if (index < this.gallery_order.length - 1) {
        let swap = this.gallery_order[index];
        this.gallery_order.splice(index, 1, this.gallery_order[index + 1]);
        this.gallery_order.splice(index + 1, 1, swap);
      }
    },
    moveReplicationUp(index) {
      if (!this.gallery_order.length) this.makeGalleryOrder();
      if (index > 0) {
        let swap = this.gallery_order[index];
        this.gallery_order.splice(index, 1, this.gallery_order[index - 1]);
        this.gallery_order.splice(index - 1, 1, swap);
      }
    },
    removeReplication(index) {
      if (!this.gallery_order.length) this.makeGalleryOrder();
      this.gallery_order.splice(index, 1);
    }
  },
  middleware: ["auth"],
};
</script>

<style>
.effect-editor label {
  display: block;
  margin: 1em 0;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.effectEditor__textarea {
  width: 100%;
  padding: 1em;
}

.effectEditor__textarea.effectEditor__description {
  min-height: 500px;
}

.effectEditor__textarea.effectEditor__analysis {
  min-height: 300px;
}

.effectEditor__textarea.effectEditor__style_variations {
  min-height: 300px;
}

.effectEditor__textarea.effectEditor__personal_commentary {
  min-height: 300px;
}

.effectEditor__longSummary {
  min-height: 200px;
}

.effectEditor__input,
.effectEditor__textarea {
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  border: 1px solid #cccccc;
  padding: 0.5em 1em;
  font-size: 16px;
  width: 100%;
}

.effectEditor__showHide {
  font-size: 14px;
  text-align: right;
  user-select: none;
}

.effect-editor a {
  cursor: pointer;
}

.effect-editor button {
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100px;
  padding: 1em;
  margin-top: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.effectEditor__buttons button {
  margin-right: 1em;
}

button:hover {
  opacity: 1;
}
</style>
