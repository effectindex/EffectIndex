<template>
  <div class="category">
    <div class="titleContainer">
      <Icon
        :filename="icon"
        style="height: 35px; width: 35px;"
      />
      <h2> {{ name }} </h2>
    </div>
    <ul
      class="effectList"
    >
      <li
        v-for="effect in effects"
        :key="effect._id"
      >
        <nuxt-link
          :to="`/effects/${effect.url}`"
          class="effect"
        >
          {{ effect.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    effects: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: 'Name'
    },
    icon: {
      type: String,
      default: 'eye.svg'
    }
  }
};
</script>