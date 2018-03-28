<template>
    <div class="headerNav__sectionItem">
        <a class="headerNav__sectionItemLink" :href="location"> {{ value }} </a>
    </div>
</template>

<script>

    export default {
        props: ['location', 'value']
    }
</script>

<style>
    .headerNav__sectionItem {
        height: 32.5px;
        line-height: 32.5px;
        opacity: 0.9;
        transition: opacity 0.5s ease;
        margin: 0 1em;
    }

    .headerNav__sectionItem:hover {
        opacity: 1;
    }

    .headerNav__sectionItemLink {
        text-decoration: none;
        text-transform: uppercase;
    }
</style>