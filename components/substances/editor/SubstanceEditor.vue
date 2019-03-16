<template>
  <div>
    <div>
      <label> Name </label>
      <input
        v-model="name"
        class="substanceEditor__input">
    </div>

    <div>
      <label> Description </label>
      <textarea
        v-model="description"
        class="substanceEditor__textarea substanceEditor__description" />
    </div>

    <div class="substanceEditor__showHide">
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
          class="substanceEditor__textarea substanceEditor__summary" />
      </div>

      <div>
        <label> Long Summary </label>
        <textarea
          v-model="long_summary"
          class="substanceEditor__textarea substanceEditor__longSummary" />
      </div>

      <div>
        <label>Analysis</label>
        <textarea
          v-model="analysis"
          class="substanceEditor__textarea substanceEditor__analysis" />
      </div>

      <div>
        <label>Style Variations</label>
        <textarea
          v-model="style_variations"
          class="substanceEditor__textarea substanceEditor__style_variations" />
      </div>

      <div>
        <label>Personal Commentary</label>
        <textarea
          v-model="personal_commentary"
          class="substanceEditor__textarea substanceEditor__personal_commentary" />
      </div>

      <div>
        <label> Related Substances </label>
        <substance-input v-model="related_substances" />
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
          class="substanceEditor__input">
      </div>

      <div>
        <label> Gallery Order </label>
        <ol v-if="!gallery_order.length">
          <li
            v-for="(replication, index) in associated_replications"
            :key="replication._id">
            <span
            > {{ replication.title }} </span> -
            [<a @click="moveReplicationUp(index)">Up</a> | <a @click="moveReplicationDown(index)">
            Down </a> | <a @click="removeReplication(index)"> Remove</a>]
          </li>
        </ol>
        <div v-else>
          <ol>
            <li
              v-for="(replication, index) in combined_order"
              :key="replication._id">
              <span
              > {{ replication.title }} </span> -
              [<a @click="moveReplicationUp(index)">Up</a> | <a @click="moveReplicationDown(index)">
              Down </a> | <a @click="removeReplication(index)"> Remove</a>]
            </li>
          </ol>
          <br >
          <a @click="resetGalleryOrder"> Reset Order </a>
        </div>
      </div>

      <div>
        <label for="featured">
          Featured
          <input
            id="featured"
            v-model="featured"
            type="checkbox">
        </label>
      </div>


    </div>

    <div class="substanceEditor__buttons">
      <button
        style="background-color: #DFD;"
        @click="submitSubstance(false)"> Save </button>
      <button
        v-show="substance"
        style="background-color: #DFD;"
        @click="submitSubstance(true)"> Update </button>
      <nuxt-link
        :to="'/substances/' + url"
        tag="button"> Cancel </nuxt-link>
    </div>

  </div>
</template>

<script>
import CitationInput from "@/components/substances/editor/CitationInput";
import SubstanceInput from "@/components/substances/editor/SubstanceInput";
import LinkInput from "@/components/substances/editor/LinkInput";
import SeeAlsoInput from "@/components/substances/editor/SeeAlsoInput";
import TagInput from "@/components/substances/editor/TagInput";
import ContributorInput from "@/components/substances/editor/ContributorInput";
import SubarticleInput from "@/components/substances/editor/SubarticleInput";

export default {
  components: {
    CitationInput,
    SubstanceInput,
    LinkInput,
    SeeAlsoInput,
    TagInput,
    ContributorInput,
    SubarticleInput
  },
  props: {
    substance: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      showDetails: false,
      id: this.substance ? this.substance._id : undefined,
      name: this.substance ? this.substance.name : "",
      description: this.substance ? this.substance.description_raw : "",
      citations: this.substance ? this.substance.citations : [],
      url: this.substance ? this.substance.url : "",
      related_substances: this.substance ? this.substance.related_substances : [],
      external_links: this.substance ? this.substance.external_links : [],
      see_also: this.substance ? this.substance.see_also : [],
      tags: this.substance ? this.substance.tags : [],
      contributors: this.substance ? this.substance.contributors : [],
      summary: this.substance ? this.substance.summary_raw : "",
      long_summary: this.substance ? this.substance.long_summary_raw : "",
      analysis: this.substance ? this.substance.analysis_raw : "",
      style_variations: this.substance ? this.substance.style_variations_raw : "",
      personal_commentary: this.substance ? this.substance.personal_commentary_raw : "",
      gallery_order: this.substance ? this.substance.gallery_order : [],
      social_media_image: this.substance ? this.substance.social_media_image : "",
      subarticles: this.substance ? this.substance.subarticles : [],
      featured: this.substance ? this.substance.featured : false
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
        replication => replication.associated_substances.indexOf(this.id) >= 0
      );
    }
  },
  mounted() {
    this.$store.dispatch("getGallery");
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    submitSubstance(update) {
      this.$emit(this.substance ? (update ? "update-substance" : "edit-substance") : "new-substance", {
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
        featured: this.featured
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
label {
  display: block;
  margin: 1em 0;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.substanceEditor__textarea {
  width: 100%;
  padding: 1em;
}

.substanceEditor__textarea.substanceEditor__description {
  min-height: 500px;
}

.substanceEditor__textarea.substanceEditor__analysis {
  min-height: 300px;
}

.substanceEditor__textarea.substanceEditor__style_variations {
  min-height: 300px;
}

.substanceEditor__textarea.substanceEditor__personal_commentary {
  min-height: 300px;
}

.substanceEditor__longSummary {
  min-height: 200px;
}

.substanceEditor__input,
.substanceEditor__textarea {
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  border: 1px solid #cccccc;
  padding: 0.5em 1em;
  font-size: 16px;
  width: 100%;
}

.substanceEditor__showHide {
  font-size: 14px;
  text-align: right;
  user-select: none;
}

a {
  cursor: pointer;
}

button {
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100px;
  padding: 1em;
  margin-top: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.substanceEditor__buttons button {
  margin-right: 1em;
}

button:hover {
  opacity: 1;
}
</style>
