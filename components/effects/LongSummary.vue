<template>
  <div 
    class="effect__longSummary"
  >
    <h4 
      v-show="showTitle"
      :id="effect.url"
      class="longSummary__title"
    >
      {{ effect.name }}
    </h4>
    <div class="longSummary__mainArticle">
      Full article: 
      <nuxt-link
        :to="`/effects/${effect.url}`"
      >
        {{ effect.name }}
      </nuxt-link>
    </div>
    <div>
      <vcode
        v-if="isVcode"
        :body="long_summary"
      />
      <formatted-document
        v-else
        :document="long_summary"
      />
    </div>
  </div>
</template>

<script>
import FormattedDocument from "@/components/effects/FormattedDocument";

export default {
  components: {
    FormattedDocument,
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
    isVcode() {
      return this.effect.markup_format === 'vcode';
    },

    long_summary() {
      return this.isVcode ? this.effect.long_summary.parsed : this.effect.long_summary_formatted;
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