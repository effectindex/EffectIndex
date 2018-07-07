<template>
    <div class="pageContent">
        <div v-show="effect.name">
            <div v-if="$auth.loggedIn">
                <nuxt-link :to="{ path: 'edit'}" append> [Edit] </nuxt-link>
                <a @click="deleteEffect(effect._id)" style="color: red; float:right;"> [Delete] </a>
            </div>
            
            <i :class="'fa ' + icon + ' fa-2x categoryIcon'"> </i>
            <div v-if="hasSection('description_raw')">
                <h1> {{ effect.name }} </h1>
                <formatted-document :document="effect.description_formatted" />
            </div>
            <div v-if="hasSection('analysis_raw')">
                <hr />
                <h3> Analysis </h3>
                <formatted-document :document="effect.analysis_formatted" />
            </div>
            <div v-if="hasSection('replications')" class="effect__gallery">
                <hr v-show="effect.replications" />
                <h3> Gallery </h3>
                <light-box base="/img/gallery/" :imageSet="effect.replications" :order="effect.gallery_order"/>
            </div>
            <div v-if="hasSection('see_also') || hasSection('external_links')">
                <hr />
                <div v-if="hasSection('see_also')">
                    <h3> See Also </h3>
                    <ul>
                        <li v-for="link in effect.see_also" :key="link.url">
                            <ext-link :href="link.url"> {{ link.title }} </ext-link>
                        </li>
                    </ul>
                </div>
                <div v-if="hasSection('external_links')">
                    <h3> External Links </h3>
                    <ul>
                        <li v-for="link in effect.external_links" :key="link.url">
                            <ext-link :href="link.url"> {{ link.title }} </ext-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div v-if="hasSection('citations')">
                <hr />
                <h3> References </h3>
                <citation-list :citations="effect.citations" />
            </div>

            <div v-if="hasSection('tags')">
                <hr />
                <h3> Tags </h3>
                <tag v-for="tag in effect.tags" :key="tag" :value="tag" />
            </div>

            <div v-if="hasSection('contributors')">
                <hr />
                <h3> Contributors </h3>
                <p> The following people contributed to the content of this article: </p>
                <span class="contributor" v-for="contributor in effect.contributors" :key="contributor"><nuxt-link :to="'/profiles/' + contributor">{{ contributor }}</nuxt-link></span>
            </div>
        </div>
        <div v-if="!effect.name">
            <h1> Effect Not Found </h1>
        </div>
    </div>
</template>

<script>
import formattedDocument from '@/components/effects/formattedDocument.vue';
import CitationList from '@/components/effects/CitationList.vue';
import LightBox from '@/components/LightBox/LightBox.vue';
import ExtLink from '@/components/ExtLink.vue';
import Tag from '@/components/effects/Tag.vue';

export default {
    components: {
        formattedDocument,
        CitationList,
        LightBox,
        ExtLink,
        Tag
    },
    scrollToTop: true,
    methods: {
        async deleteEffect(id) {
            try {
                let deletedEffect = await this.$store.dispatch('deleteEffect', id);
                this.$router.push('/effects/');
            } catch (error) {
                console.log(error);
            }
        },
        hasSection(name) {
            if (name in this.effect) {
                if (Array.isArray(this.effect[name])) {
                    if (this.effect[name].length > 0) return true;
                } else if (typeof(this.effect[name]) === 'string') {
                    if (this.effect[name].length > 0) return true;
                } 
            }
            return false;
        }
    },
    computed: {
        icon () {
            let tags = this.effect['tags'];
            if (Array.isArray(tags)) {
                if (tags.indexOf('cognitive') > -1) return 'fa-puzzle-piece';
                if (tags.indexOf('visual') > -1) return 'fa-eye';
                if (tags.indexOf('auditory') > -1) return 'fa-volume';
                if (tags.indexOf('tactile') > -1) return 'fa-hand-paper-o';
                if (tags.indexOf('disconnective') > -1) return 'fa-chain-broken';
                if (tags.indexOf('multisensory') > -1) return 'fa-cogs';
                if (tags.indexOf('physical') > -1) return 'fa-child';
            }
            return 'fa-question';
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
.formattedDocument ul, .formattedDocument ol {
    margin: 0;
    white-space: normal;
}

.formattedDocument p {
    margin: 0;
    padding: 0;
    white-space: normal;
}

.formattedDocument ul li, .formattedDocument ol li {
    color: black;
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
}

.formattedDocument ul li:last-of-type, .formattedDocument ol li:last-of-type {
    margin-bottom: 0;
}

.formattedDocument p {
    color: black;
}

.tagList {
    list-style: none;
}

hr {
    clear: both;
}

.formattedDocument .bullet {
    padding-left: 3em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}

.formattedDocument .bullet::before {
    content: '●';
    padding-right: 1em;
}

.contributor::after {
    content: ', ';
}

.contributor:last-of-type::after {
    content: '';
}


</style>