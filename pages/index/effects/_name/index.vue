<template>
  <div class="pageContent">
    <article v-show="effect.name">
      <div v-if="$auth.loggedIn">
        <nuxt-link
          :to="'/admin/effects/' + effect.url"
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
        <h1> {{ effect.name }} </h1>
        <formatted-document :document="effect.description_formatted" />
      </div>

      <div
        v-if="hasSection('replications')"
        class="effect__gallery">
        <hr>
        <h3> Gallery </h3>
        <light-box
          :image-set="effect.replications"
          :order="effect.gallery_order"
          base="/img/gallery/" />
      </div>

      <div v-if="hasSection('analysis_raw')">
        <hr>
        <h3> Analysis </h3>
        <formatted-document :document="effect.analysis_formatted" />
      </div>

      <div v-if="hasSection('see_also') || hasSection('external_links')">
        <hr>
        <div v-if="hasSection('see_also')">
          <h3> See Also </h3>
          <ul>
            <li
              v-for="(link, index) in effect.see_also"
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
              v-for="(link, index) in effect.external_links"
              :key="index">
              <ext-link :href="link.url"> {{ link.title }} </ext-link>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="hasSection('citations')">
        <hr>
        <h3> References </h3>
        <citation-list :citations="effect.citations" />
      </div>

      <div v-if="hasSection('tags')">
        <hr>
        <h3> Tags </h3>
        <tag
          v-for="tag in effect.tags"
          :key="tag"
          :value="tag" />
      </div>

      <div v-if="hasSection('contributors')">
        <hr>
        <h3> Contributors </h3>
        <p> The following people contributed to the content of this article: </p>
        <span
          v-for="contributor in effect.contributors"
          :key="contributor"
          class="contributor">
          <nuxt-link :to="'/profiles/' + contributor">{{ contributor }}</nuxt-link>
        </span>
      </div>
    </article>
    <div v-if="!effect.name">
      <h1> Effect Not Found </h1>
    </div>
  </div>
</template>

<script>
import FormattedDocument from "@/components/effects/FormattedDocument";
import CitationList from "@/components/effects/CitationList";
import LightBox from "@/components/gallery/LightBox";
import ExtLink from "@/components/ExtLink";
import Tag from "@/components/effects/Tag";

export default {
  components: {
    FormattedDocument,
    CitationList,
    LightBox,
    ExtLink,
    Tag
  },
  computed: {
    icon() {
      let tags = this.effect["tags"];

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
      if (name in this.effect) {
        if (Array.isArray(this.effect[name])) {
          if (this.effect[name].length > 0) return true;
        } else if (typeof this.effect[name] === "string") {
          if (this.effect[name].length > 0) return true;
        }
      }
      return false;
    }
  },
  head() {
    return {
      title: this.effect.name,
      meta: [
        { name: 'description', hid: 'description', content: this.effect.summary_raw },
        { name: 'og:title', hid: 'og:title', content: `Effect Index - ${this.effect.name}` },
        { name: 'og:description', hid: 'og:description', content: this.effect.summary_raw },
        { name: 'og:image', hid: 'og:image', content: this.effect.social_media_image },
        { name: 'twitter:title', hid: 'twitter:title', content: `Effect Index - ${this.effect.name}` },
        { name: 'twitter:description', hid: 'twitter:description', content: this.effect.summary_raw },
        { name: 'twitter:image', hid: 'twitter:image', content: this.effect.social_media_image },
      ]
    };
  },
  async asyncData({ store, params, error }) {
    let { effect } = await store.dispatch("getEffect", params.name);
    if (!effect) error({ statusCode: 404, message: "Effect not found." });
    return { effect };
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