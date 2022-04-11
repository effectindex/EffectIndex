<template>
  <div class="errorPageContainer">
    <div
      v-if="error.statusCode === 404"
      class="errorMessageContainer"
    >
      <div style="">
        <h1> 404 </h1>
        <p> {{ error.message ? error.message : "" }} </p>
      </div>
    </div>
    <div
      v-else-if="error.statusCode === 401"
      class="errorMessageContainer"
    >
      <h1> 401 </h1>
      <p> You're not allowed everywhere. </p>
    </div>
    <div v-else>
      <h1> Uh oh. </h1>
      <p> Something bad happened. </p>
    </div>
    <div class="backContainer">
      <img
        src="../static/error.png"
        style="height: 350px;"
        alt="Indy, the Effect Index mascot, looking concerned."
      >
      <p>
        <nuxt-link to="/">
          Return to Effect Index
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Error],
      default: undefined
    }
  },
  layout: "blog" // you can set a custom layout for the error page
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

p {
  color: #666;
  font-style: italic;
}

p a {
  color: #3d9991;
  font-style: normal;
}

h1 {
  color: #404040;

  font-size: 80px;
}

.errorPageContainer {
  background-color: white;
  height: 100vh;
  text-align: center;
}

.backContainer {
  margin-top: 25px;
}

.errorMessageContainer {
  padding-top: 3em;
}
</style>