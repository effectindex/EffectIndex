<template>
    <header class="navbar">
        <nuxt-link to="/"> <img class="navbar__logo" src="/logo.svg" /> </nuxt-link>
        <main-navigation />
        <hamburger :active="$store.state.navbar_pullout" />
    </header>
</template>

<script>
    import MainNavigation from './headerNav__mainNavigation';
    import Hamburger from './headerNav__hamburgerButton';

    export default {
        components: {
            MainNavigation,
            Hamburger
        }
    }
</script>

<style>
    .navbar {
        display: flex;
        background-color: #2e2e2e;
        height: 87px;
        padding: 20px;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }

    .navbar__logo {
        align-self: center;
        height: 47px;
    }
</style>