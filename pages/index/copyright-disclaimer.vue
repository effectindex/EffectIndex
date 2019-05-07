<template>
  <div class="pageContent">

    <h1> Copyright Disclaimer
      <fa
        :icon="['far', 'copyright']"
        class="fa categoryIcon" /> </h1>

    <p> EffectIndex.com and its materials, including all indexing-related and written content, are available under the <ext-link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-ShareAlike License</ext-link> for non-commercial use. Additional terms may apply; contact <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com </a> for more information and commercial inquiries.
    </p>

    <p> All replications, multimedia, and non-SEI artwork belong to their original creators and are protected by international copyright laws. Artwork used without the creator's permission is reproduced at diminished quality and assumed to constitute "fair use" for educational and non-profit purposes. If you would like your artwork removed or reattributed, please contact <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com </a>
    </p>

  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
  head() {
    return {
      title: "Copyright disclaimer"
    };
  }
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
