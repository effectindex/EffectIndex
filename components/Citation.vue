<template>
    <sup> <a :href="'#' + to"> [{{text ? text : to}}] </a> </sup> 
</template>

<script>
    export default {
        props: ['to', 'text']
    }
</script>