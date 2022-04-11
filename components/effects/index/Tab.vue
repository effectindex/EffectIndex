<template>
  <div class="tab">
    <div class="mask" />
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.mask {
  position: absolute;
  top: 0px;
  left: -1px;
  width: calc(100% + 2px);
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 275px);
  z-index: 2;
}

.tab {
  position: relative;
  border: 1px solid #DDD;
  border-bottom: 0;
  padding: 0.5em 0 0.25em 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 500px) {
  .tab {
    padding: 0;
    border: 0;
  }

  .mask {
    display: none;
  }
}


</style>
