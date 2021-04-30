<template>
  <div class="vcode-component-example">
    <h2> {{ name }} </h2>
    <p
      v-if="description"
      class="section"
    >
      {{ description }}
    </p>

    <div class="section-container">
      <h3> Rendered Example </h3>
      <div class="rendered-example section">
        <vcode :body="this.$vcode(code)" />
      </div>
    </div>

    <div
      v-if="props.length"
      class="section-container"
    >
      <h3> Component Props </h3>
      <ul class="example-prop-list section">
        <li
          v-for="(prop, index) in props"
          :key="index"
          class="example-prop-list-item"
        >
          <span class="prop-name"> {{ prop.name }} </span>
          <span class="prop-description"> {{ prop.description }} </span>
        </li>
      </ul>
    </div>

    <div class="section-container">
      <h3> Example VCode </h3>
      <pre class="section"> {{ code }} </pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Example Component"
    },
    code: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    props: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
  .vcode-component-example h2 {
    font-size: 35px;
    margin: 1em 0 0 0;
    color: #67aea8;
  }

  .vcode-component-example h3 {
    font-size: 23px;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #DDD;
    margin: 0;
  }

.vcode-component-example {
  font-family: Helvetica, sans-serif;
  margin: 80px 0;
}

.vcode-component-example .section {
  margin: 1em 0;
}

.vcode-component-example .section-container {
  margin: 1em 0;
}

.vcode-component-example .rendered-example {
  width: 100%;
  overflow: hidden;
}

.vcode-component-example .example-prop-list-item {
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
}

.vcode-component-example .example-prop-list-item .prop-name {
  font-weight: bold;
}

.vcode-component-example pre {
  white-space: pre-wrap;
}
</style>