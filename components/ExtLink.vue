<template>
    <a :href="href" target="_blank" rel="external">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: ['href']
    }
</script>