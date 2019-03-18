<template>
  <div
    class="substance__longSummary">
    <h4
      v-show="showTitle"
      :id="substance.url"
      class="longSummary__title">
      {{ substance.name }}
    </h4>
    <div class="longSummary__mainArticle">
      Full article: 
      <nuxt-link
        :to="`/substances/${substance.url}`">
        {{ substance.name }}
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
import FormattedDocument from "@/components/substances/FormattedDocument";

export default {
  components: {
    CaptionedImage,
    FormattedDocument
  },
  props: {
    substance: {
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
      return this.substance.long_summary_formatted ? this.substance.long_summary_formatted : undefined;
    },
    replications() {
      return this.$store.state.replications;
    },
    odd() {
      return (this.index % 2) ? true : false;
    },
    image() {
      let replications = this.replications.filter((replication) =>
      (replication.associated_substances.includes(this.substance._id) && (replication.type !== 'audio')));

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

  .substance__longSummary {
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