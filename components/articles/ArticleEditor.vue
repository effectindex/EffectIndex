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
      <h2> Body Type </h2>
      <TypeSelector 
        v-model="type" 
        class="articleEditor__typeSelector"
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

h2 {
  display: block;
  font-weight: normal;
  font-size: 20px;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0.25em 0;
  margin-top: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.articleEditor__typeSelector {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 25px;
}
</style>