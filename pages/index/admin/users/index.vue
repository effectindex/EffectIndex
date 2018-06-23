<template>
    <div class="pageContent">
        <h1> User Management </h1>
        <nuxt-link class="userManagement__link" to="list"> List Users </nuxt-link>
        <nuxt-link class="userManagement__link" to="add"> Add a User </nuxt-link>
        <nuxt-child />
    </div>
</template>

<style>
    .userManagement__link
    {
        display: inline-block;
        padding: 0.25em;
        margin-right: 1em;
    }
</style>