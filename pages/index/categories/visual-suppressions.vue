<template>
  <div class="pageContent">
    <h1>
      Visual Suppressions
      <fa
        :icon="['far', 'eye']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Visual suppressions</b> are defined as any subjective effect which decreases a person's ability to perceive the external environment through their sense of sight.
    </p>

    <p>
      This page lists the various visual suppressions which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Visual Suppressions"
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
