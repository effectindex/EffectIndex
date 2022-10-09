<template>
  <section class="report__logBox">
    <h2
      :style="{ backgroundColor: headerColour }"
      class="report__logBoxHeader"
    >
      {{ header }}
    </h2>
    <div class="report__logBoxContainer">
      <div
        :style="{ backgroundColor: headerColour }"
        class="outer"
      >
        <div class="inner rotate">
          {{ header }}
        </div>
      </div>
      <div class="content">
        <div
          v-for="(item, index) in log"
          :key="index"
          class="logItem"
        >
          <div
            v-if="item.time" 
            class="logTime"
          >
            {{ item.time }}:
          </div>
          <!-- eslint-disable-next-line -->
          <div class="logDescription" v-html="trimmedMarkdown(item.description)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    log: {
      type: Array,
      default: () => []
    },
    headerColour: {
      type: String,
      default: "#FFFFFF"
    },
    header: {
      type: String,
      default: "Log"
    }
  },
  methods: {
    trimmedMarkdown(text) {
      if (!text) return "";
      let rendered = this.$md.render(text);
      if (rendered) rendered = rendered.trim();
      return rendered;
    }
  }
};
</script>

<style scoped>
.report__logBoxContainer {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.report__logBoxHeader {
  display: none;
  padding: 0.5em;
  margin-bottom: 0;
}

.content {
  flex: 1;
  flex-direction: column;
}

.logItem {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.logTime {
  color: #999;
  white-space: nowrap;
  text-align: right;
  margin-right: 10px;
}

@media(max-width:600px){
  .logItem {
    flex-direction:column;
  }
  .logTime {
    text-align: left;
  }
}

.logItem:not(:last-child) {
  border-bottom: 1px solid rgba(170, 170, 170, 0.35);
}

.logItem:nth-child(even) {
  background-color: #f6f6f6;
}

.logDescription {
  padding: 0;
  white-space: pre-line;
}

.outer {
  position: relative;
  display: inline-block;
  border-right: 1px solid #cccccc;
  font-weight: bold;
  padding: 60px 25px;
}

.rotate {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.inner {
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 25px;
  top: 50%;
  left: 50%;
  opacity: 0.5;
}



.logTable__time {
  vertical-align: top;
  text-align: right;
  white-space: nowrap;
  padding-left: 20px;
  opacity: 0.5;
}



@media (max-width: 600px) {
  .outer {
    display: none;
  }

  .report__logBoxHeader {
    display: block;
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  .logTime {
    font-size: 14px;
  }
}
</style>