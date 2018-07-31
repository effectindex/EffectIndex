<template>
  <div class="report">
    <h1 class="report__title"> {{ report.title }} </h1>

    <div class="report__topSection">
      <div class="report__infoBox">
        <h2 class="report__infoBoxHeader"> <i class="fa fa-user icon" /> Subject </h2>
        <ul class="report__infoBoxList">
          <li v-show="report.subject.name"> <label> Name: </label> {{ report.subject.name }} </li>
          <li v-show="report.subject.trip_date"> <label> Trip Date: </label> {{ report.subject.trip_date }} </li>
          <li v-show="report.subject.age"> <label> Age: </label> {{ report.subject.age }} </li>
          <li v-show="report.subject.location"> <label> Location: </label> {{ report.subject.location }} </li>
          <li v-show="report.subject.gender"> <label> Gender: </label> {{ report.subject.gender }} </li>
        </ul>
      </div>

      <div class="report__infoBox">
        <h2 class="report__infoBoxHeader"> <i class="fa fa-cubes icon" /> Substances </h2>
        <table
          v-show="report.substances.length"
          class="report__infoBoxTable">
          <thead>
            <tr>
              <td> Name </td>
              <td> Dose </td>
              <td> RoA </td>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(substance, index) in report.substances"
              :key="index">
              <td> {{ substance.name }} </td>
              <td> {{ substance.dose }} </td>
              <td> {{ substance.roa }} </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    <text-box 
      v-if="report.introduction"
      :text="report.introduction"
      header-colour="#EEE"
      header="Introduction" />

    <text-box
      v-if="report.description"
      :text="report.description"
      header-colour="#EEE"
      header="Description" />

  </div>
</template>

<script>
import TextBox from '@/components/reports/report__textBox';

export default {
  components: {
    TextBox
  },
  async asyncData({ store, params, error }) {
    let report = await store.dispatch("getReportBySlug", params.slug);
    if (!report) error({ statusCode: 404, message: 'That report does not exist.' });
    return report;
  }
};
</script>

<style>

.report {
  color: #333;
}

h1 {
  font-size: 30px;
}

.report .icon {
  padding-right: 0.4em;
  font-size: 30px;
}

.report__topSection {
  display: flex;
  flex-direction: row;
}

.report__infoBox:first-child {
  margin-left: 0;
}

.report__infoBox:last-child {
  margin-right: 0;
}

.report__textBox {
  margin: 1em 0;
  background-color: #F5F5F5;
  border: 3px solid #666;
  border-radius: 8px;
  overflow: hidden;
  white-space: pre-wrap;
}

.report__textBoxText {
  padding: 1em;
}

.report__textBoxHeader {
  background-color: #EEE;
  border-bottom: 3px solid #666;
  padding: 0.25em 0.5em;
}

.report__infoBox {
  margin: 0.5em;
  background-color: #F6F6F6;
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
  border: 3px solid #666;
}

.report__infoBox label {
  font-weight: bold;
  padding-right: 0.25em;
}

.report__infoBoxHeader {
  padding: 0.25em 0.5em;
  display: flex;
  background-color: rgb(215, 229, 255);
  border-bottom: 3px solid #666;
  align-items: center;
}

.report__infoBoxList {
  list-style: none;
  padding: 1em;
}

.report__infoBoxTable {
  width: 100%;
  padding: 1em;
}

.report__infoBoxTable thead {
  font-weight: bold;
}


@media (max-width: 600px) {
  .report__topSection {
    display: block;
  }

  .report__infoBox {
    margin: 1em 0;
  }

  .report__infoBoxHeader {
    padding: 0.25em;
  }
}

</style>