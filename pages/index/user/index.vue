<template>
  <div class="adminManagement">
    <nuxt-child />
  </div>
</template>

<style>
.adminManagement label {
  display: block;
  margin: 1em 0;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.adminManagement input {
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  border: 1px solid #cccccc;
  padding: 0.5em 1em;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
}

.adminManagement select {
  width: 20em;
  font-size: 16px;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 0.5em 1em;
  border: 1px solid #cccccc;
}

.adminManagement button {
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  display: inline-block;
  font-size: 16px;
  background-color: transparent;
  transition: opacity 0.25s ease;
  border: 1px solid #ccc;
  width: 100px;
  padding: 1em;
  margin: 1em 1em 0 0;
  opacity: 0.6;
  cursor: pointer;
}

.adminManagement button:hover {
  opacity: 1;
}

.adminManagement .errorMessage {
  font-weight: bold;
  color: red;
}

.adminManagement .success {
  color: green;
}
</style>