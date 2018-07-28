<template>
  <tr>
    <td style="min-width: 300px">
      <nuxt-link :to="'/effects/' + effect.url"> {{ effect.name }} </nuxt-link>
    </td>
    <td>
      <span 
        v-for="tag in effect.tags"
        :key="tag"
        class="effectTableRow__tagItem"> {{ tag }} </span>
    </td>
    <td class="effectTableRow__editButton">
      <nuxt-link :to="'/admin/effects/' + effect.url"> <i class="fa fa-edit" /> </nuxt-link>
    </td>
    <td>
      <a 
        style="color: red; cursor: pointer;"
        @click="deleteEffect(effect._id)"> <i class="fa fa-times" /> </a>
    </td>
  </tr>
</template>

<script>
import ExtLink from "@/components/ExtLink.vue";

export default {
  components: {
    ExtLink
  },
  props: {
    effect: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    deleteEffect(id) {
      this.$emit("deleteEffect", id);
    }
  }
};
</script>

<style>
.effectTableRow__tagItem {
  display: inline-block;
  font-size: 14px;
  color: #555;
  background-color: #f5f5f5;
  border: 1px dotted #ccc;
  margin: 0 2.5px;
  padding: 3px;
  border-radius: 10px;
}

.effectTableRow__editButton {
  padding-right: 1em;
}
</style>