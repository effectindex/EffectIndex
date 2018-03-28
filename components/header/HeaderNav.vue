<template>
    <header class="navbar">
        <a href="/"> <img class="navbar__logo" src="/logo.png" /> </a>
        <main-navigation />
    </header>
</template>

<script>
    import MainNavigation from '@/components/header/headerNav__mainNavigation';

    export default {
        components: {
            MainNavigation
        }
    }
</script>

<style>

    .navbar {
        display: flex;
        background-color: #2e2e2e;
        width: 100%;
        height: 87px;
        padding: 20px;
        flex-direction: row;
    }

    .navbar__logo {
        align-self: left;
    }

</style>