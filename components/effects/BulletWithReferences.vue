<template>
  <ul class="bulletList">
    <li
      class="bulletListItem">
      {{ text }} 
      <reference
        v-for="(reference, index) in references"
        :to="getTo(reference)"
        :no="getNo(reference)"
        :key="index" />
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
    padding-left: 2em;
    margin: 0;
    white-space: normal;
  }

</style>