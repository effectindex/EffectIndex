<template>
  <div class="reportEditor">
    <label> Title 
      <input
        v-model="reportData.title"
        class="reportEditor__inputTitle">
    </label>
    <label> Author 
      <input
        v-model="reportData.author"
        class="reportEditor__inputTitle">
    </label>
    <label> Description
      <textarea
        v-model="reportData.description" 
        class="reportEditor__inputDescrption" />
    </label>
    <div class="reportEditor__inputReportButtonContainer">
      <nuxt-link
        class="reportEditor__cancelLink"
        to="/admin/blog/list"> Cancel </nuxt-link>
      <button 
        class="reportEditor__inputReportButton"
        @click="submitReport()"> {{ report ? 'Update' : 'Submit' }} </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      reportData: {
        author: this.report ? this.report.author : "",
        title: this.report ? this.report.title : "",
        description: this.report ? this.report.description : "",
      }
    };
  },
  methods: {
    submitReport() {
      this.$emit(this.report ? "edit-report" : "new-report", this.reportData);
    }
  },
  middleware: ["auth"]
};
</script>

<style>
.reportEditor__inputTitle {
  width: 100%;
  height: 50px;
  font-size: 25px;
  padding: 10px;
}

.reportEditor__inputDescrption {
  width: 100%;
  min-height: 500px;
  font-size: 18px;
  font-family: "titillium web";
  padding: 10px;
}

.reportEditor__inputDescrption,
.reportEditor__inputTitle {
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
</style>