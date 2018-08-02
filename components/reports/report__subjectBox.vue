<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-user-o icon" /> Subject </h2>
    <div class="report__infoBoxTableContainer">
      <table class="report__infoBoxTable">
        <tbody>
          <tr v-show="subject.name">
            <td class="label"> Name: </td> <td class="text"> {{ subject.name }} </td>
          </tr>
          <tr v-show="subject.trip_date">
            <td class="label"> Trip Date: </td> <td class="text"> {{ subject.trip_date }} </td> 
          </tr>
          <tr v-show="subject.age"> 
            <td class="label"> Age: </td> <td class="text"> {{ subject.age }} </td>
          </tr>
          <tr v-show="subject.location">
            <td class="label"> Location: </td> <td class="text">  {{ subject.location }} </td> 
          </tr>
          <tr v-show="subject.gender">
            <td class="label"> Gender: </td> <td class="text"> {{ subject.gender }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    subject: {
      type: Object,
      default: () => {}
    }
  },
};
</script>

<style scoped>

.label {
  font-weight: bold;
  vertical-align: top;
  white-space: pre;
  padding-right: 1em;
}

</style>