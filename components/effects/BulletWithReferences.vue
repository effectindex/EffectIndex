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
      return reference.split('.')[0];
    },
    getNo(reference) {
      let no = reference.split('.')[1];
      return (no ? no : '');
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