<template>
  <div 
    class="reportList__item"
    @click="gotoReport(report.slug)">
    <div class="infoContainer">
      <div style="line-height: 1.25em">
        <h4> {{ report.title }} </h4>
        <span
          v-show="report.subject.trip_date"
          class="reportTripDate">
          on {{ report.subject.trip_date }} 
        </span>
      
        <span 
          v-if="!profileName" 
          class="author"> by {{ report.subject.name }} </span>
        <span
          v-else
          class="author">
          -<a
            :to="`/profiles/${profileName}`"
            @click.stop="gotoProfile(report.subject.name)">&nbsp;{{ report.subject.name }} </a>
        </span>
      </div>
    </div>
    <ul class="substancesList">
      <li
        v-for="(substance, index) in report.substances"
        :key="index"
        class="substancesListItem">
        <span class="substanceName"> {{ substance.name }} </span> 
        <span class="substanceDose"> {{ `${substance.dose} ${substance.roa}` }} </span>
      </li>
    </ul>
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
    position: relative;
    flex-direction: row;
    left: 0;
    top: 0;
    flex-wrap: wrap;
    border: 1px solid #CCC;
    padding: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 2px 2px 4px #BBB;
    margin: 1em 0;
  }

  .reportList__item:hover {
    left: -5px;
    top: -5px;
    box-shadow: 5px 5px 4px #BBB;
  }

  .reportList__item h4 {
    margin: 0;
    color: #333;
    text-transform:capitalize;
    font-family: 'Titillium Web';
    font-size: 22px;
    letter-spacing: 0px;
  }

  .reportTripDate {
    font-size: 12pt;
  }

  .infoContainer {
    flex: 1;
    min-width: 250px;
  }

  .substancesList {
    list-style: none;
    margin: 0;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 350px;
    border-left: 1px solid #DDD;
  }


  .substancesListItem {
    line-height: 1em;
    margin-bottom: 0.5em;
  }
  
  .substancesListItem:first-child, .substancesListItem:last-child {
    margin-bottom: 0;
  }

  .substanceName {
    letter-spacing: 1px;
    display: block;
    color: #444;
  }

  .substanceDose {
    font-size: 0.8em;
    color: #777;
    text-transform: lowercase;
  }

  .author {
    font-size: 16px;
  }

  @media(max-width: 660px) {
    .infoContainer {
      margin-bottom: 1em;
    }

  .substancesList {
    min-width: 250px;
    border-left: none;
    padding-top: 1em;
    padding-left: 0;
  }

  }

</style>