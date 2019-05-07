<template>
  <div class="pageContent">

    <h1> PsySim     
      <fa
        :icon="['far', 'heart']"
        class="fa categoryIcon" /> </h1>

    <img
      class="float"
      height="296px"
      src="/psysim.png">


    <p> This open source software, created by Zenx2, was designed using a combination of fractal based mathematics, psychedelic artwork, and extensive experience with hallucinogenic compounds. It attempts to simulate or replicate the various types of complex geometry and hallucinatory imagery which is typically experienced under the influence of high dose psychedelics.
    </p>

    <p class="text-centered"> <ext-link href="https://www.dropbox.com/sh/8bzeizj8h1ytbmf/AABSEpT9Y9XYidYyV24AJkvha?dl=0">CLICK HERE TO DOWNLOAD</ext-link>
    </p>

    <p> For more information please visit the following links:
    </p>

    <ul>
      <li> <ext-link href="/effects/geometry">Geometry</ext-link> </li>
      <li> <ext-link href="/effects/internal-hallucination">Internal hallucinations</ext-link> </li>
      <li> <ext-link href="/summaries/psychedelics/visual">Visual effects of psychedelics</ext-link> </li>
    </ul>

  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
  head() {
    return {
      title: "PsySim"
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
