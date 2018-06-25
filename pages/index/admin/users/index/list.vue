<template>
    <div>
        <hr />
        <h3> EffectIndex User List </h3>
        <table class="admin__userListTable">
            <thead>
                <td> Username </td>
                <td> Role </td>
                <td> E-Mail </td>
                <td> </td>
            </thead>
            <tr v-for="user in users" :key="user._id">
                <td> <nuxt-link :to="'/people/' + user.username"> {{ user.username }} </nuxt-link> </td>
                <td> {{ user.role }} </td>
                <td> {{ user.email }} </td>
                <td> <nuxt-link to="modify"> Modify </nuxt-link> </td>
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
    async fetch( { store } ) {
        await store.dispatch('getAllUsers');
    }
}

</script>

<style scoped>
    .admin__userListTable thead {
        font-weight: bold;
    }

    .admin__userListTable td {
        min-width: 150px;
    }

</style>

