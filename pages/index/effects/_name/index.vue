<template>
    <div class="pageContent">
        <div v-if="effect.name">
            <div v-if="$auth.loggedIn">
                <nuxt-link :to="{ path: 'edit'}" append> Edit </nuxt-link>
                <a @click="deleteEffect(effect._id)"> Delete </a>
            </div>
            <h1> {{ effect.name }} </h1>
            <effect-description :formattedDocument="effect.description_formatted" />
            <div class="effect__gallery">
                <hr v-show="effect.replications">
                <h3> Gallery </h3>
                <light-box base="/gallery/" :imageSet="effect.replications" />
            </div>
            <div class="effect__external_links">
                <hr />
                <h3> External Links </h3>
                <ul>
                    <li v-for="link in effect.external_links" :key="link.url">
                        <ext-link :href="link.url"> {{ link.title }} </ext-link>
                    </li>
                </ul>
            </div>
            <div class="effect__see_also">
                <hr />
                <h3> See Also </h3>
                <ul>
                    <li v-for="link in effect.see_also" :key="link.url">
                        <ext-link :href="link.url"> {{ link.title }} </ext-link>
                    </li>
                </ul>
            </div> 
            <hr v-show="effect.citations" />
            <citation-list :citations="effect.citations" />
        </div>
        <div v-else>
            <h1> Effect Not Found </h1>
        </div>
    </div>
</template>

<script>
import EffectDescription from '@/components/effects/EffectDescription.vue';
import CitationList from '@/components/effects/CitationList.vue';
import LightBox from '@/components/LightBox/LightBox.vue';
import ExtLink from '@/components/ExtLink.vue';

export default {
    components: {
        EffectDescription,
        CitationList,
        LightBox,
        ExtLink
    },
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
            return { effect: {} }
        }
    }
}

</script>

<style>
.effectDescription ul {
    margin: 0;
    white-space: normal;
}

.effectDescription p {
    margin: 0;
    padding: 0;
    white-space: normal;
}

.effectDescription ul li {
    color: black;
    margin: 0;
    padding: 0;
}


</style>