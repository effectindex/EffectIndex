<template>
    <div>
        <hr />
        <h1> User Profiles </h1>
        <nuxt-link to="/admin/users/profiles/add"> Add New Profile </nuxt-link>

        <ul v-if="profiles.length" class="profileList">
            <li class="profileListItem" v-for="profile in profiles" :key="profile._id">
               <nuxt-link class="profileList__username" :to="'/profiles/' + profile.username"> {{ profile.username }} </nuxt-link>
               <nuxt-link :to="'/admin/users/profiles/edit/' + profile._id"> [Edit] </nuxt-link>
               <a class="delete" @click="deleteProfile(profile._id)"> [Delete] </a>
               
                </li>
        </ul>
    </div>



</template>

<script>
    export default {
        methods: {
            async deleteProfile(id) {
                try {
                    let response = await this.$axios.$delete('/api/profiles/' + id);
                    if (response) {
                        let { profiles } = await this.$axios.$get('/api/profiles/');
                        this.profiles = profiles;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async asyncData(app) {
            try {
                let profiles = await app.$axios.$get('/api/profiles/');
                return profiles;
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style scoped>
.profileList {
    margin-top: 1em;
    padding-left: 1em;
}

.profileListItem {
    list-style: none;
    color: black;
    margin-left: 0.25em;
}

.profileList__username {
    font-style: italic;
}

</style>

