<template>
  <div class="pageContent">
    <h1>
      Auditory Effects
      <fa
        :icon="['far', 'volume-up']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Auditory effects</b> are defined as any subjective effect which directly alters a person's sense of hearing.
    </p>

    <p>
      This page lists the various auditory effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Auditory Effects"
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
