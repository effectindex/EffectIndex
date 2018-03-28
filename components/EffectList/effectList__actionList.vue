<template>
    <li> <h3 v-if="title" class="effectList__actionsHeader"> {{title}} </h3>
        <ul class="effectList__effect">
            <li v-for="effect in effects" :key="effect.id">
                <nuxt-link :to="'/effects/' + effect.template"> {{ effect.name }} </nuxt-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['title', 'effects']
}
</script>

