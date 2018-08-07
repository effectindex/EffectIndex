<template>
  <footer>
    <div class="footer__social">
      <a href="http://reddit.com/r/replications">
        <img
          src="/sm-icon-reddit.svg"
          height="32"
          width="32">
      </a>
      <a href="https://www.youtube.com/channel/UCV5-ybqHFU6xQWhnFZBJlOA">
        <img
          src="/sm-icon-youtube.svg"
          height="32"
          width="32">
      </a>
      <a href="https://www.facebook.com/EffectIndex/">
        <img
          src="/sm-icon-facebook.svg"
          height="32"
          width="32">
      </a>
      <a href="https://github.com/Viscid/effectindex">
        <img
          src="/sm-icon-github.svg"
          height="32"
          width="32">
      </a>
    </div>
    <div class="footer__secret">
      <p> effectindex@gmail.com </p>
      <p class="footer__memorium"> In loving memory of Phillip Edmunds. </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1f1f1f;
  text-align: center;
  color: #666;
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
}

.footer__social {
  background-color: #2e2e2e;
  padding: 2em;
}

.footer__social img {
  margin: 0.3em;
}

.footer__secret {
  padding: 1em 0;
}

p {
  padding: 2em 0;
}

.footer__memorium {
  font-style: italic;
  color: #1f1f1f;
  padding: 0;
}

a {
  text-decoration: none;
  color: #666;
}
</style>