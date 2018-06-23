<template>
    <a :href="href" target="_blank" rel="noreferrer">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: ['href']
    }
</script>