<template>
    <li v-if="effects.length"> <h3 v-if="title" class="effectList__actionsHeader"> {{title}} </h3>
        <ul class="effectList__effect">
            <li v-for="effect in effects" :key="effect.id">
                <nuxt-link :to="'/effects/' + effect.url"> {{ effect.name }} </nuxt-link>
                <nuxt-link v-if="$auth.loggedIn" :to="'/effects/' + effect.url + '/edit'"> [edit] </nuxt-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['title', 'effects']
}
</script>

