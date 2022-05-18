<template>
  <div class="pageContent">
    <h1>
      Discord Chat
      <Icon
        filename="discord.svg"
        class="categoryIcon"
      />
    </h1>

    <iframe
      class="float"
      src="https://discordapp.com/widget?id=543908157165142037&theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0"
    />

    <p>
      The official Effect Index community is hosted on Discord and may be joined <ext-link href="https://discord.gg/VSm5bF7">
        here.
      </ext-link>
    </p>

    <p>
      This a semi-private community and is not primarily for general conversation; instead, it aims to be a place of discussion and co-operation for progressing the field of formalised subjective effect documentation. For this reason, we tend to only invite people who genuinely want to contribute to the project. This can include anyone from proofreaders, trip reporters, web developers, programmers, replicators, artists, and more.
    </p>

    <p>
      If you have an interest in contributing to and taking part in our community's various projects, please contact us within the public waiting room channel and tell us why you are interested in this project. Thanks!
    </p>

    <h3> Rules </h3>
    <ul class="rulesList">
      <li>You must be at least 18+ years old.</li>
      <li>Please be polite and reasonable.</li>
      <li>You may not discuss any drug sources. Not even in DMs.</li>
      <li>Keep specific topics within their relevant channels.</li>
      <li>This community is inclusive and does not accept any kind of racism, homophobia, sexism, transphobia, ableism, general hatefulness, etc, etc. </li>
      <li>This community is relatively Safe For Work (SFW), please do not post overtly sexual or edgy content. This includes hornyposting and excessive shitposting.</li>
    </ul>  
    <img
      height="350px"
      class="left"
      src="/indy_iphone_edited.png"
    >  
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";
import Icon from '@/components/Icon';

export default {
  components: {
    ExtLink,
    Icon
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
