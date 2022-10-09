<template>
  <div class="pageContent">
    <h1>
      Duration Terminology
      <Icon
        filename="clock.svg"
        class="categoryIcon"
      /> 
    </h1>

    <p>
      The term <b>duration</b> refers to the length of time over which the subjective effects of a psychoactive compound manifest themselves. This can be further broken down into five distinct phases which are described and documented below: 
    </p>

    <ul>
      <li> <b>Total</b> - The total duration of a substance can be defined as the amount of time it takes for the drug’s effects to completely wear off into sobriety. </li>
      <li> <b>Onset</b> - The onset of action is defined as the period of time until the first noticeable changes in perception become apparent. </li>
      <li> <b>Come up</b> - The “come up” is defined as the period between the first noticeable changes in perception and highest intensity of subjective effects. This is colloquially known as “coming up.” </li>
      <li> <b>Peak</b> - The peak can be defined as the height of intensity for the substance’s effects. </li>
      <li> <b>Offset</b> - The offset can be defined as the amount of time between feeling the full effects and coming down into sobriety. This is colloquially known as “coming down.” </li>
      <li> <b>After effects</b> - The after effects can be defined as any residue effects which may last after the experience itself. This is colloquially known as a “hangover” or an “afterglow” depending on the substance. </li>
    </ul>


    <hr>
    <h3>See Also</h3>
    <ul>
      <li>
        <nuxt-link to="/methodology/approximate-frequency-of-occurence-scale">
          Approximate frequency of occurence scale
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/effects/">
          Subjective Effect Index
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/articles/">
          Articles
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
      title: "Duration terminology"
    };
  }
};
</script>
