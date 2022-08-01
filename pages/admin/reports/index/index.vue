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
  data() {
    return {
      reports: () => ([])
    };
  },
  async fetch() {
    try {
      const { reports } = await this.$axios.$get('/api/reports/admin');
      return this.reports = reports;
    } catch (error) {
      this.$toasted.show('There was an error fetching the reports.', { duration: 2000, type: 'error' });
    }
  },
  methods: {
    async deleteReport(id) {

this.$toasted.show('Really delete?', {
          action: [{
              text: 'Yes, delete!',
              onClick: async (e, toastObject) => {
                try {
                  await this.$store.dispatch('reports/delete', id);
                  toastObject.goAway(0);
                  this.$toasted.show(
                    'The report has been successfully deleted.',
                    {
                      duration: 2000,
                      type: 'success'
                    }
                  );
                  this.$fetch();
                } catch (error) {
                  if (error.response) {
                    this.$toasted.show(error.response.data.message,
                    {
                      duration: 2000,
                      type: 'error'
                    });
                  } else {
                    console.log(error);
                  }
                }
              }
            },
            {
              text: 'No, keep!',
              onClick: (e, toastObject) => toastObject.goAway()
            }]
        });

      this.$fetch();


    }
  }
};
</script>

<style>
.reportListTable {
  width: 100%;
}
</style>
