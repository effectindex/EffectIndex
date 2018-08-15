<template>
  <div>
    <i class="fa fa-eye categoryIcon" />
    <p> <strong>Sensory effects</strong> are subjective experiences which directly alter a person's senses. These can include any combination of sight, sound, touch, taste, and smell.  </p>
    <p> This page lists the various sensory effects which can occur under the influence of psychoactive compounds. It also further organizes these effects into subcategories based on their features and behavior. </p>
    <effect-list list-type="sensory" />
  </div>
</template>

<script>
import EffectList from "@/components/EffectList/EffectList";

export default {
  components: {
    EffectList
  }
};
</script>