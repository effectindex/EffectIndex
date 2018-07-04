<template>
  <div :class="'navbarPullout ' + ($store.state.navbar_pullout ? 'active' : '')">
    <div class="navbarPullout__menu">
        <ul v-for="(item, name) in $store.state.navigation" :key="name">
            <pullout-item v-if="checkAccess(item)" :name="name" :location="item.location" :children="item.children" />
        </ul>
        <donate-button style="margin-top: 1.5em; margin-left: 40px;" />
    </div>
  </div>
</template>

<script>
import DonateButton from '@/components/header/headerNav__donateButton';
import PulloutItem from './pulloutMenu__item.vue';

export default {
    components: {
        DonateButton,
        PulloutItem
    },
    methods: {
        checkAccess(item) {
            if (item.restricted) {
                if (this.$auth.loggedIn) return true;
                else return false;
            } else return true;
        }
    }
}
</script>

<style>
    .navbarPullout {
        z-index: 2;
        position: absolute;
        font-size: 14px;
        letter-spacing: 1px;
        top: 0;
        right: 0;
        width: 220px;
        height: 100%;
        background-color: #2e2e2e;
    }

    .navbarPullout__menu {
        padding: 20px 0;
    }

    .navbarPullout__menu > ul {
        text-transform: uppercase;
        margin-top: 8px;
        list-style: none;
    }

</style>