<template>
  <div class="featuredReport">
    <div class="reportInfo">
      <div class="reportTitle">
        <nuxt-link
          :to="`/reports/${url}`">
          {{ title }}
        </nuxt-link>
      </div> 
      <div class="reportAuthor">
        by <span class="reportAuthor"> {{ author }} </span>
      </div>
    </div>
    <div class="reportSubstance">
      <div class="reportSubstanceName"> {{ substance.name }} </div> 
      <div class="reportSubstanceDoseRoa"> {{ substance.dose }} {{ substance.roa }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    substances: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    substance() {
      if (!this.substances.length) return { name: '', dose: '', roa: ''};
      else if (this.substances.length > 1) return { name: 'Combination', dose: '', roa: ''};
      else {
        return {
          name: this.substances[0].name,
          dose: this.substances[0].dose,
          roa: this.substances[0].roa
        };
      }
    }
  }
};
</script>
