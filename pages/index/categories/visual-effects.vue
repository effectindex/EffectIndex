<template>
  <div class="pageContent">
    <h1>
      Visual Effects
      <fa
        :icon="['far', 'eye']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Visual effects</b> are defined as any subjective effect which directly alters a person's sense of sight.
    </p>

    <p>
      This page lists the various visual effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Visual Effects"
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
