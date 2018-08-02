<template>
  <div>
    <i class="fa fa-child categoryIcon" />
    <p> Physical effects are subjective effects which directly affect part of a person's physical body. </p>
    <p> This page lists the physical effects which can occur under the influence of psychoactive compounds. It also further organizes these effects into subcategories based on their features and behavior. </p>
    <effect-list list-type="physical" />
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