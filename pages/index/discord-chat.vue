<template>
  <div class="pageContent">

    <h1>Discord Chat
      <fa
        :icon="['fab', 'discord']"
        class="fa categoryIcon" />
    </h1>

    <iframe
      class="float"
      src="https://discordapp.com/widget?id=543908157165142037&theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0" />

    <p>The official Effect Index community is hosted on Discord and may be joined <ext-link href="https://discord.gg/VSm5bF7">here</ext-link>.
    </p>

    <p> This Discord community is used for the discussion of formalised Subjective Effect Documentation and replications of hallucinogenic experiences and effects.
    </p>

    <h3> Rules </h3>
    <ul class="rulesList">
      <li>You must be at least 18+ years old.</li>
      <li>Please be polite and reasonable.</li>
      <li>You may not discuss any drug sources.</li>
      <li>Keep specific topics within their relevant channels.</li>
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
