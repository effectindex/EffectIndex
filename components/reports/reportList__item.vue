<template>
  <nuxt-link 
    :to="`/reports/${report.slug}`"
    :class="`reportList__item ${report.featured ? 'featured' : ''}`"
    tabindex="0"
  >
    <div class="infoContainer">
      <div class="titleContainer">
        <h4> {{ report.title }} </h4>
        <span
          v-show="report.subject.trip_date"
          class="reportList__item--tripDate"
        >
          on {{ report.subject.trip_date }} 
        </span>
        <span class="reportList__item--author">-&nbsp;{{ report.subject.name }} </span>
      </div>
      <div class="featuredStarMobile">
        <Icon
          filename="star.svg"
          style="height: 30px; width: 30px; opacity: 0.65;"
        />
      </div>
    </div>
    <ul class="substancesList">
      <li
        v-for="(substance, index) in report.substances"
        :key="index"
        class="substancesListItem"
      >
        <span class="substanceName"> {{ substance.name }} </span> 
        <span class="substanceDose"> {{ `${substance.dose} ${substance.roa}` }} </span>
      </li>
    </ul>
    <div
      class="featuredStar"
    >
      <Icon
        filename="star.svg"
        style="height: 30px; width: 30px; opacity: 0.65;"
      />
    </div>     
  </nuxt-link>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon
  },
  props: {
    report: {
      type: Object,
      default: () => ({
        subject: {},
        substances: [],
        featured: false
      })
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

  .reportList__item--author {
    color: #777;
    font-style: italic;
  }

  .reportList__item--tripDate {
    color: #777;
  }

  .reportList__item {
    display: flex;
    position: relative;
    flex-direction: row;
    left: 0;
    top: 0;
    flex-wrap: wrap;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-bottom: 10px;
    border: 1px solid #D8D8D8;
    padding: 5px;
    background-color: #fbfbfb;
  }

  .reportList__item:hover h4 {
    color: #55cca2;
  }

  .reportList__item h4 {
    margin: 0;
    color: #333;
    text-transform:capitalize;
    font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    letter-spacing: 0px;
  }

  .infoContainer {
    display: flex;
    flex: 3;
    min-width: 250px;
    align-items: center;
  }

  .titleContainer {
    flex: 4;
    line-height: 1.5em;
    font-size: 11pt;
  }

  .featuredStar {
    margin: 0 10px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .featuredStar > .icon {
    display: none;
  }

  .featured .featuredStar > .icon {
    display: flex;
  }

  .featuredStarMobile {
    display: none;
    margin: 0 10px;
  }

  .titleContainer h4 {
    color: #3d9991;
  }

  .substancesList {
    flex: 1;
    list-style: none;
    margin: 0;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.15em 0;
    padding-left: 2em;
    border-left: 1px solid #DDD;
  }


  .substancesListItem {
    line-height: 1em;
    margin-bottom: 0.5em;
  }
  
  .substancesListItem:only-child, .substancesListItem:only-child {
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

  @media(max-width: 660px) {

    .reportList__item {
      flex-direction: column;
    }

    .infoContainer {
      padding-bottom: 0.25em;
    }

    .substancesList {
      padding-left: 0;
      border-left: 0;
      padding-top: 0.5em;
      border-top: 1px solid #D4D4D4;
    }

    .substanceName {
      font-size: 16px;
    }

    .featuredStar {
      display: none;
    }

    .featured .featuredStarMobile {
      display: flex;
    }

  }

</style>