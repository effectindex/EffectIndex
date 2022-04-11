<template>
  <ul class="bulletList">
    <li
      class="bulletListItem"
    >
      <slot />
      <reference
        v-for="(reference, index) in references"
        :key="index"
        :to="getTo(reference)"
        :no="getNo(reference)"
      />
    </li>
  </ul>
</template>

<script>
import Reference from '@/components/Reference';
export default {
  components: {
    Reference
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    refs: {
      type: String,
      default: ""
    }
  },
  computed: {
    references() {
      return this.refs.split(',');
    }
  },
  methods: {
    getTo(reference) {
      return reference.split('.')[0].trim();
    },
    getNo(reference) {
      let ref = reference.split('.');
      return ref[1] ? ref[1].trim() : '';
    }
  }
};
</script>

<style scoped>
  .bulletList {
    display: inline-block;
    padding-left: 2em;
    margin: 0;
    margin-bottom: 0.5em;
    white-space: normal;
  }

</style>