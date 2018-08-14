<template>
  <div class="pageContent">

    <h1> Discord chat 
      <fa
        :icon="['far', 'heart']"
        class="categoryIcon" />
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
    <ul>
      <li>Do not discuss RC/drug sources</li>
      <li>Do not encourage dangerous behaviours, such as overly risky drug use or suicide</li>
      <li>Do not be a deliberately offensive or an edgelord</li>
      <li>Try to keep specific topics within their relevant channels</li>
      <li>Be at least 18+ years old</li>
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
.float {
  float: right;
}

@media (max-width: 500px) {
  .float {
    float: none;
    margin: 1em auto;
  }
}
</style>
