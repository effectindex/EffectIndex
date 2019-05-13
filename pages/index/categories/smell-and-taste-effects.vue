<template>
  <div class="pageContent">
    <h1>
      Smell and Taste effects
      <fa
        :icon="['far', 'utensils']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Smell and taste effects</b> are defined as any subjective effect which directly alters either a person's sense of smell or their sense of taste.
    </p>

    <p>
      This page lists the various smell and taste effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Smell and Taste Effects"
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
