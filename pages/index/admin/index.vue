<template>

<div class="pageContent admin">
    <i class="categoryIcon fa fa-trash-o fa-2x"></i>
    <h1> Administration </h1>
    <p> The place to do secret things when nobody's looking. </p>
    <div v-if="$auth.loggedIn">
        <h3> Effects </h3>
        <ul> 
          <li> <nuxt-link to="/effects/add"> Add an effect </nuxt-link> </li>
          <li> <nuxt-link to="/effects/list"> List all effects </nuxt-link> </li>
        </ul>
        <h3> Replications </h3>
        <ul> 
          <li> <nuxt-link to="/replications/add"> Add a replications </nuxt-link> </li>
          <li> <nuxt-link to="/replications/list"> List all replications </nuxt-link> </li>
        </ul>
        <h3> Blog </h3>
        <ul>
          <li> <nuxt-link to="/blog/new"> New Blog Entry </nuxt-link> </li>
          <li> <nuxt-link to="/blog"> See all Entries </nuxt-link> </li>
        </ul>         
    </div>
    <nuxt-link v-if="!$auth.loggedIn" to="/admin/login"> Log in </nuxt-link>
    <nuxt-link v-else to="/admin/logout"> Log out </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
</div>

</template>

<script>
export default {
    head () {
      return {
        title: "Admin – Effect Index",
      }
    },
  scrollToTop: true
}
</script>

<style scoped>
.admin {
    background-color: white;
    height: 100vh;
    padding: 2em;
}

ul {
  list-style: none;
}

p {
  font-style: italic;
  font-size: 0.9em;
}

  
</style>