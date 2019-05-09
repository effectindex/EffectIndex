<template>
  <ol class="citationList">
    <citation 
      v-for="(citation, index) in filteredCitations"
      :key="index"
      :from="String(citation.from)"
      :no="String(citation.no)"
    >
      <span class="citationText"> {{ citation.text }} </span>
      <span class="citationSeparator"> | </span>
      <ext-link :href="citation.url">
        {{ citation.url }}
      </ext-link>
    </citation>
    <slot />
  </ol>
</template>

<script>
import Citation from "@/components/effects/Citation.vue";
import ExtLink from "@/components/ExtLink.vue";

export default {
  components: {
    Citation,
    ExtLink
  },
  props: {
    citations: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredCitations() {
      return this.citations ? this.citations.filter(citation => citation) : [];
    }
  },
};
</script>

<style>
.citationList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 0;
  font-size: 14px;
  font-weight: bold;
}

.citationList li {
  margin-left: 15px;
  min-width: 300px;
  padding: 5px;
  margin: 10px;
  margin-bottom: 10px;
  padding: 0.25em 0;
  font-weight: bold;
  break-inside: avoid;
  page-break-inside: avoid;
}

.citationText {
  color: #444;
}

.citationSeparator {
  color: #aaa;
}

.citation__contents {
  font-weight: normal;
  margin-left: 5px;
}

@media (max-width: 640px) {
  .citationList {
    grid-template-columns: 1fr;
  }

  .citationList li {
    word-break: break-all;
  }

  .citation__contents {
    margin-left: 0;
  }
}

.citationList li:target {
  background-color: #eee;
}

.citationList a:link {
  color: rgb(61, 153, 145);
}
</style>