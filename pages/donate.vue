<template>
  <div class="pageContent">
    <h1>
      Donate
      <Icon
        filename="heart.svg"
        class="categoryIcon"
      />
    </h1>

    <FrontpageArticle />
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
        <b>Patreon</b> - <ext-link href="https://www.patreon.com/JosieKins">
          Effect Index Patreon
        </ext-link>
      </li>
      <li>
        <b>TeeSpring</b> - <ext-link href="https://teespring.com/stores/effectindex">
          Merchandise Store
        </ext-link>
      </li>
      <li> <b>Paypal</b> - effectindex@gmail.com </li>
    </ul>

    <h3> Ethereum </h3>
    <div class="crypto-donation">
      <a
        href="https://etherscan.io/address/0xaaAcEF54d563CE7d3Cff5bE5cBeEcAbAf5816f78"
        target="_blank"
      >
        <img
          src="/eth_qrcode.png"
          width="132"
          height="132"
        >
      </a>
      <h2>
        <a
          href="https://etherscan.io/address/0xaaAcEF54d563CE7d3Cff5bE5cBeEcAbAf5816f78"
          target="_blank"
        >
          0xaaAcEF54d563CE7d3Cff5bE5cBeEcAbAf5816f78
        </a>
      </h2>
    </div>
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";
import Icon from '@/components/Icon';
import FrontpageArticle from "@/components/home/FrontpageArticle";

export default {
  components: {
    FrontpageArticle,
    ExtLink,
    Icon
  },
  async fetch ( { store } ) { await store.dispatch('articles/get'); },
  head() {
    return {
      title: "Donate"
    };
  },
};
</script>

<style scoped>
.float {
  float: right;
}

.text-centered {
  text-align: center;
}

.crypto-donation {
  display: flex;
  max-width: 300px;
  flex-direction: row;
  align-items: center;
  gap: 50px;

}

.crypto-donation h2 {
  font-size: 20px;
}

@media (max-width: 500px) {
  .float {
    float: none;
    margin: 1em auto;
  }
  .crypto-donation {
    padding: 1em;
    display: flex;
    max-width: none;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 25px;
  }
  .crypto-donation h2 {
    font-size: 16px;
  }
}


</style>
