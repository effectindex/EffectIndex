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
      This rating scale serves as a very approximate indication of the frequency of occurence that a subjective effect is likely to manifest at within the range of a specific dosage. It is primarily used within our substance documentation articles that can be found listed here.
    </p>

    <ul>
      <li> <b>Rare</b> - At this dosage, the effect typically only occurs spontaneously for a small percentage of people and may never arise for many people no matter how many times they use the substance. </li>
      <li> <b>Onset</b> - At this dosage, the effect typically occurs for people eventually over the course of multiple trips but will usually be absent from the experience more often than not. </li>
      <li> <b>Come up</b> - At this dosage, the effect typically occurs for people during most of their experiences with the substance but is often a little inconsistent in its occurence.</li>
      <li> <b>Peak</b> - At this dosage, the effect typically occurs for most people during all of their trips to the extent that it is unusual if it does not happen. </li>
      <li> <b>Offset</b> - The offset can be defined as the amount of time between feeling the full effects and coming down into sobriety. This is colloquially known as “coming down.” </li>
      <li> <b>After effects</b> - At this dosage, the effect typically occurs for all people during all trips although there is always the possibility that it may not happen for certain individuals. </li>
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