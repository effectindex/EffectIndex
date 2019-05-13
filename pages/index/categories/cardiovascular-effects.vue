<template>
  <div class="pageContent">
    <h1>
      Cardiovascular Effects
      <fa
        :icon="['far', 'frown']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Cardiovascular effects</b> are defined as any uncomfortable physical effect which relates to the heart and blood vessels.
    </p>

    <p>
      This page lists the various cardiovascular effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cardiovascular Effectss"
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
