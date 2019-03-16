<template>
  <div 
    class="effect__longSummary">
    <h4 
      v-show="showTitle"
      :id="effect.url"
      class="longSummary__title">
      {{ effect.name }}
    </h4>
    <div class="longSummary__mainArticle">
      Full article: 
      <nuxt-link
        :to="`/effects/${effect.url}`">
        {{ effect.name }}
      </nuxt-link>
    </div>
    <div>
      <formatted-document
        :document="long_summary" />
    </div>

  </div>
</template>

<script>
import CaptionedImage from "@/components/CaptionedImage";
import FormattedDocument from "@/components/effects/FormattedDocument";

export default {
  components: {
    CaptionedImage,
    FormattedDocument
  },
  props: {
    effect: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    long_summary() {
      return this.effect.long_summary_formatted ? this.effect.long_summary_formatted : undefined;
    },
    replications() {
      return this.$store.state.replications;
    },
    odd() {
      return (this.index % 2) ? true : false;
    },
    image() {
      let replications = this.replications.filter((replication) => 
      (replication.associated_effects.includes(this.effect._id) && (replication.type !== 'audio')));

      return replications[Math.floor(Math.random() * (replications.length - 1))];
    }
  }
};
</script>

<style scoped>

  .longSummary__title {
    font-size: 16pt;
    margin-bottom: 0.25em;
    letter-spacing: 1px;
  }

  .effect__longSummary {
    padding-bottom: 1em;
    margin-bottom: 1em;
    clear: both;
    overflow: auto;
  }

  .longSummary__mainArticle {
    font-style: italic;
    color: #666;
    padding-left: 1em;
    font-size: 13pt;
    margin-bottom: 1em;
  }

</style>