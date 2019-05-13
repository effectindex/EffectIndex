<template>
  <div class="pageContent">
    <h1>
      Cognitive Enhancements
      <fa
        :icon="['far', 'arrow-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Cognitive enhancements</b> are defined as any subjective effect which increases or raises the intensity of a facet of a person's cognition.
    </p>

    <p>
      This page lists the various cognitive enhancements which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cognitive Enhancements"
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
