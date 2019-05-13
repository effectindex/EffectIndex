<template>
  <div class="pageContent">
    <h1>
      Physical Suppressions
      <fa
        :icon="['far', 'arrow-down']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Physical suppressions</b> are defined as any subjective effect which decreases or reduces a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical suppressions which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Physical Suppressions"
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
