<template>
    <div>
        <hr />
        <h3> EffectIndex User List </h3>
        <table class="admin__userListTable">
            <thead>
                <td> Username </td>
                <td> Roles </td>
                <td> </td>
            </thead>
            <tr v-for="user in users" :key="user._id">
                <td> <nuxt-link :to="'/people/' + user.username"> {{ user.username }} </nuxt-link> </td>
                <td> {{ listRoles(user) }} </td>
                <td> <nuxt-link :to="'/admin/users/modify/' + user._id"> Modify </nuxt-link> </td>
            </tr>
        </table>
    </div>

</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.admin.userlist;
        }
    },
    methods: {
        listRoles(user) {
            let roles = '';

            for (let role in user.scope) {
                if (user.scope[role] === true) roles = roles + ' ' + role;
            }

            return roles;
        }
    },
    async fetch( { store } ) {
        await store.dispatch('getAllUsers');
    }
}

</script>
