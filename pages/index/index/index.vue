<template>
<div>
    <p class="pageContent__paragraph">
        <span class="pageContent__paragraph--bold"> Effect Index, </span> which is currently under construction, is a 
        resource dedicated to establishing the field of formalised subjective effect documentation. It is the home
        of the Subjective Effect Index (SEI), which exists to serve as a comprehensive map of all potential experiences
        which can occur under the influence of any class of psychoactive compound, particularly hallucinogens.
    </p>
    <p class="pageContent__paragraph">The effects identified here are accompanied by detailed descriptions of how it feels to experience them. 
        These are written in an objective and <nuxt-link to="/documentation-style-guide">consistent writing style</nuxt-link> which is based upon phenomenological observation
        and avoids the use of metaphor or analogy. The descriptions also strive to use language which is as simple and
        understandable as possible; this has been done in the hope that they will serve as a universal terminology which
        allows people to describe and discuss that which was previously considered ineffable. </p>
    <p class="pageContent__paragraph">The effects are separated into over 200 distinct components which are organised into categories based on the sense 
        affected and their behaviour. Many of these are further broken down into levels, subcomponents, and variations in 
        style which can occur across different substances. Detailed <nuxt-link to="/gallery">replications</nuxt-link> are included whenever possible to supplement
        the text descriptions in the form of images, audio clips, and animations. </p>
    <div class="pageContent__buttonContainer">
        <nuxt-link class="pageContent__button" to="/about"> Learn More </nuxt-link>
    </div>
    <effect-list listType="all" />
</div>
</template>

<script>
import EffectList from '@/components/EffectList/EffectList';

export default {
    components: {
        EffectList
    }
}
</script>

<style scoped>
    .pageContent__button {
        font-family: proxima-nova;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: inline;
        text-decoration: none;
        color: white;
        background-color: #272727;
        opacity: 1;
        padding: 13px 25px;
        transition: opacity 100ms linear;
    }

    .pageContent__button:hover {
        opacity: 0.8;
    }

    .pageContent__buttonContainer {
        text-align: center;
        padding-top: 1em;
    }
</style>