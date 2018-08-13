<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-user-o icon" /> Context </h2>
    <div class="report__infoBoxTableContainer">
      <table class="report__infoBoxTable">
        <tbody>
          <tr v-show="subject.name">
            <td class="label"> Name: </td> 
            <td> 
              <span v-if="profile"> <nuxt-link :to="'/profiles/' + profile.username">{{ subject.name }}</nuxt-link>  </span>
              <span v-else>{{ subject.name }}</span>
            </td>
          </tr>
          <tr v-show="subject.trip_date">
            <td class="label"> Trip Date: </td> <td> {{ subject.trip_date }} </td> 
          </tr>
          <tr v-show="subject.age"> 
            <td class="label"> Age: </td> <td> {{ subject.age }} </td>
          </tr>
          <tr v-show="subject.setting">
            <td class="label"> Setting: </td> <td>  {{ subject.setting }} </td> 
          </tr>
          <tr v-show="subject.gender">
            <td class="label"> Gender: </td> <td> {{ subject.gender }} </td>
          </tr>
          <tr v-show="subject.height">
            <td class="label"> Height: </td> <td> {{ subject.height }} </td>
          </tr>
          <tr v-show="subject.weight">
            <td class="label"> Weight: </td> <td> {{ subject.weight }} </td>
          </tr>
          <tr v-show="subject.medications">
            <td class="label"> Medications: </td> <td> {{ subject.medications }} </td>
          </tr>
        </tbody>
      </table>
      <div 
        v-show="subject.pdf_url"
        class="tracker_pdf">
        <ext-link :href="subject.pdf_url"> Subjective Effect Tracker PDF </ext-link>
      </div>

    </div>
  </section>
</template>

<script>
import ExtLink from '@/components/ExtLink';

export default {
  components: {
    ExtLink
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

.report__infoBox a {
  color: #3d9991;
  text-decoration: none;
}

.report__infoBoxTable {
  width: auto;
}

.label {
  font-weight: bold;
  vertical-align: top;
  white-space: pre;
  padding-right: 1em;
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