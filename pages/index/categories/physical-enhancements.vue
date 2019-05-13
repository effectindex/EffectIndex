<template>
  <div class="pageContent">
    <h1>
      Physical Enhancements
      <fa
        :icon="['far', 'arrow-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Physical enhancements</b> are defined as any subjective effect which increases or intensifies a facet of a person's physical body.
    </p>

    <p>
      This page lists the various physical enhancements which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Physical Enhancements"
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
