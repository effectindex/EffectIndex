<template>
  <div class="tag"> {{ value }} </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.tag {
  position: relative;
  display: inline-block;
  color: white;
  top: 0;
  left: 0;
  background-color: #2e2e2e;
  padding-left: 10px;
  margin: 10px 10px 0 0;
  padding: 6px 12px;
  border-radius: 15px;
  cursor: pointer;
  opacity: 0.85;
  transition: all 0.2s;
}

.tag:hover {
  opacity: 1;
  box-shadow: 2px 2px 4px #aaa;
  top: -2px;
  left: -2px;
}
</style>