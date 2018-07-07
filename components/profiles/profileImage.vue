<template>
    <div class="profileImage">
        <img :src="'/img/profiles/' + filename" :alt="(username ? 'Profile image of ' + username : 'User profile image. ')" />
    </div>
</template>

<script>
export default {
    props: ['filename', 'username']
}
</script>

<style scoped>
.profileImage {
    padding: 0.5em;
}
</style>