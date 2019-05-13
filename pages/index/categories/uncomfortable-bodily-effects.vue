<template>
  <div class="pageContent">
    <h1>
      Uncomfortable Bodily Effects
      <fa
        :icon="['far', 'brain']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Uncomfortable bodily effects</b> are defined as any uncomfortable physical effect which relates to the overall body and cannot be categorized as cardiovascular or cerebrovascular.
    </p>

    <p>
      This page lists the various uncomfortable bodily effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Uncomfortable Bodily Effects"
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
