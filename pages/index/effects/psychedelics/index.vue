<template>
  <div class="pageContent">
    <div>
      <fa
        :icon="['far', 'unlink']"
        class="fa categoryIcon" />
      <h1> Psychedelic Effects </h1>
      <captioned-image
        src="/img/gallery/In_the_tree_by_Eddie_calz.jpg"
        float="right"
        title="In the Tree"
        artist="Eddie Calz"
        top="true" />
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisi et nibh auctor ornare id sed ipsum. Morbi iaculis convallis libero. Vestibulum imperdiet lacus nisl. Aliquam quis nibh eu erat egestas bibendum eget ut lacus. Nullam at ligula gravida, ultrices nisi molestie, tincidunt neque. Donec suscipit elit a metus interdum pellentesque. In quam nisl, volutpat nec porttitor tristique, facilisis vitae tellus. Nunc interdum ullamcorper odio, laoreet mattis nunc vehicula sit amet. Nullam nec ultrices purus, nec accumsan neque. Sed venenatis varius diam, vel ullamcorper purus sagittis vel. Nulla ac libero eget velit egestas condimentum eu sit amet dui. Vivamus ante risus, commodo eu lobortis a, facilisis nec purus. Donec molestie magna velit. Morbi gravida dolor id urna semper, sagittis gravida lectus malesuada. </p>
      <p> Nullam convallis, nibh at auctor suscipit, orci felis laoreet dui, sed pretium metus tortor a nibh. Vestibulum porta gravida ex ullamcorper mollis. Mauris aliquam, mi eu viverra volutpat, nisl nulla hendrerit urna, id cursus sapien orci id mi. Aliquam at sollicitudin nulla. Etiam suscipit nunc quis euismod sollicitudin. Aliquam erat volutpat. Proin sed ullamcorper erat, non ultrices magna. Maecenas sodales tincidunt lacus non sollicitudin. In ut imperdiet tortor, eu scelerisque nisi. Praesent efficitur est vel ante mattis convallis vel nec est. Etiam lacinia eget leo a dictum.   </p>
    </div>
    <hr>
    <div class="effectsContainer">
      <h3> Visual Effects </h3>
      <long-summary 
        v-for="(effect, i) in filterEffectsByTag('psychedelic', 'visual')"
        :index="i"
        :effect="effect"
        :key="effect._id" />
    </div>
  </div>
</template>

<script>
import CaptionedImage from "@/components/CaptionedImage";
import LongSummary from "@/components/effects/LongSummary";

export default {
  components: {
    CaptionedImage,
    LongSummary
  },
  computed: {
    effects() {
      return this.$store.state.effects;
    }
  },
  methods: {
    filterEffectsByTag(...tags) {
      return this.effects.filter(effect =>
        tags.every(tag => effect.tags.indexOf(tag) > -1)
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("getEffects");
    await store.dispatch("getReplications");
  }
};
</script>

<style scoped>
  hr {
    clear: both;
  }
</style>