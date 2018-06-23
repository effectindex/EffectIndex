<template>
    <div>
        <h3> EffectIndex User List </h3>
        <ul>
            <li v-for="user in users" :key="user._id"> {{ user.username }} </li> 
        </ul>

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

