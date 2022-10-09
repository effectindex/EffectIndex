<template>
  <div class="pageContent">
    <h1>
      PsySim
      <Icon
        filename="eye.svg"
        class="categoryIcon"
      />
    </h1>

    <p>
      This open source software, created by
      <nuxt-link to="/profiles/Rho">
        Zenx2,
      </nuxt-link> was designed using a combination of fractal based mathematics, psychedelic artwork, and extensive experience with hallucinogenic compounds. It attempts to simulate or replicate the various types of complex geometry and hallucinatory imagery that is typically experienced under the influence of high dose psychedelics.
    </p>

    <p>
      It is worth noting that while the artist is credited for each replication
      wherever possible, if you would like your artwork removed or its link
      altered please do not hesitate to contact us at
      <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com </a>
    </p>

    <h3>
      <p class="text-centered">
        <ext-link
          href="https://effectindex.com/downloads/PsySim%20070119.zip"
        >
          <b>CLICK HERE TO DOWNLOAD</b>
        </ext-link>
      </p>
    </h3>

    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wVGT3UBu-0A"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </center>

    <h3>README:</h3>

    <p>
      To run the software, extract the .zip file into a folder and open
      "PsySim.jar". This software runs through Java, so please ensure that the
      latest version
      <ext-link 
        href="https://www.java.com/en/download/"
      >
        Java Runtime Environment
      </ext-link>
      (JRE) is installed.
    </p>

    <p>
      To configure the visualization so that it responds to audio input, attach
      a microphone, or (in Windows Sound settings) set the speaker as the
      microphone/input device.
    </p>

    <p>
      There are a variety of keyboard buttons which can control various aspects
      of PsySim. A complete list of these can be found below:
    </p>

    <ul class="rulesList">
      <li><b>S</b> - save screenshot</li>
      <li>
        <b>B</b> - activates/deactivates symmetry changing with the beat (off by
        default)
      </li>
      <li><b>Left arrow</b> - slow down time (can also reverse time)</li>
      <li><b>Right arrow</b> - accelerate time</li>
      <li><b>K</b> - reduce Tracers</li>
      <li><b>L</b> - increase Tracers</li>
      <li><b>Up arrow</b> - increase Music Reactivity Sensitivity</li>
      <li><b>Down arrow</b> - decrease Music Reactivity Sensitivity</li>
      <li><b>M</b> - toggle Using Microphone or Fake Reactivity</li>
      <li><b>N</b> - show Sound Spectrum</li>
      <li>
        <b>V</b> - toggle Rosette Symmetry or Droste Spiral (default Rosette)
      </li>
      <li>
        <b>C</b> - toggle Simple Mode (disables extra imagery, can increase
        performance)
      </li>
      <li><b>1-9</b> - sets Symmetry Mode</li>
    </ul>
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";
import Icon from '@/components/Icon';

export default {
  components: {
    ExtLink,
    Icon
  },
  head() {
    return {
      title: "PsySim",
    };
  },
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
