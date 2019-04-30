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

    <p> This a semi-private community which is not primarily for general conversation but instead aims to be a place of discussion and co-operation for progressing the field of formalised subjective effect documentation. For this reason, we tend to only invite people who are genuinely wanting to contribute to the project. This can include anyone from proofreaders, trip reporters, web developers, replicators, artists, and more.
    </p>

    <p> If you have an interest in contributing to and taking part in our communities various projects, please pm @josikinz#1066 and tell her why you are interested in this project. Thanks! 
    </p>

    <h3> Rules </h3>
    <ul class="rulesList">
      <li>You must be at least 18+ years old.</li>
      <li>Please be polite and reasonable.</li>
      <li>You may not discuss any drug sources.</li>
      <li>Keep specific topics within their relevant channels.</li>
    </ul>  
    <img
      height="350px"
      class="left"
      src="/indy_iphone_edited.png">  
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
