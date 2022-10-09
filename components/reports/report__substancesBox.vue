<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> 
      <Icon
        filename="capsules.svg"
        class="categoryIcon"
        style="height: 1em; width: 1.4em; padding-right: 10px;"
      /> Substances
    </h2>
    <div class="report__infoBoxTableContainer">
      <table
        v-show="substances.length"
        class="report__infoBoxTable"
      >
        <thead>
          <tr class="report__infoBoxTableHeader">
            <td> Name </td> <td> Dosage </td> <td> Route of Administration </td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(substance, index) in substances"
            :key="index"
          >
            <td class="report__infoBoxTableName">
              {{ substance.name }}
            </td>
            <td class="report__infoBoxTableDose">
              {{ substance.dose }}
            </td>
            <td class="report__infoBoxTableRoA">
              {{ substance.roa }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    substances: {
      type: Array,
      default: () => []
    }
  }
};
</script>
