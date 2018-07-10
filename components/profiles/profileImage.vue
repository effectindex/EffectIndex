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
    text-align: center;
}

.profileImage img {
    max-width: 350px;
    max-height: 500px;
}
</style>