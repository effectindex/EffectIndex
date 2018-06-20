<template>
    <div class="tag"> {{ value }} </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>

<style>
    .tag {
        position: relative;
        display: inline-block;
        color: #555;
        top: 0;
        left: 0;
        background-color: #F5F5F5;
        padding-left: 10px;
        border: 1px dotted #CCC;
        margin: 10px 10px 0 0;
        padding: 7px;
        border-radius: 15px;
        cursor: pointer;
        opacity: 0.85;
        transition: top 0.2s, left 0.2s, opacity 0.2s;
    }

    .tag:hover {
        background-color: #EEE;
        opacity: 1;
        top: -5px;
        left: -5px;
    }

</style>