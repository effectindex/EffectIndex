<template>
  <div class="pageContent">
    <h1>
      Donate
      <Icon
        filename="heart.svg"
        class="categoryIcon"
      />
    </h1>

    <img
      class="float"
      height="350px"
      src="/ei-donate.png"
    >

    <p>
      If you would be interested in contributing to the Effect Index project we have a number of donation options available. The funds will be used for hosting costs and enable us to devote more of our time to Subjective Effect Documentation.
    </p>
    <p>
      Any contribution is greatly appreciated!
    </p>

    <h3> Options </h3>
    <ul>
      <li>
        <b>Patreon</b> - <ext-link href="http://patreon.com/effectindex">
          Effect Index Patreon
        </ext-link>
      </li>
      <li>
        <b>TeeSpring</b> - <ext-link href="https://teespring.com/stores/effectindex">
          Merchandise Store
        </ext-link>
      </li>
      <li> <b>Paypal</b> - effectindex@gmail.com </li>
      <li> <b>Bitcoin</b> - 1DvGTSLskP7eYB4t1Mi7KvV56rPEmSg9WT </li>
    </ul>
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
      title: "Donate"
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
