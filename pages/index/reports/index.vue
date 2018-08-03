<template>
  <div class="pageContent">
    <h1> Trip Reports </h1>
    <table class="tripReports__listTable">
      <thead class="tripReports__listTableHead">
        <tr>
          <td> Title </td>
          <td> Author </td>
          <td> Substance(s) </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="report in $store.state.reports"
          :key="report._id">
          <td> 
            <nuxt-link :to="'/reports/' + report.slug"> {{ report.title }} </nuxt-link>
          </td>
          <td> {{ report.subject.name }} </td>
          <td> 
            <span 
              v-for="(substance, index) in report.substances"
              :key="index">
              {{ substance.name + spacer(index, report.substances.length) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch("getReports");
  },
  methods: {
    spacer(index, length) {
      return (index < (length - 1) ? ", " : "");
    }
  },
  head() {
    return {
      title: 'Trip Reports'
    };
  }
};
</script>

<style>
  .tripReports__listTable {
    width: 100%;
    color: #333;
  }

  .tripReports__listTableHead {
    font-weight: bold;
  }

</style>