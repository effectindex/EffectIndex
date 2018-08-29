<template>
  <div class="searchResult">
    <div class="topContainer">
      <div class="titleAuthor">
        <h3> <nuxt-link :to="'/reports/' + report.slug"> {{ report.title }} </nuxt-link> </h3>
        <span class="author"> by {{ report.subject.name }} </span>
      </div>
      <div 
        class="substanceDose">
        <div class="substance"> {{ substance.name }} </div>
        <div class="dose"> {{ substance.dose }} {{ substance.roa }} </div>
      </div>
    </div>
    <tag
      v-for="(tag, index) in report.tags"
      :key="index"
      :value="tag" />
  </div>
</template>

<script>
import Tag from "@/components/effects/Tag";

export default {
  components: {
    Tag
  },
  props: {
    report: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    substance() {
      const report = this.report;
      return report.substances.length > 1 ? { name: 'Combination', dose: '', roa: ''} : report.substances[0];
    }
  }
};
</script>

