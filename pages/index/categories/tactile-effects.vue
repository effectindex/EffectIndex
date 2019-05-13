<template>
  <div class="pageContent">
    <h1>
      Tactile Effects
      <fa
        :icon="['far', 'hand-paper']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Tactile effects</b> are defined as any subjective effect which directly alters a person's sense of touch.
    </p>

    <p>
      This page lists the various tactile effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tactile Effects"
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
