<template>
  <section class="report__logBox">
    <h2
      :style="{ backgroundColor: headerColour }"
      class="report__logBoxHeader"> {{ header }} </h2>
    <div class="report__logBoxContainer">
      <div
        :style="{ backgroundColor: headerColour }"
        class="outer" >
        <div class="inner rotate"> {{ header }} </div>
      </div>
      <div class="content">
        <table class="logTable">
          <tbody>
            <tr
              v-for="(item, index) in log"
              :key="index"
              class="logTable__row">
              <td class="logTable__time"> {{ item.time }}: </td>
              <td
                class="logTable__description"
                v-html="trimmedMarkdown(item.description)" />
            </tr>
          </tbody>
        </table>
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
}

.outer {
  position: relative;
  display: inline-block;
  border-right: 1px solid #cccccc;
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
}

.content {
  padding: 1em;
}

.logTable__row:not(:last-child) {
  border-bottom: 1px solid rgba(170, 170, 170, 0.35);
}

.logTable__time {
  vertical-align: top;
  white-space: pre;
  padding-top: 0.5em;
}

.logTable {
  border-collapse: collapse;
}

.logTable__description {
  padding: 0.5em 1em 0.5em 0.5em;
  white-space: pre-wrap;
}

@media (max-width: 600px) {
  .outer {
    display: none;
  }

  .content {
    padding: 0.25em;
  }

  .report__logBoxHeader {
    display: block;
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  .logTable__description {
    padding: 0.25em 0.25em 1em 0.25em;
  }

  .logTable__time {
    font-size: 14px;
    white-space: normal;
  }
}
</style>