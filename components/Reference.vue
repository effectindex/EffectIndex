<template>
  <sup 
    :id="'ref-' + to + (no ? '-' + no : '')"
    class="reference"
  >
    <a :href="'#cite-' + to">
      [{{ text ? text : to }}]
    </a>
  </sup>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ""
    },
    no: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.reference {
  font-size: 0.8em;
  letter-spacing: -1px;
}

.reference:target {
  font-weight: bold;
}

.short .reference {
  display: none;
}
</style>