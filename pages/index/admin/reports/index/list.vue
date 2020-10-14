<template>
  <div>
    <hr>
    <h3> Reports </h3>
    <table class="reportListTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Author </td>
          <td> Tags </td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="report in reports"
          :key="report._id"
        >
          <td> 
            <nuxt-link :to="'/reports/' + report.slug">
              {{ report.title }}
            </nuxt-link>
          </td>
          <td> {{ report.subject ? report.subject.name : '' }} </td>
          <td>
            <span 
              v-for="tag in report.tags"
              :key="tag"
              class="reportTag"
            >
              {{ tag }}
            </span>
          </td>
          <td style="display: flex;">
            <nuxt-link :to="'/admin/reports/' + report._id">
              <Icon
                filename="edit.svg"
                style="cursor: pointer; height: 1em; width: 1em; padding-right: 2em;"
              /> 
            </nuxt-link> 
            <a @click="deleteReport(report._id)"> 
              <Icon
                filename="times.svg"
                style="height: 1em; width: 1em; cursor: pointer;"
                color="red"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  computed: {
    reports () {
      return this.$store.state.reports;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getReports");
  },
  methods: {
    async deleteReport(id) {
      await this.$store.dispatch('deleteReport', id);

      this.$toasted.show(
        'The report has been successfully deleted.',
        {
          duration: 2000,
          type: 'success'
        }
      );


    }
  }
};
</script>

<style>
.reportListTable {
  width: 100%;
}
</style>