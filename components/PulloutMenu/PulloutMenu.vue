<template>
  <div :class="'navbarPullout ' + ($store.state.navbar_pullout ? 'active' : '')">
    <ul>
        <ol v-for="(item, name) in $store.state.navigation" :key="name">
            <pullout-item :name="name" :location="item.location" :children="item.children" />
        </ol>
        <ol> <donate-button style="margin-top: 1.5em;" /> </ol>
    </ul>
  </div>
</template>

<script>
import DonateButton from '@/components/header/headerNav__donateButton';
import PulloutItem from './pulloutMenu__item.vue';

export default {
    components: {
        DonateButton,
        PulloutItem
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
    color: white;
    width: 260px;
    height: 100%;
    background-color: #2e2e2e;
    }

    .navbarPullout > ul {
        padding: 20px 0;
    }

    .navbarPullout > ul > ol {
        text-transform: uppercase;
        margin-top: 8px;
    }

    a {
        text-decoration: none;
        color: white;
        user-select: none;
    }

</style>