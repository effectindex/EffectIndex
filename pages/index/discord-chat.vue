<template>
  <div class="pageContent">

    <h1> Discord Chat 
      <fa
        :icon="['fab', 'discord']"
        class="fa categoryIcon" />
    </h1>

    <iframe
      class="float"
      src="https://discordapp.com/widget?id=332288651394547712&amp;theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0" />

    <p> The official Effect Index community is hosted on Discord and may be joined <ext-link href="https://discord.gg/mNFMQpN"> here</ext-link>.
    </p>

    <p> This Discord community is used for the discussion of formalised Subjective Effect Documentation and replications of hallucinogenic experiences and effects. It also contains rooms for general discussion and voice chat.
    </p>

    <h3> Rules </h3>
    <ul class="rulesList">
      <li> You must be at least 18+ years old. </li>
      <li> You may not discuss any drug sources. </li>
      <li> You may not encourage dangerous behaviour, such as reckless drug use or self-harm. </li>
      <li> Do not be deliberately offensive or an edgelord. </li>
      <li> Keep specific topics within their relevant channels. </li>
    </ul>
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
      title: "Discord"
    };
  }
};
</script>

<style scoped>
.rulesList {
  color: black;
}

.float {
  float: right;
  margin-left: 2em;
}

@media (max-width: 500px) {
  .float {
    float: none;
    margin: 1em auto;
  }
}
</style>
