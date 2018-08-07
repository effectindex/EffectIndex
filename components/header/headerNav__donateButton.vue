<template>
  <nuxt-link
    class="headerNav__donateButton"
    to="/donate/"> Donate </nuxt-link>
</template>

<style scoped>
.headerNav__donateButton {
  display: block;
  border: 2px solid white;
  font-size: 13px;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;;
  padding: 0.75em 0;
  letter-spacing: 1px;
  border-radius: 50px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: background 100ms ease-in-out, color 100ms ease-in-out;
  text-transform: uppercase;
  align-self: center;
  z-index: 2;
}

.headerNav__donateButton:hover {
  background-color: white;
  color: black;
}
</style>