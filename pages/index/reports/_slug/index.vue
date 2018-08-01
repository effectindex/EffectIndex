<template>
  <article class="report">

    <div class="report__headerContainer">
      <h1 class="report__title"> {{ report.title }} </h1>
      <div class="report__tagsContainer">
        <tag 
          v-for="(tag, index) in report.tags"
          :key="index"
          :value="tag" />
      </div>
    </div>

    <div class="report__topSection">
      <subject-box :subject="report.subject" />
      <substances-box :substances="report.substances" />
    </div>

    <text-box 
      v-if="report.introduction"
      :text="report.introduction"
      header-colour="#EEE"
      icon="sun-o"
      header="Introduction" />

    <text-box
      v-if="report.description"
      :text="report.description"
      header-colour="#EEE"
      icon="comment-o"
      header="Description" />

    <log-box
      v-if="report.onset.length"
      :log="report.onset"
      header-colour="#DDFFDD"
      header="Onset" />

    <log-box
      v-if="report.peak.length"
      :log="report.peak"
      header-colour="#FFDDDD"
      header="Peak" />

    <log-box
      v-if="report.offset.length"
      :log="report.offset"
      header-colour="#DDDDFF"
      header="Offset" />

    <text-box
      v-if="report.conclusion"
      :text="report.conclusion"
      icon="moon-o"
      header-colour="#EEE"
      header="Conclusion / Aftermath" />

  </article>
</template>

<script>
import TextBox from '@/components/reports/report__textBox';
import SubjectBox from '@/components/reports/report__subjectBox';
import SubstancesBox from '@/components/reports/report__substancesBox';
import LogBox from '@/components/reports/report__logBox';
import Tag from '@/components/reports/report__tag';

export default {
  components: {
    TextBox,
    SubjectBox,
    SubstancesBox,
    LogBox,
    Tag
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
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 15px;
}

.report__headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.report__tagsContainer {
  display: inline-block;
}

.report .icon {
  padding-right: 0.4em;
  font-size: 30px;
}

.report__topSection {
  display: flex;
  flex-direction: row;
}

.report__infoBox {
  box-shadow: 2px 2px 2px #CCC;
}

.report__infoBoxHeader {
  font-weight: 400;
}

.report__infoBox:first-child {
  margin-left: 0;
}

.report__infoBox:last-child {
  margin-right: 0;
}

.report__textBox {
  margin: 1em 0;
  background-color: #FBFBFB;
  border: 3px solid #666;
  box-shadow: 2px 2px 2px #CCC;
  border-radius: 8px;
  overflow: hidden;
  white-space: pre-wrap;
}

.report__textBoxHeader {
  font-weight: 400;
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
  background-color: #FBFBFB;
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

.report__logBox {
  border: 3px solid #666;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5em;
  background-color: #FBFBFB;
  box-shadow: 2px 2px 2px #CCC;
}

@media (max-width: 600px) {

  .report__headerContainer {
    flex-direction: column;
  }

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