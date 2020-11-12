<template>
  <div class="articleEditor">
    <h1> New Article </h1>

    <form>
      <input 
        v-model="title"
        type="text"
        placeholder="Title"
        class="articleEditor__titleInput"
      >
      <TypeSelector 
        v-model="type" 
      />
    </form>
  </div>
</template>

<script>
import TypeSelector from './TypeSelector';

export default {
  components: {
    TypeSelector
  },
  data () {
    return {
      title: undefined,
      type: undefined
    };
  }
};
</script>

<style scoped>

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 25px;
}
</style>