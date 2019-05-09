<template>
  <tr>
    <td style="min-width: 300px">
      <nuxt-link :to="'/substances/' + substance.url">
        {{ substance.name }}
      </nuxt-link>
    </td>
    <td>
      <span
        v-for="tag in substance.tags"
        :key="tag"
        class="substanceTableRow__tagItem"
      > {{ tag }} </span>
    </td>
    <td class="substanceTableRow__editButton">
      <nuxt-link :to="'/admin/substances/' + substance.url">
        <fa
          :icon="['far', 'edit']"
          class="fa"
          style="cursor: pointer;"
        />
      </nuxt-link>
    </td>
    <td>
      <a
        style="color: red; cursor: pointer;"
        @click="deleteSubstance(substance._id)"
      >
        <fa
          :icon="['far', 'times']"
          class="fa"
          style="color: red; cursor: pointer;"
        />
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    substance: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    deleteSubstance(id) {
      this.$emit("deleteSubstance", id);
    }
  }
};
</script>

<style>
.substanceTableRow__tagItem {
  display: inline-block;
  font-size: 14px;
  color: #555;
  background-color: #f5f5f5;
  border: 1px dotted #ccc;
  margin: 0 2.5px;
  padding: 3px;
  border-radius: 10px;
}

.substanceTableRow__editButton {
  padding-right: 1em;
}
</style>
