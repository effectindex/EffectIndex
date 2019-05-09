<template>
  <div class="pageContent">
    <hr>
    <h4> Substances </h4>
    <label for="substanceFilter"> Filter by Tag:
      <input
        v-model="filter"
        type="text"
        class="filterInput"
      > <a @click="clearFilter"> (clear) </a> </label>
    <table class="substanceTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Tags </td>
        </tr>
      </thead>
      <substance-table-row
        v-for="substance in filteredSubstances"
        :key="substance._id"
        :substance="substance"
        @deleteSubstance="deleteSubstance"
      />
    </table>
  </div>
</template>

<script>
import SubstanceTableRow from "@/components/substances/SubstanceTableRow.vue";

export default {
  components: {
    SubstanceTableRow
  },
  data() {
    return {
      filter: ""
    };
  },
  computed: {
    filteredSubstances() {
      return this.filter
        ? this.$store.state.substances.filter(substance =>
            substance.tags.some(tag => tag.indexOf(this.filter) > -1)
          )
        : this.$store.state.substances;
    }
  },
  mounted() {
    this.$store.dispatch("getSubstances");
  },
  middleware: ["auth"],
  scrollToTop: true,
  methods: {
    deleteSubstance(id) {
      this.$store.dispatch("deleteSubstance", id);

      this.$notify({
        title: 'Substance Deleted.',
        text: 'The substance has been deleted.'
      });

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
