<template>
  <div class="pageContent userManagement">
    <h1> User Management </h1>
    <nuxt-link 
      class="userManagement__link"
      to="/admin/users/list"
    >
      List Users
    </nuxt-link>
    <nuxt-link 
      class="userManagement__link"
      to="/admin/users/invite"
    >
      Invite Users
    </nuxt-link>
    <nuxt-link 
      class="userManagement__link"
      to="/admin/users/invitations"
    >
      Invitations
    </nuxt-link>
    <nuxt-link 
      class="userManagement__link"
      to="/admin/users/profiles/"
    >
      List Profiles
    </nuxt-link>
    <nuxt-link 
      class="userManagement__link" 
      to="/admin/users/profiles/add"
    >
      Add Profile
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    head() {
      return {
        title: "Modify Users"
      };
    }
  };
</script>

<style>
  .userManagement__link
  {
      display: inline-block;
      padding: 0.25em;
      margin-right: 1em;
  }

  .userManagement label {
      display: block;
      margin: 1em 0;
      font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;

  }

  .userManagement input {
      font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      border: 1px solid #CCCCCC;
      padding: 0.5em 1em;
      font-size: 16px;
      width: 100%;
  }

  .userManagement input[type=checkbox] {
      width: auto;
  }

  .userManagement input[type=radio] {
      width: auto;
      margin-left: 0 1em;
  }

  .userManagement select {
      width: 20em;
      font-size: 16px;
      font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      padding: 0.5em 1em;
      border: 1px solid #CCCCCC;
  }

  .userManagement button {
      font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      display: inline-block;
      font-size: 16px;
      background-color: transparent;
      transition: opacity 0.25s ease;
      border: 1px solid #CCC;
      width: 100px;
      padding: 1em;
      margin: 1em 1em 0 0;
      opacity: 0.6;
      cursor: pointer;
  }

  .userManagement textarea {
      font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      border: 1px solid #CCCCCC;
      padding: 0.5em 1em;
      font-size: 16px;
      height: 400px;
      width: 100%;     
  }

  .userManagement button:hover {
      opacity: 1;
  }

  .userManagement .errorMessage {
      font-weight: bold;
      color: red;
  }

  .userManagement .success {
      color: green;
  }

  .userManagement thead {
      font-weight: bold;
  }

  .userManagement td {
      min-width: 150px;
  }

  .nuxt-link-exact-active {
    text-decoration: underline;
  }
</style>