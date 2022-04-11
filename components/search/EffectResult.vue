<template>
  <div class="searchResult">
    <h3> 
      <nuxt-link :to="'/effects/' + effect.url">
        {{ effect.name }}
      </nuxt-link>
    </h3>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(effect.summary_raw)" />
    <tag
      v-for="(tag, index) in effect.tags"
      :key="index"
      :value="tag"
    />
  </div>
</template>

<script>
import Tag from "@/components/effects/Tag";

export default {
  components: {
    Tag
  },
  props: {
    effect: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>