<template>
  <div class="pageContent">
    <h1>
      Approximate Frequency of Occurence Scale
      <Icon
        filename="percent.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      This rating scale serves as a tool for providing approximations of the likelihood that a given subjective effect will occur.
    </p>
    <p>
      It is primarily used within our substance documentation articles that can be found listed 
      <nuxt-link to="/substances/">
        here.
      </nuxt-link>
    </p>

    <ul>
      <li> <b>Rare</b> - At this frequency, the effect typically only occurs spontaneously for a small percentage of people. It may also never arise for many people, no matter how many times they use the substance. </li>
      <li> <b>Uncommon</b> - At this frequency, the effect will typically occur at some point over the course of multiple experiences, but will usually be absent more often than not. </li>
      <li> <b>Commmon</b> - At this frequency, the effect typically occurs for people during most of their experiences, but is often slightly inconsistent in its occurrence.</li>
      <li> <b>Frequent</b> - At this frequency, the effect typically occurs for most people during all of their experiences, to the extent that it is unusual if it does not happen.</li>
      <li> <b>Near-universal</b> - At this frequency, the effect typically occurs for the vast majority of people during their experiences. However, there is still always the possibility that it may not happen for certain individuals. </li>
    </ul>


    <hr>
    <h3>See Also</h3>
    <ul>
      <li>
        <nuxt-link to="/methodology/duration-terminology">
          Duration terminology
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/effects/">
          Subjective effect index
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/substances/">
          Substance index
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  head() {
    return {
      title: "Approximate Frequency of Occurence Scale"
    };
  }
};
</script>