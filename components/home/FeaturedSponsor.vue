<template>
  <Panel
    v-if="sponsorName"
    icon="heart.svg"
    :title="`Thank you ${sponsorName}!`"
    class="featuredSponsorPanel"
  >
    <template v-slot:content>
      <div class="featuredSponsor">
        <div v-if="sponsorIconPath && sponsorLink">
          <ext-link :href="sponsorLink">
            <img
              :src="sponsorIconPath"
              :alt="`${sponsorName} logo`"
              class="sponsorIcon"
            >
          </ext-link>
        </div>
      </div>
    </template>
    <template
      v-if="sponsorLink"
      v-slot:stub
    >
      Thank you to our wonderful sponsor,
      <ext-link :href="sponsorLink">
        {{ sponsorName }}
      </ext-link>
    </template>
  </Panel>
</template>

<script>
import Panel from '@/components/home/Panel';
import ExtLink from "@/components/ExtLink.vue";

export default {
  name: "FeaturedSponsor",
  components: {
    Panel,
    ExtLink
  },
  props: {
    sponsorName: {
      type: String,
      default: undefined
    },
    sponsorIconPath: {
      type: String,
      default: undefined
    },
    sponsorLink: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>

.sponsorIcon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.featuredSponsor {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

</style>
