<template>
    <div class="pageContent">
        <h1> People </h1>

        <p> This page lists the profiles of the Effect Index team and various dedicated individuals who have contributed significant amounts of work to this project. </p>

        <ul class="profileList">
            <li class="profileListItem" v-for="profile in profiles" :key="profile._id">
                <nuxt-link :to="'/profiles/' + profile.username"> 
                    <img class="profileImage" :src="'/img/profiles/cropped/' + profile.profileImageCropped" :alt="profile.username" />
                </nuxt-link>
                <span class="profile__username"> {{ profile.username }} </span>
            </li>
        </ul>

    </div>


</template>

<script>
export default {
    async asyncData(app) {
        try {
            let { profiles } = await app.$axios.$get('/api/profiles/');
            if (profiles) return { profiles };
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>

.profileList {
    padding: 0;
}

.profileListItem {
    text-align: center;
    width: 250px;
    list-style: none;
    margin: 0.25em;
    display: inline-block;
}

.profileListItem:first-of-type {
    margin-left: 0;
}

.profileListItem:last-of-type {
    margin-right: 0;
}

.profile__username {
    font-size: 20px;
    letter-spacing: 2px;
    top: 1em;
    color: #333;
}

.profileImage {
    border-radius: 42%;
    max-width: 200px;
    max-height: 200px;
    
    display: block;
    margin: 0 auto;
    margin-bottom: 0.25em;
}

</style>