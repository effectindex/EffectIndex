<template>
    <ol class="citationList">
        <citation v-if="citations"
            v-for="citation in citations"
            :key="citation.url"
            :from="citation.from"
            :no="citation.no">
            {{ citation.text }} |
            <ext-link :href="citation.url">
            {{ citation.url }}
            </ext-link>
        </citation>
        <slot></slot>
    </ol>
</template>

<script>
import Citation from '@/components/effects/Citation.vue';
import ExtLink from '@/components/ExtLink.vue';

export default {
    components: {
        Citation,
        ExtLink
    },
    props: ['citations']
}
</script>

<style>

.citationList {
    column-width: 325px;
    column-rule: 1px solid #EEE;
    column-gap: 50px;
    padding-left: 0;
    font-size: 14px;
    font-weight: bold;
}

.citationList li {
    margin-left: 15px;
    padding: 0.25em 0;
    min-height: 75px;
    font-weight: bold;
    break-inside: avoid;
    page-break-inside: avoid;
}

.citation__contents {
    font-weight: normal;
    margin-left: 5px;
}

@media (max-width: 640px) {

    .citationList li {
        word-break: break-all;
    }

    .citation__contents {
        margin-left: 0;
    }
}

.citationList li:target {
    background-color: #F6F6FF;
}

.citationList a:link {
    color: rgb(61, 153, 145);
}

</style>