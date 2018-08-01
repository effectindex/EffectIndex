<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-cubes icon" /> Substances </h2>
    <div class="report__infoBoxTableContainer">
      <table
        v-show="substances.length"
        class="report__infoBoxTable">

        <thead>
          <tr class="report__infoBoxTableHeader">
            <td> Name </td> <td> Dose </td> <td> RoA </td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(substance, index) in substances"
            :key="index">
            <td class="report__infoBoxTableName"> {{ substance.name }} </td>
            <td class="report__infoBoxTableDose"> {{ substance.dose }} </td>
            <td class="report__infoBoxTableRoA"> {{ substance.roa }} </td>
          </tr>
        </tbody>

      </table>
    </div>
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
