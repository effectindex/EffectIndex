<template><span v-html="$md.render(body)" /></template>

<script>
export default {
    props: ['body']
}
</script>