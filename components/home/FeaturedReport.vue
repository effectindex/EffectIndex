<template>
  <div class="featuredReport">
    <div class="reportInfo">
      <div class="reportTitle">
        <nuxt-link
          :to="`/reports/${slug}`"
        >
          {{ title }}
        </nuxt-link>
      </div> 
      <div class="reportAuthor">
        by <span class="reportAuthor"> {{ author }} </span>
      </div>
    </div>
    <div class="reportSubstance">
      <div class="reportSubstanceName">
        {{ substance.name }}
      </div> 
      <div class="reportSubstanceDoseRoa">
        {{ substance.dose }} {{ substance.roa }}
      </div>
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
    slug: {
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
        const [substance] = this.substances;
        const { name, dose, roa } = substance;
        return { name, dose, roa };
      }
    }
  }
};
</script>
