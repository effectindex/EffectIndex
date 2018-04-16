<template>
    <div>
        <h1> {{ effect.name }} </h1>
        <p> {{ effect.description_formatted }} </p>
        <div v-if="$auth.loggedIn">
            <nuxt-link :to="{ path: 'edit'}" append> Edit </nuxt-link>
            <a @click="deleteEffect(effect._id)"> Delete </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async deleteEffect(id) {
            try {
                let deletedEffect = await this.$store.dispatch('deleteEffect', id);
                this.$router.push('/effects/');
            } catch (error) {
                console.log(error);
            }
        }
    },
    async asyncData(app) {
        try {
        let { effect } = await app.store.dispatch('getEffect', app.params.name);
        return { effect };
        } catch (error) {
            console.log(error);
        }
    }
}

</script>