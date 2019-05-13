<template>
  <div class="pageContent">
    <h1>
      Physical Alterations
      <fa
        :icon="['far', 'cogs']"
        class="fa categoryIcon"
      /> 
    </h1>

    <p>
     <b>Physical alterations</b> are defined as any subjective effect which changes a facet of a person's physical body in a manner which does not involve a clearly definable enhancement or suppression.
    </p>

    <p>
      This page lists the various physical alterations which can occur under the influence of certain psychoactive compounds.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Physical Alterations"
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
