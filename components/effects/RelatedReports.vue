<template>
  <ul>
    <li 
      v-for="report in reports"
      :key="report._id"
    >
      <nuxt-link 
        :to="`/reports/${report.slug}`"
      >
        {{ report.title }} - {{ report.subject.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    reports: {
      type: Array,
      default: () => []
    }
  }
};
</script>