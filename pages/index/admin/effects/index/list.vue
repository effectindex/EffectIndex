<template>
  <div class="pageContent">
    <hr>
    <h4> Effects </h4>
    <label for="effectFilter" > Filter by Tag: 
      <input
        v-model="filter" 
        type="text"
        class="filterInput"> <a @click="clearFilter"> (clear) </a> </label>
    <table class="effectTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Tags </td>
        </tr>
      </thead>
      <effect-table-row 
        v-for="effect in filteredEffects"
        :key="effect._id"
        :effect="effect"
        @deleteEffect="deleteEffect" />
    </table>
  </div>
</template>

<script>
import EffectTableRow from "@/components/effects/EffectTableRow.vue";

export default {
  components: {
    EffectTableRow
  },
  data() {
    return {
      filter: ""
    };
  },
  computed: {
    filteredEffects() {
      return this.filter
        ? this.$store.state.effects.filter(effect =>
            effect.tags.some(tag => tag.indexOf(this.filter) > -1)
          )
        : this.$store.state.effects;
    }
  },
  mounted() {
    this.$store.dispatch("getEffects");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
    deleteEffect(id) {
      this.$store.dispatch("deleteEffect", id);
    },
    clearFilter() {
      this.filter = "";
    }
  }
};
</script>

<style scoped>
thead {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

table {
  margin-top: 1em;
}

.filterInput {
  height: 30px;
  padding: 0.25em;
  margin-left: 1em;
  font-size: 16px;
  border: 1px solid #ccc;
}
</style>