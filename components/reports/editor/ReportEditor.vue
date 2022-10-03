<template>
  <div class="reportEditor">
    <label> Title
      <input
        v-model="reportData.title"
        class="reportEditor__inputTitle"
      >
    </label>

    <section-header
      :visibility="sectionVisibility.subject"
      title="Subject Information"
      name="subject"
      @toggle="toggleVisibility"
    />

    <div
      v-show="sectionVisibility['subject']"
      class="section"
    >
      <label> Name
        <input
          v-model="reportData.subject.name"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Person?
        <person-input
          v-model="reportData.person"
          @clear="reportData.person = null"
        />
      </label>
      <label> Trip Date
        <input
          v-model="reportData.subject.trip_date"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Age
        <input
          v-model="reportData.subject.age"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Setting
        <input
          v-model="reportData.subject.setting"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Gender
        <input
          v-model="reportData.subject.gender"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Height
        <input
          v-model="reportData.subject.height"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Weight
        <input
          v-model="reportData.subject.weight"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Medications
        <input
          v-model="reportData.subject.medications"
          class="reportEditor__inputTitle"
        >
      </label>
      <label> Tracker PDF
        <input
          v-model="reportData.subject.pdf_url"
          class="reportEditor__inputTitle"
        >
      </label>
    </div>

    <section-header
      :visibility="sectionVisibility.substances"
      title="Substance Information"
      name="substances"
      @toggle="toggleVisibility"
    />

    <substances-input
      v-show="sectionVisibility.substances"
      v-model="reportData.substances"
    />

    <section-header
      :visibility="sectionVisibility.introduction"
      title="Introduction"
      name="introduction"
      @toggle="toggleVisibility"
    />

    <textarea
      v-show="sectionVisibility.introduction"
      v-model="reportData.introduction"
      class="reportEditor__textarea"
    />

    <section-header
      :visibility="sectionVisibility.onset"
      title="Onset"
      name="onset"
      @toggle="toggleVisibility"
    />

    <log-input
      v-show="sectionVisibility['onset']"
      v-model="reportData.onset"
    />

    <section-header
      :visibility="sectionVisibility.peak"
      title="Peak"
      name="peak"
      @toggle="toggleVisibility"
    />

    <log-input
      v-show="sectionVisibility['peak']"
      v-model="reportData.peak"
    />

    <section-header
      :visibility="sectionVisibility.offset"
      title="Offset"
      name="offset"
      @toggle="toggleVisibility"
    />

    <log-input
      v-show="sectionVisibility['offset']"
      v-model="reportData.offset"
    />


    <section-header
      :visibility="sectionVisibility.conclusion"
      title="Conclusion"
      name="conclusion"
      @toggle="toggleVisibility"
    />

    <textarea
      v-show="sectionVisibility.conclusion"
      v-model="reportData.conclusion"
      class="reportEditor__textarea"
    />

    <section-header
      :visibility="sectionVisibility.tags"
      title="Tags"
      name="tags"
      @toggle="toggleVisibility"
    />

    <tag-input
      v-show="sectionVisibility.tags"
      v-model="reportData.tags"
    />

    <section-header
      :visibility="sectionVisibility['relatedEffects']"
      title="Related Effects"
      name="relatedEffects"
      @toggle="toggleVisibility"
    />

    <effect-input
      v-show="sectionVisibility['relatedEffects']"
      v-model="reportData.related_effects"
    />

    <div>
      <label for="featured">
        Featured
        <input
          id="featured"
          v-model="reportData.featured"
          type="checkbox"
        >
      </label>
      <label for="unpublished">
        Unpublished
        <input
          id="unpublished"
          v-model="reportData.unpublished"
          type="checkbox"
        >
      </label>
    </div>

    <div class="reportEditor__inputReportButtonContainer">
      <nuxt-link
        class="reportEditor__cancelLink"
        to="/admin/reports"
      >
        Cancel
      </nuxt-link>
      <button
        class="reportEditor__inputReportButton"
        @click="submitReport()"
      >
        {{ report ? 'Update' : 'Submit' }}
      </button>
    </div>
  </div>
</template>

<script>
import LogInput from './LogInput';
import SectionHeader from './SectionHeader';
import SubstancesInput from './SubstancesInput';
import TagInput from './TagInput';
import EffectInput from './EffectInput';
import PersonInput from '@/components/editors/PersonInput';

export default {
  components: {
    SectionHeader,
    LogInput,
    SubstancesInput,
    TagInput,
    EffectInput,
    PersonInput
  },
  middleware: ["auth"],
  props: {
    report: {
      type: Object,
      required: false,
      default: undefined
    },
    visibility: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    const sections = ['subject', 'substances', 'onset', 'peak', 'offset',
        'introduction', 'conclusion', 'tags', 'relatedEffects'];

    const sectionVisibility = Object.fromEntries(
        sections.map( this.visibility ?
          section => this.visibility[section] ? [section, this.visibility[section]] : [section, false] :
          section => [section, false]
        )
    );

    return {
      reportData: {
        _id: this.report ? this.report._id : undefined,
        title: this.report ? this.report.title : undefined,
        form_link: this.report ? this.report.form_link : undefined,
        subject: this.report ? this.report.subject : {},
        person: this.report ? this.report.person : undefined,
        substances: this.report ? this.report.substances : [],
        related_effects: this.report ? this.report.related_effects : [],
        introduction: this.report ? this.report.introduction : undefined,
        onset: this.report ? this.report.onset : [],
        peak: this.report ? this.report.peak : [],
        offset: this.report ? this.report.offset : [],
        conclusion: this.report ? this.report.conclusion : undefined,
        tags: this.report ? this.report.tags : [],
        featured: this.report ? this.report.featured : false,
        unpublished: this.report ? this.report.unpublished : false,
      },
      sectionVisibility
    };
  },
  methods: {
    submitReport() {
      this.$emit(this.report ? "edit-report" : "new-report", {
        report: this.reportData,
        sectionVisibility: this.sectionVisibility
      });
    },
    toggleVisibility(section) {
      this.sectionVisibility[section] = !this.sectionVisibility[section];
    }
  }
};
</script>

<style>
.reportEditor__inputTitle {
  width: 100%;
  font-size: 25px;
}

.reportEditor__textarea {
  width: 100%;
  font-size: 18px;
  height: 200px;
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 10px;
}

.reportEditor__textarea,
.reportEditor__inputTitle {
  margin-top: 0.25em;
  border: 1px solid #aaaaaa;
}

.reportEditor__inputReportButtonContainer {
  text-align: right;
}

.reportEditor__inputReportButton {
  background-color: transparent;
  border: 1px solid #ccc;
  font-size: 18px;
  width: 100px;
  padding: 1em;
  margin-top: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.reportEditor__inputReportButton:hover {
  opacity: 1;
}

.reportEditor__cancelLink {
  padding-right: 2em;
}

.reportEditor .sectionHeaderContainer > h4 {
  margin-bottom: 0.5em;
  display: inline-block;
}

.reportEditor .visibilityToggle {
  user-select: none;
  cursor: pointer;
  text-transform: none;
  font-weight: normal;
  letter-spacing: 0;
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

.reportEditor .section {
  padding: 0.25em 0.5em;
  border: 1px solid #CCC;
  background-color: #EEE;
}

.log .itemTimeInput {
  width: 100px;
  display: block;
}

.log .addButton, .substancesInput .addButton {
  background-color: rgb(222, 241, 222);
}

.log .itemDescriptionInput {
  width: 100%;
}

.log .inputContainer {
  display: flex;
  justify-content: space-between;
}

.log .descriptionLabel {
  width: 100%;
  margin-left: 1em;
}
</style>
