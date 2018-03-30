<template>
    <div @mousedown="toggleHamburger()" class="hamburger">
        <div :class="'closed ' + (active ? 'inactive' : 'active')">
            <span class="patty" />
            <span class="patty" />
            <span class="patty" />
        </div>        
        <div :class="'open ' + (active ? 'active' : 'inactive')">
            <span class="patty" />
            <span class="patty" />
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleHamburger: function() {
                this.$store.commit('toggle_navbar');
            }
        },
        props: ['active']
    }
</script>

<style scoped>
    .hamburger {
        position: relative;
        display: none;
        align-self: center;
        margin: -25px 30px 0 0px;
        cursor: pointer;
    }

    .hamburger > div {
        position: absolute;
        transition: opacity .25s ease;
        height: 25px;
        width: 25px;
    }

    .patty {
        display: block;
        border-radius: 10px;
        margin: 0 auto 5px auto;
        height: 3px;
        width: 25px;
        background-color: white;
        transition: opacity 0.25s ease;
    }

    .inactive .patty {
        opacity: 0;
    }

    .open {
        position: relative;
    }

    .open .patty {
        position: absolute;
        top: 8px;
    }

    .open .patty:nth-child(1) {
        transform: rotate(45deg);
    }
    .open .patty:nth-child(2) {
        transform: rotate(-45deg);
    }

    @media (max-width: 1000px) {
        .hamburger {
            display: block;
        }
    }
</style>