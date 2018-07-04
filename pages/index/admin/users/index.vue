<template>
    <div class="pageContent">
        <h1> User Management </h1>
        <nuxt-link class="userManagement__link" to="/admin/users/list"> List Users </nuxt-link>
        <nuxt-link class="userManagement__link" to="/admin/users/invite"> Invite Users </nuxt-link>
        <nuxt-link class="userManagement__link" to="/admin/users/invitations"> Invitations </nuxt-link>
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

   label {
        display: block;
        margin: 1em 0;
        font-family: 'proxima-nova';
        text-transform: uppercase;
        letter-spacing: 1px;

    }

    input {
        font-family: 'Titillium Web';
        border: 1px solid #CCCCCC;
        padding: 0.5em 1em;
        font-size: 16px;
        width: 100%;
    }

    select {
        width: 20em;
        font-size: 16px;
        font-family: 'proxima-nova';
        padding: 0.5em 1em;
        border: 1px solid #CCCCCC;
    }

    button {
        font-family: 'proxima-nova';
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

    button:hover {
        opacity: 1;
    }

    .errorMessage {
        font-weight: bold;
        color: red;
    }

    .success {
        color: green;
    }

    thead {
        font-weight: bold;
    }

    td {
        min-width: 150px;
    }


</style>