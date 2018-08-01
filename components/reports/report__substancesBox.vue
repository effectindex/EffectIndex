<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-cubes icon" /> Substances </h2>
    <table
      v-show="substances.length"
      class="report__infoBoxTable">

      <thead>
        <tr>
          <td> Name </td> <td> Dose </td> <td> RoA </td>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(substance, index) in substances"
          :key="index">
          <td> {{ substance.name }} </td> <td> {{ substance.dose }} </td> <td> {{ substance.roa }} </td>
        </tr>
      </tbody>

    </table>
  </section>
</template>

<script>
export default {
  props: {
    substances: {
      type: Array,
      default: () => []
    }
  }
};
</script>
