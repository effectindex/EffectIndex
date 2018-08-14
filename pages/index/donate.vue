<template>
  <div class="pageContent">

    <h1> Donate
      <fa
        :icon="['far', 'heart']"
        class="categoryIcon" /> </h1>

    <p> If you would be interested in contributing to the Effect Index project we have a number of donation options available. The funds will be used for hosting costs and enable us to devote more of our time to Subjective Effect Documentation. Any contribution is greatly appreciated!
    </p>

    <h3> Options </h3>
    <ul>
      <li> <b>Patreon</b> - <ext-link href="http://patreon.com/effectindex">Effect Index Patreon</ext-link> </li>
      <li> <b>Paypal</b> - effectindex@gmail.com </li>
      <li> <b>Bitcoin</b> - 1DvGTSLskP7eYB4t1Mi7KvV56rPEmSg9WT </li>
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
      title: "Donate"
    };
  }
};
</script>
