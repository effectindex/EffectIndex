<template>
  <div class="pageContent">
    <article>
      <Icon
        :filename="icon"
        class="categoryIcon"
      />
      <h1>
        {{ effect.name }}
        <client-only>
          <nuxt-link
            v-if="$auth.hasScope('edit-effects') || $auth.hasScope('admin-effects')"
            :to="'/admin/effects/' + effect.url"
            append
          >
            <Icon
              filename="edit.svg"
              style="display: inline-block; margin-left: 10px; height: 20px; width: 20px;"
              color="#27635d"
            />
          </nuxt-link>
        </client-only>
      </h1>
      <vcode
        v-if="hasSection('description')"
        :data="effect"
        :body="effect.description"
      />

      <client-only>
        <div
          v-if="hasSection('replications')"
          class="effect__gallery"
        >
          <hr>
          <h3 id="replication-gallery">
            Replication Gallery
          </h3>
          <light-box
            :image-set="effect.replications"
            :order="effect.gallery_order"
            base="/img/gallery/"
          />
        </div>

        <div
          v-if="hasSection('audio_replications')"
        >
          <hr>
          <h3
            id="audio-replications"
            style="margin-bottom: 2em;"
          >
            Audio Replications
          </h3>
          <audio-player
            v-for="(replication, index) in effect.audio_replications"
            :key="index"
            :src="`/audio/${replication.resource}`"
            :title="replication.title"
            :artist="replication.artist"
          />
        </div>
      </client-only>

      <div v-if="hasSection('analysis')">
        <hr>
        <h3 id="analysis">
          Analysis
        </h3>
        <vcode
          :body="effect.analysis"
        />
      </div>

      <div
        v-if="hasSection('style_variations')"
      >
        <hr>
        <h3 id="style-variations">
          Style Variations
        </h3>
        <vcode
          :body="effect.style_variations"
        />
      </div>

      <div v-if="hasSection('personal_commentary')">
        <hr>
        <h3 id="personal-commentary">
          Personal Commentary
        </h3>
        <vcode
          :body="effect.personal_commentary"
        />
      </div>

      <div v-if="hasSection('related_reports')">
        <hr>
        <h3 id="related-reports">
          Related Reports
        </h3>
        <related-reports
          :reports="effect.related_reports"
        />
      </div>

      <div v-if="hasSection('external_links')">
        <hr>
        <div v-if="hasSection('see_also')">
          <h3 id="see-also">
            See Also
          </h3>
          <ul>
            <li
              v-for="(link, index) in effect.see_also"
              :key="index"
            >
              <nuxt-link
                :to="link.location"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div v-if="hasSection('external_links')">
          <h3 id="external-links">
            External Links
          </h3>
          <ul>
            <li
              v-for="(link, index) in effect.external_links"
              :key="index"
            >
              <ext-link :href="link.url">
                {{ link.title }}
              </ext-link>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="hasSection('citations')">
        <hr>
        <h3 id="references">
          References
        </h3>
        <citation-list :citations="effect.citations" />
      </div>

      <div v-if="hasSection('tags')">
        <hr>
        <h3> Tags </h3>
        <tag
          v-for="tag in effect.tags"
          :key="tag"
          :value="tag"
        />
      </div>

      <div v-if="hasSection('contributors')">
        <hr>
        <h3 id="contributors">
          Contributors
        </h3>
        <p> The following people contributed to the content of this article: </p>
        <span
          v-for="contributor in effect.contributors"
          :key="contributor"
          class="contributor"
        >
          <nuxt-link :to="'/profiles/' + contributor">{{ contributor }}</nuxt-link>
        </span>
      </div>
    </article>
  </div>
</template>

<script>
import CitationList from "@/components/CitationList";
import LightBox from "@/components/gallery/LightBox";
import ExtLink from "@/components/ExtLink";
import Tag from "@/components/effects/Tag";
import AudioPlayer from "@/components/replications/audio/AudioPlayer";
import Icon from '@/components/Icon';
import RelatedReports from '@/components/effects/RelatedReports';


export default {
  name: 'Effect',
  components: {
    CitationList,
    LightBox,
    ExtLink,
    Tag,
    AudioPlayer,
    Icon,
    RelatedReports
  },
  scrollToTop: true,
  async asyncData({ params, $axios, error }) {
    try {
      const { name } = params;
      const { effect } = await $axios.$get(`/api/effects/${name}`);
      if (effect) {
        return { effect };
      } else {
        error({ statusCode: 404, message: 'Effect not found' });
      }
    } catch (error) {
      console.log(error);
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
          if (tags.indexOf(tag) > -1) return icons[tag] + '.svg';
        }
      }

      return "user.svg";
    },
  },
  mounted() {
    let s = this.$route.query.s;
    if (s) {
      setTimeout(() => this.$scrollTo('#' + s), 750);
    }
  },
  methods: {
    hasSection(name) {
      if (name in this.effect) {
        if (Array.isArray(this.effect[name])) {
          if (this.effect[name].length > 0) return true;
        } else if (typeof this.effect[name] === 'string') {
          if (this.effect[name].length > 0) return true;
        } else if (this.effect[name] && typeof this.effect[name] === 'object') {
          if (this.effect[name].raw && this.effect[name].raw.length > 0) return true;
        }
      }
      return false;
    }
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
