<template>
    <div></div>
</template>

<script>
export default {
    async mounted() {
        await this.$auth.logout();
    }
}

</script>