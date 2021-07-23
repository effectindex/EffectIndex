<template>
  <div class="pageContent">
    <div v-if="person">
      <img
        v-show="person.profile_image"
        style="float: right;"
        :src="'/' + person.profile_image"
      >
      <h1> {{ person.full_name || person.alias }} </h1>
      <vcode
        v-if="person.bio && person.bio.parsed"
        :body="person.bio.parsed"
      />
    </div>
  </div>
</template>

<script>
import vcode from "@/components/vcode/vcode";

export default {
  components: {
    vcode
  },
  data() {
    return {
      person: undefined
    };
  },
  async fetch() {
    try {
      const profile_url = this.$route.params.url;
      const { person } = await this.$axios.$get(`/api/persons/${profile_url}`);
      this.person = person;
    } catch (error) {
      console.log(error);
    }
  }

};
</script>