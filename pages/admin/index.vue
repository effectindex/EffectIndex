<template>
  <div class="pageContent">
    <h1> Misc Adminstration </h1>

    <ul class="admin-menu">
      <li>
        <nuxt-link to="/admin/redirects">
          Redirects
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/blog/">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/people">
          People
        </nuxt-link>
      </li>
    </ul>

    <hr>

    <nuxt-child />
  </div>
</template>

<style scoped>
.admin-menu {
  list-style: none;
  padding: 0;
}

.admin-menu li {
  display: inline-block;
  margin-right: 2em;
}
</style>