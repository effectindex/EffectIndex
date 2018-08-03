<template>
  <div class="pageContent">
    <div v-show="effect.name">
      <div v-if="$auth.loggedIn">
        <nuxt-link
          :to="'/admin/effects/' + effect.url"
          append> <i class="fa fa-edit" /> </nuxt-link>
      </div>
      <i :class="'fa ' + icon + ' fa-2x categoryIcon'" />
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
              v-for="link in effect.see_also"
              :key="link.url">
              <ext-link :href="link.url"> {{ link.title }} </ext-link>
            </li>
          </ul>
        </div>

        <div v-if="hasSection('external_links')">
          <h3> External Links </h3>
          <ul>
            <li
              v-for="link in effect.external_links"
              :key="link.url">
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
    </div>
    <div v-if="!effect.name">
      <h1> Effect Not Found </h1>
    </div>
  </div>
</template>

<script>
import formattedDocument from "@/components/effects/formattedDocument";
import CitationList from "@/components/effects/CitationList";
import LightBox from "@/components/LightBox/LightBox";
import ExtLink from "@/components/ExtLink";
import Tag from "@/components/effects/Tag";

export default {
  components: {
    formattedDocument,
    CitationList,
    LightBox,
    ExtLink,
    Tag
  },
  computed: {
    icon() {
      let tags = this.effect["tags"];

      let icons = {
        cognitive: "fa-user",
        visual: "fa-eye",
        auditory: "fa-volume",
        tactile: "fa-fa-hand-paper-o",
        disconnective: "fa-chain-broken",
        multisensory: "fa-cogs",
        physical: "fa-child",
        gustatory: "fa-cutlery",
        olfactory: "fa-cutlery",
        uncomfortable: "fa-frown-o"
      };

      if (Array.isArray(tags)) {
        for (let tag in icons) {
          if (tags.indexOf(tag) > -1) return icons[tag];
        }
      }

      return "fa-question";
    }
  },
  scrollToTop: true,
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
        { name: 'og:image', hid: 'og:image', content: this.$axios.defaults.baseURL + this.effect.social_media_image },
        { name: 'twitter:title', hid: 'twitter:title', content: `Effect Index - ${this.effect.name}` },
        { name: 'twitter:description', hid: 'twitter:description', content: this.effect.summary_raw },
        { name: 'twitter:image', hid: 'twitter:image', content: this.$axios.defaults.baseURL + this.social_media_image },
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
.formattedDocument ul,
.formattedDocument ol {
  margin: 0;
  display: inline-block;
  white-space: normal;
}

.formattedDocument p {
  margin: 0;
  padding: 0;
  white-space: normal;
}

.formattedDocument ul li,
.formattedDocument ol li {
  color: black;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
}

.formattedDocument ul li:last-of-type,
.formattedDocument ol li:last-of-type {
  margin-bottom: 0;
}

.formattedDocument p {
  color: black;
}

.tagList {
  list-style: none;
}

hr {
  clear: both;
}

.formattedDocument .bullet {
  padding-left: 3em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.formattedDocument .bullet::before {
  content: "●";
  padding-right: 1em;
}

.contributor::after {
  content: ", ";
}

.contributor:last-of-type::after {
  content: "";
}
</style>