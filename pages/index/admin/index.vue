<template>

<div class="pageContent admin">
    <h1> Administration </h1>
    <p> The place to do secret things when nobody's looking. </p>
    <div v-if="$auth.loggedIn">
        <ul>
        <li>
            <nuxt-link to="/blog/new"> Add a new blog entry </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/blog/"> Go to blog </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/admin/add-effect"> Add an effect </nuxt-link>
        </li>
        </ul>
    </div>
    <nuxt-link v-if="!$auth.loggedIn" to="/admin/login"> Log in </nuxt-link>
    <nuxt-link v-else to="/admin/logout"> Log out </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
</div>

</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style>
.admin {
    background-color: white;
    height: 100vh;
    padding: 2em;
}

.pageContent {
    padding-bottom: 50px;
    font-size: 18px;
  }

  .pageContent .categoryIcon {
    float: right;
    font-size: 35px;
    opacity: 0.6;
    margin: 0px 0px 15px 15px;
  }

  .pageContent p {
    font-family: Titillium Web;
    color: rgba(26, 26, 26, 0.7);
    font-weight: 400;
    line-height: 28.8px;
    margin: 0 0 1em 0;
  }

  .pageContent .bold {
    font-weight: bold;
  }

  .pageContent .underline {
    text-decoration: underline;
  }

  .pageContent a {
    color: #3d9991;
    text-decoration: none;
  }

  .pageContent a:hover {
    color: #27635d
  }

  .pageContent a[href^="http://"]:hover {
    text-decoration: underline;
  }

  .pageContent a[href^="https://"]:hover {
    text-decoration: underline;
  }

  .pageContent .blackButton {
      display: block;
      font-family: proxima-nova;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      width: 125px;
      text-align: center;
      text-decoration: none;
      color: white;
      background-color: #272727;
      opacity: 1;
      padding: 13px 15px;
      transition: opacity 100ms linear;
  }

  .pageContent .blackButton:hover {
      opacity: 0.8;
  }

  .pageContent h1 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .pageContent h3, .pageContent h4 {
      text-transform: uppercase;
      font-family: proxima-nova;
      font-size: 22px;
      letter-spacing: 2px;
      font-weight: 400;
      color: rgb(74, 74, 74);
      margin: 1em 0;
  }

  .pageContent ul {
    padding: 0;
    padding-left: 2em;
    color: #999;
    margin-bottom: 2em;
  }

  .pageContent h4 {
    font-size: 18px;
  }

  .pageContent hr {
    margin: 50px 0;
    border: 0;
    border-top: 1px solid #CCC;
  }
  
</style>