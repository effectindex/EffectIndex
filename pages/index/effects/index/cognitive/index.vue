<template>
  <div>
    <i class="fa fa-user categoryIcon" />
    <p> <strong>Cognitive effects</strong> are subjective experiences which directly alter or introduce new content to an element of a person's cognition. </p>
    <p> This page lists the various cognitive effects which can occur under the influence of psychoactive compounds. It also organizes these effects into subcategories based on their features and behavior. </p>

    <effect-list list-type="cognitive" />
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