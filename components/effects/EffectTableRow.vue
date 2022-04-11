<template>
  <tr>
    <td style="min-width: 300px">
      <nuxt-link :to="'/effects/' + effect.url">
        {{ effect.name }}
      </nuxt-link>
    </td>
    <td>
      <span 
        v-for="tag in effect.tags"
        :key="tag"
        class="effectTableRow__tagItem"
      > {{ tag }} </span>
    </td>
    <td class="effectTableRow__editButton">
      <nuxt-link :to="'/admin/effects/' + effect.url">
        <Icon
          class="effectTableRow__icon"
          filename="edit.svg"
          style="cursor: pointer;"
        />
      </nuxt-link>
    </td>
    <td>
      <a 
        style="cursor: pointer;"
        @click="deleteEffect(effect._id)"
      >
        <Icon
          class="effectTableRow__icon"
          filename="times.svg"
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

.effectTableRow__icon {
  height: 1em;
  width: 1em;
  opacity: 0.75;
}

.effectTableRow__icon:hover {
  opacity: 1;
}
</style>