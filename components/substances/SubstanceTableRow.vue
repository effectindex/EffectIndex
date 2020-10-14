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
        <Icon
          filename="edit.svg"
          style="cursor: pointer; height: 1em; width: 1em;"
        />
      </nuxt-link>
    </td>
    <td>
      <a
        @click="deleteSubstance(substance._id)"
      >
        <Icon
          filename="times.svg"
          style="cursor: pointer; height: 1em; width: 1em;"
          color="red"
        />
      </a>
    </td>
  </tr>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
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

<style scoped>
.icon {
  height: 1em;
  width: 1em;
}

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
  padding-left: 1em;
  padding-right: 0.5em;
}
</style>
