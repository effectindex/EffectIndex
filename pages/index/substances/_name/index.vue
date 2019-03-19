<template>
  <div class="pageContent">
    <article v-show="substance.name">
      <div v-if="$auth.loggedIn">
        <nuxt-link
          :to="'/admin/substances/' + substance.url"
          append>
          <fa
            :icon="['far', 'edit']"
            class="fa" />
        </nuxt-link>
      </div>
      <fa
        :icon="['far', icon]"
        class="fa categoryIcon" />
      <div v-if="hasSection('description_raw')">
        <h1>Subjective effects of {{ substance.name }}</h1>
        <formatted-document :document="substance.description_formatted" />
      </div>

      <div
        v-if="hasSection('replications')"
        class="substance__gallery">
        <hr>
        <h3> Gallery </h3>
        <light-box
          :image-set="substance.replications"
          :order="substance.gallery_order"
          base="/img/gallery/" />
      </div>

      <div
        v-if="hasSection('audio_replications')">
        <hr>
        <h3 style="margin-bottom: 2em;"> Audio Replications </h3>
        <audio-player
          v-for="(replication, index) in substance.audio_replications"
          :key="index"
          :src="`/audio/${replication.resource}`"
          :title="replication.title"
          :artist="replication.artist" />
      </div>

      <div v-if="hasSection('duration_raw')">
        <hr>
        <h3>Duration</h3>
        <formatted-document :document="substance.duration_formatted" />
      </div>

      <div v-if="hasSection('intensity_scale_raw')">
        <hr>
        <h3>Intensity Scale</h3>
        <formatted-document :document="substance.intensity_scale_formatted" />
      </div>

      <div v-if="hasSection('experience_reports_raw')">
        <hr>
        <h3>Experience Reports</h3>
        <formatted-document :document="substance.experience_reports_formatted" />
      </div>

      <div v-if="hasSection('personal_commentary_raw')">
        <hr>
        <h3>Personal Commentary</h3>
        <formatted-document :document="substance.personal_commentary_formatted" />
      </div>

      <div v-if="hasSection('see_also') || hasSection('external_links')">
        <hr>
        <div v-if="hasSection('see_also')">
          <h3> See Also </h3>
          <ul>
            <li
              v-for="(link, index) in substance.see_also"
              :key="index">
              <nuxt-link
                :to="link.location"> {{ link.title }} </nuxt-link>
            </li>
          </ul>
        </div>

        <div v-if="hasSection('external_links')">
          <h3> External Links </h3>
          <ul>
            <li
              v-for="(link, index) in substance.external_links"
              :key="index">
              <ext-link :href="link.url"> {{ link.title }} </ext-link>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="hasSection('citations')">
        <hr>
        <h3> References </h3>
        <citation-list :citations="substance.citations" />
      </div>

      <div v-if="hasSection('tags')">
        <hr>
        <h3> Tags </h3>
        <tag
          v-for="tag in substance.tags"
          :key="tag"
          :value="tag" />
      </div>

      <div v-if="hasSection('contributors')">
        <hr>
        <h3> Contributors </h3>
        <p> The following people contributed to the content of this article: </p>
        <span
          v-for="contributor in substance.contributors"
          :key="contributor"
          class="contributor">
          <nuxt-link :to="'/profiles/' + contributor">{{ contributor }}</nuxt-link>
        </span>
      </div>
    </article>
    <div v-if="!substance.name">
      <h1> Substance Not Found </h1>
    </div>
  </div>
</template>

<script>
import FormattedDocument from "@/components/substances/FormattedDocument";
import CitationList from "@/components/substances/CitationList";
import LightBox from "@/components/gallery/LightBox";
import ExtLink from "@/components/ExtLink";
import Tag from "@/components/substances/Tag";
import AudioPlayer from "@/components/replications/audio/AudioPlayer";

export default {
  name: 'Substance',
  components: {
    FormattedDocument,
    CitationList,
    LightBox,
    ExtLink,
    Tag,
    AudioPlayer
  },
  computed: {
    icon() {
      let tags = this.substance["tags"];

      let icons = {
        cognitive: "user",
        visual: "eye",
        auditory: "volume-up",
        tactile: "hand-paper",
        disconnective: "chain",
        multisensory: "cogs",
        uncomfortable: "frown",
        physical: "heart-rate",
        gustatory: "utensils",
        olfactory: "utensils",
      };

      if (Array.isArray(tags)) {
        for (let tag in icons) {
          if (tags.indexOf(tag) > -1) return icons[tag];
        }
      }

      return "user";
    }
  },
  scrollToTop: true,
  mounted() {
    let s = this.$route.query.s;
    if (s) {
      this.$scrollTo('#' + s);
    }
  },
  methods: {
    hasSection(name) {
      if (name in this.substance) {
        if (Array.isArray(this.substance[name])) {
          if (this.substance[name].length > 0) return true;
        } else if (typeof this.substance[name] === "string") {
          if (this.substance[name].length > 0) return true;
        }
      }
      return false;
    }
  },
  head() {
    return {
      title: `Subjective effects of ${this.substance.name}`,
      meta: [
        { name: 'description', hid: 'description', content: this.substance.summary_raw },
        { name: 'og:title', hid: 'og:title', content: `Effect Index - Subjective Effects of ${this.substance.name}` },
        { name: 'og:description', hid: 'og:description', content: this.substance.summary_raw },
        { name: 'og:image', hid: 'og:image', content: this.substance.social_media_image },
        { name: 'twitter:title', hid: 'twitter:title', content: `Effect Index - Subjective Effects of ${this.substance.name}` },
        { name: 'twitter:description', hid: 'twitter:description', content: this.substance.summary_raw },
        { name: 'twitter:image', hid: 'twitter:image', content: this.substance.social_media_image },
      ]
    };
  },
  async asyncData({ store, params, error }) {
    let { substance } = await store.dispatch("getSubstance", params.name);
    if (!substance) error({ statusCode: 404, message: "Substance not found." });
    return { substance };
  }
};
</script>

<style>
.tagList {
  list-style: none;
}

hr {
  clear: both;
}

.contributor::after {
  content: ", ";
}

.contributor:last-of-type::after {
  content: "";
}
</style>
