<template>
    <div class="headerNav__menuItem">
        <a class="headerNav__menuItemLink" :href="location"> {{ name }} </a>
        <ul v-if="subMenuItems" class="headerNav__dropdown">
            <li v-for="(item, index) in subMenuItems" :key="index">
                <a v-if="item.external" target="_blank" :href="item.location"> {{item.name}} </a>
                <nuxt-link v-else :to="item.location"> {{ item.name }} </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: ['location', 'name', 'subMenuItems']
    }
</script>

<style>
    .headerNav__menuItem {
        position: relative;
        line-height: 32.5px;
        align-self: center;
        transition: color 0.5s ease;
        margin: 0 1em;
    }

    .headerNav__menuItem a {
        color: #CCC;
        font-weight: 300;
        padding: 10px 0;
        letter-spacing: 2px;
        text-decoration: none;
        transition: color ease-in-out 0.15s;
        text-decoration: none;
        text-transform: uppercase;
    }

    .headerNav__menuItem:hover > a {
        color: #FFF;
    }

    .headerNav__menuItem:hover ul {
        max-height: 200px;
    }
    
    .headerNav__menuItem:hover li {
        opacity: 1;
    }

    .headerNav__dropdown {
        position: absolute;
        overflow: hidden;
        left: -20px;
        z-index: 1;
        list-style: none;
        padding: 1em 0 1em 0;
        max-height: 0;
        background-color: #2e2e2e;
        transition: max-height .15s ease-out;
    }

    .headerNav__dropdown > li {
        font-size: 13px;
        opacity: 0;
        transition: opacity 0.15s ease-in;
        text-transform: uppercase;
        line-height: normal;
        font-family: proxima-nova;
        padding: 5px 20px;
        margin: 0;
        font-weight: bold;
    }

    .headerNav__dropdown > li > a:hover {
        color: #FFF;
    }

</style>