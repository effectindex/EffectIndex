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
  font-size: 80%;
  font-weight: normal;
  font-style: normal;
  unicode-bidi: isolate;
  white-space: nowrap;
  line-height: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.reference:target {
  font-weight: bold;
}

.short .reference {
  display: none;
}
</style>