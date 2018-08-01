<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-user-o icon" /> Subject </h2>
    <ul class="report__infoBoxList">
      <li v-show="subject.name"> <label> Name: </label> {{ subject.name }} </li>
      <li v-show="subject.trip_date"> <label> Trip Date: </label> {{ subject.trip_date }} </li>
      <li v-show="subject.age"> <label> Age: </label> {{ subject.age }} </li>
      <li v-show="subject.location"> <label> Location: </label> {{ subject.location }} </li>
      <li v-show="subject.gender"> <label> Gender: </label> {{ subject.gender }} </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    subject: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
