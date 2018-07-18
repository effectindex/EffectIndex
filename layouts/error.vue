<template>
  <div class="container">
    <div 
      v-if="error.statusCode === 404"
      class="errorMessageContainer">
      <h1> 404 </h1>
      <p> {{ error.message ? error.message : "" }} </p>
      <p> You expected satisfaction, you obtained emptiness. </p>
    </div>
    <div 
      v-else-if="error.statusCode === 401"
      class="errorMessageContainer">
      <h1> 401 </h1>
      <p> You're not allowed everywhere. </p>
    </div>
    <div v-else>
      <h1> Uh oh. </h1>
      <p> Something bad happened. </p>
    </div>
    <div class="backContainer">
      <nuxt-link to="/">Return to the Effect Index</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: undefined
    }
  },
  layout: 'blog' // you can set a custom layout for the error page
};
</script>

<style>

a {
  text-decoration: none;
  color: black;
}

p {
  color: #666;
  font-style: italic;
}

h1 {
  font-size: 80px;
}

.container {
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