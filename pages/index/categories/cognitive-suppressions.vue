<template>
  <div class="pageContent">
    <h1>
      Cognitive Suppressions
      <fa
        :icon="['far', 'arrow-down']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Cognitive suppressions</b> are defined as any subjective effect which decreases or lowers the intensity of a facet of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive suppressions which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cognitive Suppressions"
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
