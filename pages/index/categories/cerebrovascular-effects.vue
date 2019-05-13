<template>
  <div class="pageContent">
    <h1>
      Cerebrovascular Effects
      <fa
        :icon="['far', 'brain']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Cerebrovascular effects</b> are defined as any uncomfortable physical effect which relates to the brain and its blood vessels.
    </p>

    <p>
      This page lists the various cerebrovascular effects which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cerebrovascular Effectss"
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
