<template>
  <div class="pageContent">
    <h1>
      Visual Enhancements
      <fa
        :icon="['far', 'arrow-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Visual enhancements</b> are defined as any subjective effect which improves one's ability to perceive the external environment through their sense of sight.
    </p>

    <p>
      This page lists the various visual enhancements which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Visual Enhancements"
    };
  }
};
</script>

<style scoped>
.float {
  float: right;
}

.text-centered {
  text-align: center;
}

@media (max-width: 500px) {
  .float {
    float: none;
    margin: 1em auto;
  }
}
</style>
