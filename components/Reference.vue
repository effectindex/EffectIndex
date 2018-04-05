<template>
    <sup class="reference" :id="'ref-' + to + (no ? '-' + no : '')"> <a :href="'#cite-' + to"> [{{text ? text : to}}] </a> </sup> 
</template>

<script>
    export default {
        props: ['to', 'no', 'text']
    }
</script>

<style>
    .reference:target {
        font-weight: bold;
    }
</style>