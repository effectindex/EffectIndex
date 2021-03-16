<template>
  <div
    class="author"
  >
    <div class="authorImage">
      <gravatar :hash="author.gravatar_hash" />
    </div>
    <div class="nameContainer">
      {{ author.full_name }}
    </div>
  </div>
</template>

<script>
import Gravatar from '@/components/Gravatar';

export default {
  components: {
    Gravatar
  },
  props: {
    author: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #333;
  }

  .authorImage {
    margin-right: 10px;
    margin-top: 3px;
  }
</style>