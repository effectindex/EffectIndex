<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> 
      <Icon
        filename="user.svg"
        style="height: 1em; width: 1.2em; padding-right: 10px;"
      /> Context 
    </h2>
    <div class="report__infoBoxItemContainer">
      <div 
        v-for="property of filteredSubjectProperties"
        :key="property"
        class="report__infoBoxItem"
      >
        <template>
          <div class="label">
            {{ propertyLabel(property) }}:
          </div>
          <div class="value">
            {{ subject[property] }}
          </div>
        </template>
      </div>
      <div
        v-if="subject.pdf_url"
        class="tracker_pdf"
      >
        <ext-link :href="subject.pdf_url">
          Subjective Effect Tracker PDF
        </ext-link>
      </div>
    </div>
  </section>
</template>

<script>
import ExtLink from '@/components/ExtLink';
import Icon from '@/components/Icon';

export default {
  components: {
    ExtLink,
    Icon
  },
  props: {
    subject: {
      type: Object,
      default: () => ({})
    },
    profile: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    filteredSubjectProperties() {
      const order = ['name', 'trip_date', 'age', 'setting', 'gender', 'height', 'weight', 'medications'];

      return Object.keys(this.subject)
      .filter(key => key !== 'pdf_url' && this.subject[key] !== "")
      .sort((x, y) => order.indexOf(x) - order.indexOf(y));
    }
  },
  methods: {
    propertyLabel(property) {
      const properties = {
        name: 'Name',
        trip_date: 'Trip Date',
        age: 'Age',
        setting: 'Setting',
        gender: 'Gender',
        height: 'Height',
        weight: 'Weight',
        medications: 'Medications'
      };

      return properties[property];
    }
  },
};
</script>

<style scoped>

.report__infoBox a {
  color: #3d9991;
  text-decoration: none;
}

.report__infoBoxItem {
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
}

.report__infoBoxItem:nth-child(odd) {
  background-color: #f3f3f3;
}

.report__infoBoxItem .label {
  flex: 2;
  color: #333;
  font-weight: bold;
}

.report__infoBoxItem .value {
  flex: 5;
}

.tracker_pdf {
  font-size: 1.1em;
  padding: 5px 10px;
}

</style>