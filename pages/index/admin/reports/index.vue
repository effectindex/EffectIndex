<template>
  <div class="pageContent reportManagement">
    <h1> Report Management </h1>
    <nuxt-link 
      class="reportManagement__link"
      to="/admin/reports/list"
    >
      List Reports
    </nuxt-link>
    <nuxt-link 
      class="reportManagement__link"
      to="/admin/reports/add"
    >
      New Report
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        head() {
          return {
            title: "Modify Reports"
          };
        }
    };
</script>

<style>
  .reportManagement__link
  {
      display: inline-block;
      padding: 0.25em;
      margin-right: 1em;
  }

  .reportManagement label {
      display: block;
      margin: 1em 0;
      font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;

  }

  .reportManagement input {
      font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      border: 1px solid #CCCCCC;
      padding: 0.5em 1em;
      font-size: 16px;
      width: 100%;
  }

  .reportManagement input[type=checkbox] {
      width: auto;
  }

  .reportManagement input[type=radio] {
      width: auto;
      margin-left: 0 1em;
  }

  .reportManagement select {
      width: 20em;
      font-size: 16px;
      font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      padding: 0.5em 1em;
      border: 1px solid #CCCCCC;
  }

  .reportManagement button {
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

  .reportManagement textarea {
      font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
      border: 1px solid #CCCCCC;
      padding: 0.5em 1em;
      font-size: 16px;
      width: 100%;     
  }

  .reportManagement button:hover {
      opacity: 1;
  }

  .reportManagement .errorMessage {
      font-weight: bold;
      color: red;
  }

  .reportManagement .success {
      color: green;
  }

  .reportManagement thead {
      font-weight: bold;
  }

  .reportManagement td {
      min-width: 150px;
  }

  .nuxt-link-exact-active {
    text-decoration: underline;
  }

  .reportManagement .reportListTable {
    width: 100%;
  }
</style>