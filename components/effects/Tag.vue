<template>
    <div class="effectDescription__tag"> {{ value }} </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>

<style>
    .effectDescription__tag {
        position: relative;
        display: inline-block;
        color: white;
        top: 0;
        left: 0;
        background-color: #2E2E2E;
        padding-left: 10px;
        margin: 10px 10px 0 0;
        padding: 6px 12px;
        border-radius: 15px;
        cursor: pointer;
        opacity: 0.85;
        transition: all 0.2s;
    }

    .effectDescription__tag:hover {
        opacity: 1;
        box-shadow: 5px 5px 3px #AAA;
        top: -5px;
        left: -5px;
    }

</style>