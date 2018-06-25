<template>
    <div class="pageContent">
        <h1> User Management </h1>
        <nuxt-link class="userManagement__link" to="/admin/users/list"> List Users </nuxt-link>
        <nuxt-link class="userManagement__link" to="/admin/users/add"> Add a User </nuxt-link>
        <nuxt-link class="userManagement__link" to="/admin/users/invite"> Invite Users </nuxt-link>
        <nuxt-child />
    </div>
</template>

<script>
    export default {
        middleware: ['auth']
    }
</script>

<style>
    .userManagement__link
    {
        display: inline-block;
        padding: 0.25em;
        margin-right: 1em;
    }
</style>