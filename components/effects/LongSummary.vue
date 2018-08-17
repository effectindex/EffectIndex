<template>
  <div 
    class="effect__longSummary">
    <h4 
      v-show="showTitle"
      class="longSummary__title">
      <nuxt-link
        :to="`/effects/${effect.url}`">
        {{ effect.name }}
      </nuxt-link>
    </h4>
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

  .effect__longSummary {
    padding-bottom: 1em;
    margin-bottom: 1em;
    clear: both;
    overflow: auto;
  }


</style>