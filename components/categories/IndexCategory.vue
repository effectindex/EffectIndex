<template>
  <div class="indexCategory">
    <h4>
      <nuxt-link :to="`/categories/${page}`">
        {{ name }}
      </nuxt-link>
      <Icon
        v-if="icon"
        :filename="icon"
      />
    </h4>
    <p> {{ description }} </p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    page: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>
.icon {
  height: 1em;
  width: 1em;
  opacity: 0.6;
}

.indexCategory {
  padding: 15px 5px;
}

.indexCategory h4 {
  display: flex;
  margin: 0 0 10px 0;
  justify-content: space-between;
}

.indexCategory p {
  margin-bottom: 0;
}

</style>