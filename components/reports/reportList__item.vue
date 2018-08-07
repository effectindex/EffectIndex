<template>
  <div 
    class="reportList__item"
    @click="gotoReport(report.slug)">
    <div class="infoContainer">
      <h4> {{ report.title }} </h4> 
      <span
        v-show="report.subject.trip_date"
        class="reportTripDate">
        on {{ report.subject.trip_date }} <br>
      </span>
      <span 
        v-if="!profileName" 
        class="author"> by {{ report.subject.name }} </span>
      <span
        v-else
        class="author">
        by <a
          :to="`/profiles/${profileName}`"
          @click.stop="gotoProfile(report.subject.name)"> {{ report.subject.name }} </a>
      </span>
    </div>
    <div class="substancesContainer">
      <ul class="substancesList">
        <li
          v-for="(substance, index) in report.substances"
          :key="index"
          class="substancesListItem">
          <span class="substanceName"> {{ substance.name }} </span>
          <span class="substanceDose"> {{ ` - ${substance.dose} ${substance.roa}` }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  
  props: {
    report: {
      type: Object,
      default: () => {}
    },
    profileName: {
      type: String,
      default: undefined
    },
  },
  methods: {
    gotoReport(slug) {
      this.$router.push(`/reports/${slug}`);
    },
    gotoProfile(name) {
      this.$router.push(`/profiles/${name}`);
    }
  }
};
</script>

<style scoped>
  .reportList__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #CCC;
    padding: 0.75em;
    margin: 1em 0;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 2px 2px 4px #CCC;
    margin: 1em 0;
  }

  .reportList__item:hover {
    transform: scaleX(1.025) scaleY(1.025);
  }

  .reportList__item h4 {
    margin: 0;
    max-width: 400px;
    margin-right: 0.25em;

  }

  .reportTripDate {
    font-size: 16px;
  }

  .substancesContainer {
    width: 300px;
  }

  .substancesList {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #333;
  }
  
  .substanceName {
    letter-spacing: 1px;
    font-weight: bold;
    color: #444;
  }

  .author {
    font-size: 16px;
  }

  @media(max-width: 800px) {
    .infoContainer {
      margin-bottom: 1em;
    }
  }

</style>