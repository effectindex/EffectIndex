<template>
    <div>
        <hr />
        <table>
            <thead>
                <td> Username </td> <td> </td> <td> </td>
            </thead>
            <tr v-for="profile in profiles" :key="profile._id">
                <td>  <nuxt-link class="profileList__username" :to="'/profiles/' + profile.username"> {{ profile.username }} </nuxt-link> </td>
                <td>  <nuxt-link :to="'/admin/users/profiles/' + profile._id"> [Edit] </nuxt-link> </td>
                <td>  <a class="delete" @click="deleteProfile(profile._id)"> [Delete] </a> </td>
            </tr>
        </table>
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
.delete {
    color: red;
}

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

