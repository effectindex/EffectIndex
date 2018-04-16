<template>
    <div>
        <h1> Effects </h1>
        <ul>
            <li v-for="effect in $store.state.dbeffects" :key="effect._id"> 
                <nuxt-link :to="'/effects/' + effect.name"> {{ effect.name }} </nuxt-link>
            </li>
        </ul>
        <div v-if="$auth.loggedIn"> 
            <nuxt-link to="/effects/add"> Add an effect </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData(app) {
        await app.store.dispatch('getEffects');
    },
    scrollToTop: true
}

</script>

<style>

</style>