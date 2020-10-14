<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> 
      <Icon
        filename="user.svg"
        style="height: 1em; width: 1.2em; padding-right: 10px;"
      /> Context 
    </h2>
    <div class="report__infoBoxTableContainer">
      <table class="report__infoBoxTable">
        <tbody>
          <tr v-if="subject.name">
            <td class="label">
              Name:
            </td> 
            <td> 
              <span v-if="profile"> <nuxt-link :to="'/profiles/' + profile.username">{{ subject.name }}</nuxt-link>  </span>
              <span v-else>{{ subject.name }}</span>
            </td>
          </tr>
          <tr v-if="subject.trip_date">
            <td class="label">
              Trip Date:
            </td> <td> {{ subject.trip_date }} </td> 
          </tr>
          <tr v-if="subject.age"> 
            <td class="label">
              Age:
            </td> <td> {{ subject.age }} </td>
          </tr>
          <tr v-if="subject.setting">
            <td class="label">
              Setting:
            </td> <td>  {{ subject.setting }} </td> 
          </tr>
          <tr v-if="subject.gender">
            <td class="label">
              Gender:
            </td> <td> {{ subject.gender }} </td>
          </tr>
          <tr v-if="subject.height">
            <td class="label">
              Height:
            </td> <td> {{ subject.height }} </td>
          </tr>
          <tr v-if="subject.weight">
            <td class="label">
              Weight:
            </td> <td> {{ subject.weight }} </td>
          </tr>
          <tr v-if="subject.medications">
            <td class="label">
              Medications:
            </td> <td> {{ subject.medications }} </td>
          </tr>
        </tbody>
      </table>
      <div 
        v-show="subject.pdf_url"
        class="tracker_pdf"
      >
        <ext-link :href="subject.pdf_url">
          Subjective Effect Tracker PDF
        </ext-link>
      </div>
    </div>
  </section>
</template>

<script>
import ExtLink from '@/components/ExtLink';
import Icon from '@/components/Icon';

export default {
  components: {
    ExtLink,
    Icon
  },
  props: {
    subject: {
      type: Object,
      default: () => ({})
    },
    profile: {
      type: Object,
      default: undefined
    }
  },
};
</script>

<style scoped>

.report__infoBoxTableContainer {
  padding: 0;
}

.report__infoBox a {
  color: #3d9991;
  text-decoration: none;
}

.report__infoBoxTable {
  table-layout: auto;
}

.report__infoBoxTable td {
  padding: 5px 10px;
}

.report__infoBoxTable tr:nth-child(even) {
  background-color: #F3F3F3;
}

.label {
  font-weight: bold;
  max-width: 50px;
}

.tracker_pdf {
  margin-top: 0.25em;
  padding: 0 0.5em;
}

.tracker_pdf a {
  margin-top: 0.5em;
  font-size: 1.1em;

}

</style>