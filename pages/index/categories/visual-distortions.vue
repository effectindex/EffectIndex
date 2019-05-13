<template>
  <div class="pageContent">
    <h1>
      Visual Distortions
      <fa
        :icon="['far', 'exchange']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Visual distortions</b> are defined as any subjective effect which alters and changes the perception or appearance of pre-existing visual data without adding any entirely new content.
    </p>

    <p>
      This page lists the various visual distortions which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Visual Distortions"
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
