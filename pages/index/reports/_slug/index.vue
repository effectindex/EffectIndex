<template>
  <article class="report">

    <div class="report__headerContainer">
      <div class="report__headerTitleContainer">
        <h1
          class="report__title"
          style="margin-bottom: 0;"> {{ report.title }} </h1>
        <div
          v-show="report.subject.name"
          class="report__titleAuthor">
          <span v-if="profile">
            by <nuxt-link :to="'/profiles/' + profile.username"> {{ report.subject.name }} </nuxt-link>
          </span>
          <span v-else>
            by {{ report.subject.name }}
          </span>
        </div>
      </div>
      <div class="report__tagsContainer">
        <tag
          v-for="(tag, index) in report.tags"
          :key="index"
          :value="tag" />
      </div>
    </div>

    <div class="report__topSection">
      <subject-box
        :profile="profile"
        :subject="report.subject" />
      <substances-box :substances="report.substances" />
    </div>

    <text-box
      v-if="report.introduction"
      :text="report.introduction"
      :icon="['far', 'sun']"
      header-colour="#EEE"
      header="Introduction" />

    <text-box
      v-if="report.description"
      :text="report.description"
      :icon="['far', 'comment']"
      header-colour="#EEE"
      header="Description" />

    <div class="report__logsContainer">
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
    </div>

    <text-box
      v-if="report.conclusion"
      :text="report.conclusion"
      :icon="['far', 'moon']"
      header-colour="#EEE"
      header="Conclusion / Aftermath" />

  </article>
</template>

<script>
import TextBox from "@/components/reports/report__textBox";
import SubjectBox from "@/components/reports/report__subjectBox";
import SubstancesBox from "@/components/reports/report__substancesBox";
import LogBox from "@/components/reports/report__logBox";
import Tag from "@/components/reports/report__tag";

export default {
  components: {
    TextBox,
    SubjectBox,
    SubstancesBox,
    LogBox,
    Tag
  },
  computed: {
    profile() {
      let profile = undefined;
      let profiles = this.$store.state.profiles;
      profile = profiles.find(
        profile => profile.username === this.report.subject.name
      );
      return profile;
    },
    description() {
      let substances = this.report.substances.map((substance) => substance.name);
      let substanceList = '';
      substances.forEach((substance, index) => substanceList += (substance + (index < substances.length - 1 ? ', ' : '')));
      return `A ${substanceList} report from ${this.report.subject.name} on Effect Index.`;
    }
  },
  async asyncData({ store, params, error }) {
    let report = await store.dispatch("getReportBySlug", params.slug);
    if (!report)
      error({ statusCode: 404, message: "That report does not exist." });
    return report;
  },
  async fetch({ store }) {
    await store.dispatch("getProfiles");
  },
  head() {
    return {
      title: this.report.title,
      meta: [
        { name: 'description', hid: 'description', content: this.description },
        { name: 'og:title', hid: 'og:title', content: `Effect Index - Trip Report - ${this.report.title} by ${this.report.subject.name}` },
        { name: 'og:description', hid: 'og:description', content: this.description },
        { name: 'twitter:title', hid: 'twitter:title', content: `Effect Index - Trip Report - ${this.report.title} by ${this.report.subject.name}` },
        { name: 'twitter:description', hid: 'twitter:description', content: this.description },
      ]
    };
  },
  scrollToTop: true
};
</script>

<style>
.report {
  color: #333;
}

.report a {
  color: #3d9991;
}

h1 {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 15px;
}

.report__title {
  margin: 0;
  padding: 0;
}

.report__titleAuthor {
  padding: 0.25em 0;
}

.report__titleAuthor a {
  text-decoration: none;
}

.report__headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25em;
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
  align-items: baseline;
  padding-bottom: 0.25em;
}

.report__infoBox {
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
  background-color: #fbfbfb;
  border: 1px solid #cccccc;  
}

.report__textBoxText {
  white-space: pre-wrap;
}

.report ul, .report ol {
  white-space: normal;
}

.report__textBoxText {
  padding: 1em;
}

.report__textBoxHeader {
  font-weight: 400;
  background-color: #eee;
  border-bottom: 1px solid #cccccc;
  padding: 0.25em 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.report__infoBox {
  margin: 0.5em;
  background-color: #fbfbfb;
  overflow: hidden;
  border: 1px solid #cccccc;
  flex: 1;
}

.report__infoBoxHeader {
  padding: 0.25em 0.5em;
  display: flex;
  background-color: #eee;
  border-bottom: 1px solid #cccccc;
  align-items: center;
}

.report__infoBoxTableContainer {
  padding: 0.5em;
}

.report__infoBoxTable {
  width: 100%;
}

.report__infoBoxTable {
  border-collapse: collapse;
}

.report__infoBoxTableHeader {
  font-weight: bold;
  border-bottom: 1.5px solid #ccc;
}

.report__infoBoxTable td {
  padding: 0.25em;
}

.report__logsContainer {
  margin: 1em 0;
}

.report__logBox {
  border: 1px solid #cccccc;
  overflow: hidden;
  margin-bottom: 0.5em;
  background-color: #fbfbfb;
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